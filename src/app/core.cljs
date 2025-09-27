(ns app.core
  "This namespace contains your application and is the entrypoint for 'yarn start'."
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [app.hello :refer [hello]]))

(defn ^:dev/after-load render
  "
  Render the toplevel component for this app.
  0.10 以降、 reagent.core/render は deprecated になった
  reagent.dom/render に移され、 React 17 以降に対応
  "
  
  []
  (dom/render [hello] (.getElementById js/document "app")))

(defn ^:export main
  "Run application startup logic."
  []
  (render))
