(ns app.hand
  (:require [reagent.core :as r]
            ["three" :as Three]
            ["three/examples/jsm/controls/OrbitControls.js" :refer [OrbitControls]]
            ;; ["three/addons/controls/OrbitControls.js" :refer [OrbitControls]]
            [app.three :as three]))

(defn hand-joint-three [{:keys [radius color xyz]}]
  (->> xyz
       (partition-all 3)
       (map (fn [[x y z]]
              (let [mesh (three/sphere-three {:radius radius :color color})]
                (.set (.-position mesh) x y z)
                mesh)))
       vec))

(defn hand-line-three [spheres bones color]
  (map (fn [[i j]]
         (let [p1 (.-position (nth spheres i))
               p2 (.-position (nth spheres j))]
           (three/line-three p1 p2 {:color color})))
       bones))

(def hand-bones [[0 1]
                 [0 5]
                 [0 17]
                 [1 2]
                 [2 3]
                 [3 4]
                 [5 6]
                 [5 9]
                 [6 7]
                 [7 8]
                 [9 10]
                 [9 13]
                 [10 11]
                 [11 12]
                 [13 14]
                 [13 17]
                 [14 15]
                 [15 16]
                 [17 18]
                 [18 19]
                 [19 20]])

(defn get-bone-pos0 [xyzs i] (nth xyzs (first (nth hand-bones i))))
(defn get-bone-pos1 [xyzs i] (nth xyzs (second (nth hand-bones i))))

(def hand-landmark
  ^{:doc "https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker?hl=ja"}
  {:indices {0 "WRIST"
             1 "THUMB_CMC"
             2 "THUMB_MCP"
             3 "THUMB_IP"
             4 "THUMB_TIP"
             5 "INDEX_FINGER_MCP"
             6 "INDEX_FINGER_PIP"
             7 "INDEX_FINGER_DIP"
             8 "INDEX_FINGER_TIP"
             9 "MIDDLE_FINGER_MCP"
             10 "MIDDLE_FINGER_PIP"
             11 "MIDDLE_FINGER_DIP"
             12 "MIDDLE_FINGER_TIP"
             13 "RING_FINGER_MCP"
             14 "RING_FINGER_PIP"
             15 "RING_FINGER_DIP"
             16 "RING_FINGER_TIP"
             17 "PINKY_MCP"
             18 "PINKY_PIP"
             19 "PINKY_DIP"
             20 "PINKY_TIP"}})

(defn hand-skeleton [{:keys [width height ratio stream]
                      :or {ratio (/ 9 16)}}]

  (r/with-let
      [node (atom nil)
       scene (Three/Scene.)
       camera (Three/PerspectiveCamera. 90 1 0.1 1000)
       renderer (Three/WebGLRenderer. #js {:alpha true})
       light (Three/DirectionalLight. 0xFFFFFF 2)
       ambient (Three/AmbientLight. 0xFFFFFF 0.5)
       hand-joints (hand-joint-three {:radius 0.025 :color 0x00FF00
                                      :xyz (if (:frames @stream)
                                             (first (:frames @stream))
                                             (->> (range 63) (mapv (partial * 0))))})
       hand-lines (hand-line-three hand-joints hand-bones 0xFF0000)
       f (fn [el]
           (when el (reset! node el))
           (r/after-render
            (fn []
              (when @node
                (when-not (.contains @node (.-domElement renderer))
                  (.appendChild @node (.-domElement renderer)))
                (let [width (or width (.-clientWidth @node))
                      height (or height (* width ratio))
                      controls (OrbitControls. camera (.-domElement renderer))
                      update-ctrl (partial three/resize-view node width height ratio renderer camera)]
                  (update-ctrl)
                  (js/window.addEventListener "resize" update-ctrl)
                  (three/init-view scene renderer camera light ambient)
                  (.set camera.position 0 0 1)
                  (doseq [a hand-joints] (.add scene a))
                  (doseq [a hand-lines] (.add scene a))
                  (.render renderer scene camera)
                  (letfn
                      [(tick []
                         (js/requestAnimationFrame tick)
                         (when (some? (:frames @stream))
                           ;; 座標更新処理
                           (let [xyzs
                                 (partition 3 (nth (:frames @stream)
                                                   (min (dec (:length @stream))
                                                        (int (:idx @stream)))))]
                             (doseq [[i sphere] (map-indexed vector hand-joints)]
                               (three/repos sphere (nth xyzs i)))
                             (doseq [[i line] (map-indexed vector hand-lines)]
                               (let [pos (.. line -geometry -attributes -position)] 
                                 (apply #(.setXYZ pos 0 %1 %2 %3) (get-bone-pos0 xyzs i))
                                 (apply #(.setXYZ pos 1 %1 %2 %3) (get-bone-pos1 xyzs i))
                                 (set! pos.needsUpdate true))))

                           ;; ループ処理
                           (when (not (:pause @stream))
                             (swap! stream #(let [idx (mod (+ (:idx %) 0.1) (:length %))
                                                  knob (* idx (/ 1 (:length %)) 1000)]
                                              (assoc % :idx idx :knob knob)))))
                         (.update controls)
                         (.render renderer scene camera))]
                    (tick)))))))]
      [:div {:ref f}]
      (finally (when @node
                 (.removeChild @node (.-domElement renderer))
                 (js/window.removeEventListener
                  "resize"
                  (partial three/resize-view node width height ratio renderer camera))))))
