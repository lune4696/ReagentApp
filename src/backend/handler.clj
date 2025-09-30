(ns backend.handler
  (:require [compojure.core :refer [defroutes GET context]]
            [compojure.route :as route]
            [cheshire.core :as json]
            [hiccup.page :refer [html5]]
            [ring.util.response :refer [response content-type]]))

(defn common-html [req & body]
  (html5
   [:head
    [:title "TODO"] ]
   [:body 
    [:main body]]))

(defn html [res]
  (content-type res "text/html; charset=utf-8"))

(defn json [res]
  (content-type res "application/json"))

(def data [{:x (->> (range) (map identity) (take 100) )
            :y (->> (range) (map #(* % %)) (take 100) )
            :type "scatter"}])

(defn dummy-json [req]
  (-> (response (json/generate-string {:data data}))
      json))

(defn dummy-html [req]
  (-> (response (common-html req [:h2 "hoge"]))
      html))

(defroutes main-routes
  (context "/data" _
    (GET "/json" _ dummy-json)
    (GET "/html" _ dummy-html)
    (route/not-found "<h1>Not found</h1>")))
