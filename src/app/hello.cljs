(ns app.hello
  (:require [reagent.core :as r]
            [app.ui :as ui]
            [app.plot :as plt]
            [app.box :as box]
            [app.hand :as hand]))

(defn click-counter [c]
  [:div "The atom " [:code "click-count"] " has value: " @c ". "
   [:input {:type "button" :value "Click me!" :on-click #(swap! c inc)}]])

(defn map-with-key
  {:doc "コレクションの各要素にコンポーネントを返却する関数 f を適用したうえで、react key を付与"}
  [f coll]
  (->> coll (map-indexed (fn [i c] ^{:key i} [f c]))))

(defn example-modifying-atom [a] [:div [:p "The value is now: " @a [:br] "Change it here: " [ui/text-input a]]])

(defn calc-bmi [{:keys [height weight bmi] :as data}]
  (let [h (/ height 100)]
    (if (nil? bmi)
      (assoc data :bmi (/ weight (* h h)))
      (assoc data :weight (* bmi h h)))))

(defn bmi [data]
  (let [{:keys [weight height bmi]} @data
        [color diagnose] (cond
                          (< bmi 18.5) ["orange" "underweight"]
                          (< bmi 25) ["inherit" "normal"]
                          (< bmi 30) ["orange" "overweight"]
                          :else ["red" "obese"])]
    [:div
     [:h3 "BMI calculator"]
     [:div
      "Height: " (int height) "cm"
      [ui/slider data :height height 100 220 :bmi calc-bmi]]
     [:div
      "Weight: " (int weight) "kg"
      [ui/slider data :weight weight 30 150 :bmi calc-bmi]]
     [:div
      "BMI: " (int bmi) " "
      [:span {:style {:color color}} diagnose]
      [ui/slider data :bmi bmi 10 50 :weight calc-bmi]]]))


(def counters [(r/atom 0) (r/atom 1) (r/atom 2)])
(def bmi-data (r/atom (calc-bmi {:height 100 :weight 80})))
(def plot-data (r/atom  [{:x (->> (range) (map identity) (take 5) )
                     :y (->> (range) (map #(* % %)) (take 5) )
                     :type "scatter"}]))

(def hand-data [ 3.56702536e-01,  1.25448644e-01, -3.78144911e-08,  2.58442879e-01,
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

(def layout (r/atom {:title "Sample"}))

(def plot-node (atom nil))

(def current-page (r/atom :home))

(def page-home
  [:<>
   [:p.someclass "Hello world, " [:strong "ReagentApp"] " is running!"]
   [:p [:strong "再描画"] "可能なリスト"] [ui/lister (->> counters (map-with-key click-counter))]
   [:p [:strong "再描画"] "可能なリスト"] [ui/lister (range 3)]
   [:p] [ui/timer]
   [:p] [example-modifying-atom (r/atom "foo")]
   [:p] [bmi bmi-data]
   [:p] [:section
         [:p "plotly.js によるプロット"]
         [plt/plot {:data plot-data :layout layout :node plot-node}]
         [:button {:on-click #(plt/update-plot {:data plot-data :node plot-node})} "Update Plot"]]
   [:p] [box/rolling-box {}]
   [:p] [hand/hand-skeleton {:hand-pos hand-data}]])

(def page-plot [:<>
   [:p.someclass "This is " [:strong "Plot"] " page"]
   [:p] [:section
         [:p "plotly.js によるプロット"]
         [plt/plot {:data plot-data :layout layout :node plot-node}]
         [:button {:on-click #(plt/update-plot {:data plot-data :node plot-node})} "Update Plot"]]])

(defn rooter []
  (fn []
    (case @current-page
      :home page-home
      :plot page-plot)))

(defn hello [] (rooter))
