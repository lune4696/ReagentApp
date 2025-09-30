(defproject any "0.1.0-SNAPSHOT"
  :description "any awesome clojure"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [clj-python/libpython-clj "2.026"]
                 [ring "1.15.1"]
                 ;; web server - app/framework interface
                 [ring/ring-defaults "0.7.0"]
                 ;; ミドルウェア管理
                 [compojure "1.7.2"]
                 ;; rooting
                 [environ "1.2.0"]
                 ;; dynamic reload
                 [hiccup "1.0.5"]
                 ;; html (w/ css & js) template engine
                 [cheshire "6.1.0"]
                 ;; json
                 ]
  :plugins [[lein-environ "1.2.0"]
            ;; dynamic reload
            ]
  :repl-options {:init-ns backend.core}
  :uberjar-name "app.jar"
  :resource-paths ["resources/"]
  :profiles {:dev {:source-paths ["src/"]
                   :dependencies [[prone "1.6.4"]]
                   :env {:dev true}}
             :uberjar {:aot :all ;; アプリケーション起動高速化、実行時バイトコードの生成を止める
                       :main backend.main}} ;; エントリポイント指定
  :jvm-opts ["--enable-native-access=ALL-UNNAMED"])
