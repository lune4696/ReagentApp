(ns app.core
  (:require [reagent.dom :as dom]
            [app.hello :refer [hello]]))

(defn ^:dev/after-load render
  "0.10 以降、 reagent.core/render は reagent.dom/render に移された (React17+)"
  [] (dom/render [hello] (.getElementById js/document "app")))

(defn ^:export main
  "Run application startup logic."
  [] (render))
