(ns app.bmi
  (:require [app.ui :as ui]))

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

