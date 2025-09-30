(ns app.hello
  (:require [reagent.core :as r] 
            ["plotly.js-dist-min" :as Plotly]))

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
  (r/with-let [f (fn [el]
                   (when el
                     (reset! node el)
                     (r/after-render #(.newPlot Plotly @node (clj->js @data) (clj->js @layout)))) )]
    [:div {:ref f}]
    (finally (when @node (.purge Plotly @node)))))

(defn update-plot [{:keys [data node]}]
  (reset! data [{:x (->> (range) (map identity) (take 5))
                 :y (->> (range) (map #(* 2 %)) (take 5))
                 :type "scatter"}])
  (when @node
    (.react Plotly @node (clj->js @data) (clj->js nil))))


(def data (r/atom  [{:x (->> (range) (map identity) (take 5) )
                     :y (->> (range) (map #(* % %)) (take 5) )
                     :type "scatter"}]))
(def layout (r/atom {:title "Sample"}))
(def plot-node (atom nil))

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
         [:button {:on-click #(update-plot {:data data :node plot-node})} "Update Plot"]]])

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
