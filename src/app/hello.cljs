(ns app.hello
  (:require [reagent.core :as r]))

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
              "キーの付与は、上記のようにメタデータか、コンポーネントの第一引数として渡す"]}
  [items] [:ul
           ;; (map-with-key #((vector :li "Item: " %)) items)
           (for [item items]
             ^{:key item} [:li "Item: " item])])

;; ul: un-ordered-listup
;; ol: ordered-listup
;; li: html の箇条書きタグ

(defn timer-component []
  (let [seconds-elapsed (r/atom 0)]
    (fn []
      (js/setTimeout #(swap! seconds-elapsed inc) 1000)
      [:div
       "Seconds Elapsed: " @seconds-elapsed])))

(defn timer-fn-component []
  (r/with-let [seconds-elapsed (r/atom 0)]
    (js/setTimeout #(swap! seconds-elapsed inc) 1000)
    [:div "Seconds Elapsed: " @seconds-elapsed]))

(defn timer-class-component []
  (let [seconds-elapsed (r/atom 0)]
    (r/create-class                     ;; クラスなので内部状態を持てる
     {:component-did-mount              ;; DOM にコンポーネントがマウントされた直後のみ呼ばれる
      (fn []
        (js/setInterval #(swap! seconds-elapsed inc) 1000))
      :reagent-render                   ;; クラスコンポーネントに対する render 処理
      (fn []
        [:div "Seconds Elapsed: " @seconds-elapsed])})))

(def sec (r/atom 0))
(->> (js/setInterval #(swap! sec inc) 1000))


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
       [:p "The value is now: " @val]
       [:p "Change it here: " [atom-input val]]])))

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

(defn hello []
  [:<>
   [:p.someclass "Hello world, " [:strong "ReagentApp"] " is running!"]
   [:p "Here's an example of using a component with state:"]
   [:p [:div "List is like: "[lister-simple (range 5)]]]
   [:p [click-counter click-count]] ;; component を返す関数は、() ではなく [] で評価
   [:p [:div [:strong "再描画"] "可能なリスト" [lister-simple (->> counters (map-with-key click-counter))]]]
   [:p [timer-fn-component]]
   [:p [:div "sec: " @sec]]
   [:p [shared-state]]
   [:p [bmi-component]]
   ])
