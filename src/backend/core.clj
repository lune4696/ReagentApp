(ns backend.core
  (:require [compojure.core :refer [routes]]
            [ring.adapter.jetty :as j]
            [backend.handler :refer [main-routes]]
            [backend.middleware :refer [set-middleware]]
            ))

(def server (atom nil))

(def app
  (set-middleware
   (routes
    main-routes)))

(defn start-server []
  (when-not @server
    (reset! server (j/run-jetty #'app {:port 3000 :join? false}))))
    ;; handler シンボルを Var オブジェクトに変更 (handler をシンボルとして（つまり、バインディング先）ではなくバインディング自体を引き渡したいから)

(defn stop-server []
  (when @server
    (.stop @server)
    (reset! server nil)))

(defn restart-server []
  (when @server
    (stop-server)
    (start-server)))
