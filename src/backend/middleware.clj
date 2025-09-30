(ns backend.middleware
  (:require [ring.middleware.defaults :as defaults]))
;; 特定のネームスペースを require していないことに注意

;; 開発用のミドルウェアを動的に require するためのプライベート関数
(defn- try-resolve[sym]
  (try
    (require (symbol (namespace sym)))
    ;; symbol 与えられた名前空間と名前のシンボルを返却
    ;; namespace 与えられたシンボルないしキーワードの名前空間を返却
    (resolve sym) ;; 現在の名前空間下でのシンボル解決
    (catch java.io.FileNotFoundException _)
    (catch RuntimeException _)))


;; このミドルウェアが使われるときだけ、開発用のミドルウェアを動的に require したい
(defn wrap-dev [handler]
  {:pre [(or (fn? handler) (and (var? handler) (fn? (deref handler))))]}
  (let [wrap-exceptions (try-resolve 'prone.middleware/wrap-exceptions)
        wrap-reload (try-resolve 'ring.middleware.reload/wrap-reload)]
    (if (and wrap-reload wrap-exceptions)
      (-> handler
          wrap-exceptions
          wrap-reload)
      (throw (RuntimeException. "Middleware requires ring/ring-devel and prone;")))))

(def ^:private wrap #'defaults/wrap)

(defn set-middleware [handler]
  (-> handler
      ;; (wrap wrap-dev (#(or % (= "true" %)) (:dev env)))
      (wrap wrap-dev false)
      (defaults/wrap-defaults defaults/site-defaults)))
