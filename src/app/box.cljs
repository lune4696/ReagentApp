(ns app.box
  (:require [reagent.core :as r]
            ["three" :as Three]
            ["three/examples/jsm/controls/OrbitControls.js" :refer [OrbitControls]]
            ;; ["three/addons/controls/OrbitControls.js" :refer [OrbitControls]]
            [app.three :as three]
            ))

(defn rolling-box [{:keys [width height ratio]
                    :or {ratio (/ 9 16)}
                    :as opt}]
  (r/with-let
      [node (atom nil)
       scene (Three/Scene.)
       camera (Three/PerspectiveCamera. 90 1 0.1 3000)
       renderer (Three/WebGLRenderer. #js {:alpha true})
       light (Three/DirectionalLight. 0xFFFFFF 2)
       ambient (Three/AmbientLight. 0xFFFFFF 0.5)
       geometry (Three/BoxGeometry. 500 500 500)
       box-material (Three/MeshStandardMaterial. #js {:color 0x0000FF})
       box (Three/Mesh. geometry box-material)
       f (fn [el]
           (when el (reset! node el))
           (r/after-render
            #(when @node
               (when-not (.contains @node (.-domElement renderer))
                 (.appendChild @node (.-domElement renderer)))
               (let [width (or width (.-clientWidth @node))
                     height (or height (* width ratio))
                     controls (OrbitControls. camera (.-domElement renderer))
                     update (partial three/resize-view node width height ratio renderer camera)]
                 (update)
                 (js/window.addEventListener "resize" update)
                 (three/init-view scene renderer camera light ambient)
                 (.add scene box)
                 (.render renderer scene camera) ;; render メソッドは個別に呼ばないと正しく描画されない
                 (letfn
                     [(tick []
                        (js/requestAnimationFrame tick)
                        (set! (.. box -rotation -x) (+ (.. box -rotation -x) 0.01))
                        (set! (.. box -rotation -y) (+ (.. box -rotation -y) 0.01))
                        (.update controls)
                        (.render renderer scene camera))]
                     (tick))))))]
      [:div {:ref f}]
      (finally (when @node
                 (.removeChild @node (.-domElement renderer))
                 (js/window.removeEventListener "resize" update)))))
