(ns app.three
  (:require ["three" :as Three]))

(defn resize-view
  {:doc "画面のリサイズを行う"}
  [node width height ratio renderer camera] (when @node
                                              (let [w (or width (.-clientWidth @node))
                                                    h (or height (* w ratio))]
                                                (.setSize renderer w h)
                                                (set! (.-aspect camera) (/ w h))
                                                (.updateProjectionMatrix camera))))

(defn init-view
  {:doc "画面の基本的な初期設定を行う関数"}
  [scene renderer camera light ambient]
  (.setPixelRatio renderer js/devicePixelRatio)
  ;; (set! (.-background scene) color-bg)
  (.setClearColor renderer 0x000000 0)
  (.set camera.position 0 0 1000)
  (.add scene light)
  (.add scene ambient)
  (.set light.position 1 1 1))

(defn sphere-three [{:keys [radius w-segments h-segments color]
                     :or {radius 1.0
                          w-segments 32
                          h-segments 16}}]
  (let [geom (Three/SphereGeometry. radius w-segments h-segments)
        material (Three/MeshBasicMaterial. #js {:color color})]
    (Three/Mesh. geom material)))

(defn line-three [p1 p2 {:keys [color] :or {color 0xff0000}}]
  (let [points (clj->js [p1 p2])
        geom   (Three/BufferGeometry.)]
    (.setFromPoints geom points)
    (Three/Line. geom (Three/LineBasicMaterial. #js {:color color}))))
