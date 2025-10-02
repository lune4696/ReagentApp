(ns app.plot
  (:require [reagent.core :as r]
            ["plotly.js-dist-min" :as Plotly]))

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
