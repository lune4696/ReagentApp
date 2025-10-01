(ns app.hello
  (:require [reagent.core :as r] 
            ["plotly.js-dist-min" :as Plotly]
            ["three" :as Three]
            ["three/examples/jsm/controls/OrbitControls.js" :refer [OrbitControls]]
            ;; ["three/addons/controls/OrbitControls.js" :refer [OrbitControls]]
            ))

(defn click-counter [c]
  [:div
   "The atom " [:code "click-count"] " has value: "
   @c ". "
   [:input {:type "button" :value "Click me!"
            :on-click #(swap! c inc)}]])

(def click-count (r/atom 0))
(def counters [(r/atom 0) (r/atom 1) (r/atom 2)])

(defn map-with-key
  {:doc "コレクションの各要素にコンポーネントを返却する関数 f を適用したうえで、react key を付与"}
  [f coll]
  (->> coll (map-indexed (fn [i c] ^{:key i} [f c]))))

(defn lister-simple
  {:doc "リスト"
   :comments ["^{:key item} は必ずしも必要ないが、リストに対してユニークキーを付与すると
               React のパフォーマンス改善に役立つ (by reagent tutorial)"
              "実際には引き渡さないと描画バグが起きやすいので、絶対渡さないといけない"
              "キーの付与は、上記のようにメタデータか、コンポーネントの第一引数として渡す"
              "ul: un-ordered list, ol: ordered-list, li: list"]}
  [items] [:ul (->> items (map-indexed (fn [i c] (with-meta [:li "Item: " c] {:key i}))))])


(defn timer-fn-component []
  (r/with-let [seconds-elapsed (r/atom 0)]
    (js/setTimeout #(swap! seconds-elapsed inc) 1000)
    [:div "Seconds Elapsed: " @seconds-elapsed]))


(defn atom-input
  {:comments [":input マップの :on-change 関数には react から event object が渡される"
              ".-<any> はフィールドアクセス"
              "この場合 event.target.value で value を更新している"]}
  [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn shared-state []
  (let [val (r/atom "foo")]
    (fn []
      [:div
       [:p
        "The value is now: " @val [:br] "Change it here: " [atom-input val]]])))

(defn calc-bmi [{:keys [height weight bmi] :as data}]
  (let [h (/ height 100)]
    (if (nil? bmi)
      (assoc data :bmi (/ weight (* h h)))
      (assoc data :weight (* bmi h h)))))

(def bmi-data (r/atom (calc-bmi {:height 100 :weight 80})))

(defn slider [param value min max invalidates]
  [:input {:type "range"
           :value value
           :min min
           :max max
           :style {:width "100%"}
           :on-change (fn [e]
                        (let [new-value (js/parseInt (.. e -target -value))]
                          (swap! bmi-data
                                 (fn [data]
                                   (-> data
                                       (assoc param new-value)
                                       (dissoc invalidates)
                                       (calc-bmi))))))}])

(defn bmi-component []
  (let [{:keys [weight height bmi]} @bmi-data
        [color diagnose] (cond
                          (< bmi 18.5) ["orange" "underweight"]
                          (< bmi 25) ["inherit" "normal"]
                          (< bmi 30) ["orange" "overweight"]
                          :else ["red" "obese"])]
    [:div
     [:h3 "BMI calculator"]
     [:div
      "Height: " (int height) "cm"
      [slider :height height 100 220 :bmi]]
     [:div
      "Weight: " (int weight) "kg"
      [slider :weight weight 30 150 :bmi]]
     [:div
      "BMI: " (int bmi) " "
      [:span {:style {:color color}} diagnose]
      [slider :bmi bmi 10 50 :weight]]]))


(defn plot [{:keys [data layout node]}]
  (r/with-let
      [f (fn [el]
           (when el
             (reset! node el)
             (r/after-render #(.newPlot Plotly @node (clj->js @data) (clj->js @layout)))))] 
      [:div {:ref f}]
      (finally (when @node (.purge Plotly @node)))))

(defn update-plot [{:keys [data node]}]
  (reset! data [{:x (->> (range) (map identity) (take 5))
                 :y (->> (range) (map #(* 2 %)) (take 5))
                 :type "scatter"}])
  (when @node
    (.react Plotly @node (clj->js @data) (clj->js nil))))


(defn rolling-box [{:keys [width height ratio]
                    :or {ratio (/ 9 16)}
                    :as opt}]

  (r/with-let
      [node (atom nil)
       scene (Three/Scene.)
       camera (Three/PerspectiveCamera. 90 1 0.1 3000)
       renderer (Three/WebGLRenderer. #js {:alpha true})
       geometry (Three/BoxGeometry. 500 500 500)
       box-material (Three/MeshStandardMaterial. #js {:color 0x0000FF})
       color-bg (Three/Color. 0x808080)
       box (Three/Mesh. geometry box-material)
       light (Three/DirectionalLight. 0xFFFFFF 2)
       ambient (Three/AmbientLight. 0xFFFFFF 0.5)
       update-size (fn []
                     (when @node
                       (let [w (or width (.-clientWidth @node))
                             h (or height (* w ratio))]
                         (.setSize renderer w h)
                         (set! (.-aspect camera) (/ w h))
                         (.updateProjectionMatrix camera))))
       f (fn [el]
           (when el (reset! node el))
           (r/after-render
            #(when @node
               (when-not (.contains @node (.-domElement renderer)) 
                 (.appendChild @node (.-domElement renderer)))
               (let [width (or width (.-clientWidth @node))
                     height (or height (* width ratio))
                     controls (OrbitControls. camera (.-domElement renderer))]
                 
                 (update-size)
                 (js/window.addEventListener "resize" update-size)
                 (.setPixelRatio renderer js/devicePixelRatio)
                 ;; (set! (.-background scene) color-bg)
                 (.setClearColor renderer 0x000000 0)
                 (.set camera.position 0 0 1000)
                 (.add scene box)
                 (.add scene light)
                 (.add scene ambient)
                 (.set light.position 1 1 1)
                 (.render renderer scene camera)
                 (letfn
                     [(tick []
                        (js/requestAnimationFrame tick) 
                        (set! (.. box -rotation -x) (+ (.. box -rotation -x) 0.01))
                        (set! (.. box -rotation -y) (+ (.. box -rotation -y) 0.01))
                        (.update controls)
                        (.render renderer scene camera))]
                     (tick))))))]
      [:div {:ref f}]
      (finally (when @node
                 (.removeChild @node (.-domElement renderer))
                 (js/window.removeEventListener "resize" update-size)))))

(defn sphere-three [{:keys [radius w-segments h-segments color]
                     :or {radius 1.0
                          w-segments 32
                          h-segments 16}}]
  (let [geom (Three/SphereGeometry. radius w-segments h-segments)
        material (Three/MeshBasicMaterial. #js {:color color})]
    (Three/Mesh. geom material)))

(defn hand-joint-three [{:keys [radius color xyz]}]
  (->> xyz
       (partition-all 3)
       (map (fn [[x y z]]
              (let [mesh (sphere-three {:radius radius :color color})]
                (.set (.-position mesh) x y z)
                mesh)))
       vec))

(defn line-three [p1 p2 {:keys [color] :or {color 0xff0000}}]
  (let [points (clj->js [p1 p2])
        geom   (Three/BufferGeometry.)]
    (.setFromPoints geom points)
    (Three/Line. geom (Three/LineBasicMaterial. #js {:color color}))))

(defn hand-bone-three [spheres bones color]
  (map (fn [[i j]]
         (let [p1 (.-position (nth spheres i))
               p2 (.-position (nth spheres j))]
           (line-three p1 p2 {:color color})))
       bones))

(def hand-bones [[0 1]
                 [0 5]
                 [0 17]
                 [1 2]
                 [2 3]
                 [3 4]
                 [5 6]
                 [5 9]
                 [6 7]
                 [7 8]
                 [9 10]
                 [9 13]
                 [10 11]
                 [11 12]
                 [13 14]
                 [13 17]
                 [14 15]
                 [15 16]
                 [17 18]
                 [18 19]
                 [19 20]])

(defn hand [{:keys [width height ratio hand-pos]
                    :or {ratio (/ 9 16)}
                    :as opt}]

  (r/with-let
      [node (atom nil)
       scene (Three/Scene.)
       camera (Three/PerspectiveCamera. 90 1 0.1 1000)
       renderer (Three/WebGLRenderer. #js {:alpha true})
       hand-joints (hand-joint-three {:radius 0.025 :color 0x00FF00 :xyz hand-pos})
       hand-lines (hand-bone-three hand-joints hand-bones 0xFF0000)
       light (Three/DirectionalLight. 0xFFFFFF 2)
       ambient (Three/AmbientLight. 0xFFFFFF 0.5)
       update-size (fn []
                     (when @node
                       (let [w (or width (.-clientWidth @node))
                             h (or height (* w ratio))]
                         (.setSize renderer w h)
                         (set! (.-aspect camera) (/ w h))
                         (.updateProjectionMatrix camera))))
       f (fn [el]
           (when el (reset! node el))
           (r/after-render
            #(when @node
               (when-not (.contains @node (.-domElement renderer)) 
                 (.appendChild @node (.-domElement renderer)))
               (let [width (or width (.-clientWidth @node))
                     height (or height (* width ratio))
                     controls (OrbitControls. camera (.-domElement renderer))]
                 
                 (update-size)
                 (js/window.addEventListener "resize" update-size)
                 (.setPixelRatio renderer js/devicePixelRatio)
                 (.setClearColor renderer 0x000000 0)
                 (println (first hand-joints))
                 (doseq [a hand-joints] (.add scene a))
                 (doseq [a hand-lines] (.add scene a))
                 ;; (run! (fn [sphere] (.add scene %)) hand-joints)
                 (.set camera.position 0 0 1)
                 (.add scene light)
                 (.add scene ambient)
                 (.set light.position 1 1 1)
                 (.render renderer scene camera)
                 (letfn
                     [(tick []
                        (js/requestAnimationFrame tick) 
                        (.update controls)
                        (.render renderer scene camera))]
                     (tick))))))]
      [:div {:ref f}]
      (finally (when @node
                 (.removeChild @node (.-domElement renderer))
                 (js/window.removeEventListener "resize" update-size)))))

(def data (r/atom  [{:x (->> (range) (map identity) (take 5) )
                     :y (->> (range) (map #(* % %)) (take 5) )
                     :type "scatter"}]))
(def layout (r/atom {:title "Sample"}))
(def plot-node (atom nil))

(def hand-landmark ^{:doc "https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker?hl=ja"}
  {:indices {0 "WRIST"
             1 "THUMB_CMC"
             2 "THUMB_MCP"
             3 "THUMB_IP"
             4 "THUMB_TIP"
             5 "INDEX_FINGER_MCP"
             6 "INDEX_FINGER_PIP"
             7 "INDEX_FINGER_DIP"
             8 "INDEX_FINGER_TIP"
             9 "MIDDLE_FINGER_MCP"
             10 "MIDDLE_FINGER_PIP"
             11 "MIDDLE_FINGER_DIP"
             12 "MIDDLE_FINGER_TIP"
             13 "RING_FINGER_MCP"
             14 "RING_FINGER_PIP"
             15 "RING_FINGER_DIP"
             16 "RING_FINGER_TIP"
             17 "PINKY_MCP"
             18 "PINKY_PIP"
             19 "PINKY_DIP"
             20 "PINKY_TIP"}})

(def testdata-hand [ 3.56702536e-01,  1.25448644e-01, -3.78144911e-08,  2.58442879e-01,
        1.67962849e-01, -1.59394536e-02,  1.99230939e-01,  2.85911858e-01,
       -3.80800664e-02,  2.03225508e-01,  4.03543383e-01, -5.00700623e-02,
        2.29443818e-01,  4.89487439e-01, -5.64782768e-02,  2.37581402e-01,
        3.12023699e-01, -1.27338260e-01,  2.10384965e-01,  5.30334234e-01,
       -1.51995942e-01,  2.20977604e-01,  4.92553204e-01, -1.32310286e-01,
        2.29686156e-01,  4.23452169e-01, -1.09627999e-01,  3.22596401e-01,
        3.29260826e-01, -1.24592729e-01,  2.80629992e-01,  5.70023417e-01,
       -1.57182232e-01,  2.78808087e-01,  5.22696495e-01, -1.32588208e-01,
        2.88175613e-01,  4.45645958e-01, -1.07170537e-01,  3.93074065e-01,
        3.47538948e-01, -1.15016364e-01,  3.58776480e-01,  5.64299107e-01,
       -1.29306167e-01,  3.44347358e-01,  5.19447327e-01, -9.43925604e-02,
        3.46303612e-01,  4.50459629e-01, -6.68169409e-02,  4.44388539e-01,
        3.54201496e-01, -1.03972860e-01,  4.14635360e-01,  5.18915653e-01,
       -1.06505439e-01,  3.98395956e-01,  4.98268008e-01, -8.09545070e-02,
                    3.97958905e-01,  4.46671903e-01, -5.99709116e-02])

(def current-page (r/atom :home))

(def page-home
  [:<>
   [:p.someclass "Hello world, " [:strong "ReagentApp"] " is running!"]
   [:p [:strong "再描画"] "可能なリスト"] [lister-simple (->> counters (map-with-key click-counter))]
   [:p [:strong "再描画"] "可能なリスト"] [lister-simple (range 3)]
   [:p] [timer-fn-component]
   [:p] [shared-state]
   [:p] [bmi-component]
   [:p] [:section
         [:p "plotly.js によるプロット"]
         [plot {:data data :layout layout :node plot-node}]
         [:button {:on-click #(update-plot {:data data :node plot-node})} "Update Plot"]]
   [:p] [rolling-box {}]
   [:p] [hand {:hand-pos testdata-hand}]])

(def page-plot [:<>
   [:p.someclass "This is " [:strong "Plot"] " page"]
   [:p] [:section
         [:p "plotly.js によるプロット"]
         [plot {:data data :layout layout :node plot-node}]
         [:button {:on-click #(update-plot {:data data :node plot-node})} "Update Plot"]]])

(defn rooter []
  (fn []
    (case @current-page
      :home page-home
      :plot page-plot)))

(defn hello [] (rooter))


;; (defn timer-component []
;;   (let [seconds-elapsed (r/atom 0)]
;;     (fn []
;;       (js/setTimeout #(swap! seconds-elapsed inc) 1000)
;;       [:div
;;        "Seconds Elapsed: " @seconds-elapsed])))

;; (defn timer-class-component []
;;   (let [seconds-elapsed (r/atom 0)]
;;     (r/create-class                     ;; クラスなので内部状態を持てる
;;      {:component-did-mount              ;; DOM にコンポーネントがマウントされた直後のみ呼ばれる
;;       (fn []
;;         (js/setInterval #(swap! seconds-elapsed inc) 1000))
;;       :reagent-render                   ;; クラスコンポーネントに対する render 処理
;;       (fn []
;;         [:div "Seconds Elapsed: " @seconds-elapsed])})))

;; グローバルの時間カウント
;; (def sec (r/atom 0))
;; (->> (js/setInterval #(swap! sec inc) 1000))
