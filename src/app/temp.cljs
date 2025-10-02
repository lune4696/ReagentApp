(ns app.temp
  (:require [reagent.core :as r]))

(defn timer-component []
  (let [seconds-elapsed (r/atom 0)]
    (fn []
      (js/setTimeout #(swap! seconds-elapsed inc) 1000)
      [:div
       "Seconds Elapsed: " @seconds-elapsed])))

(defn timer-class-component []
  (let [seconds-elapsed (r/atom 0)]
    (r/create-class                     ;; クラスなので内部状態を持てる
     {:component-did-mount              ;; DOM にコンポーネントがマウントされた直後のみ呼ばれる
      (fn []
        (js/setInterval #(swap! seconds-elapsed inc) 1000))
      :reagent-render                   ;; クラスコンポーネントに対する render 処理
      (fn []
        [:div "Seconds Elapsed: " @seconds-elapsed])})))

;; グローバルの時間カウント
(def sec (r/atom 0))
(->> (js/setInterval #(swap! sec inc) 1000))
