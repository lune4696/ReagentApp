(ns app.ui
  (:require [reagent.core :as r]))


(defn timer []
  (r/with-let [sec (r/atom 0)]
    (js/setTimeout #(swap! sec inc) 1000)
    [:div "Seconds Elapsed: " @sec]))

(defn text-input
  {:comments [":input マップの :on-change 関数には react から event object が渡される"
              ".-<any> はフィールドアクセス"
              "この場合 event.target.value で value を更新している"]}
  [value]
  [:input {:type "text"
           :value @value
           :on-change #(reset! value (-> % .-target .-value))}])

(defn slider [target param value min max invalidates calc]
  [:input {:type "range"
           :value value
           :min min
           :max max
           :style {:width "100%"}
           :on-change (fn [e]
                        (let [new-value (js/parseInt (.. e -target -value))]
                          (swap! target
                                 (fn [data]
                                   (-> data
                                       (assoc param new-value)
                                       (dissoc invalidates)
                                       (calc))))))}])

(defn lister
  {:doc "リスト"
   :comments ["^{:key item} は必ずしも必要ないが、リストに対してユニークキーを付与すると
               React のパフォーマンス改善に役立つ (by reagent tutorial)"
              "実際には引き渡さないと描画バグが起きやすいので、絶対渡さないといけない"
              "キーの付与は、上記のようにメタデータか、コンポーネントの第一引数として渡す"
              "ul: un-ordered list, ol: ordered-list, li: list"]}
  [items] [:ul (->> items (map-indexed (fn [i c] (with-meta [:li "Item: " c] {:key i}))))])
