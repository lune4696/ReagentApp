(ns app.hello
  (:require [reagent.core :as r]
            [app.ui :as ui]
            [app.plot :as plt]
            [app.box :as box]
            [app.bmi :as bmi]
            [app.hand :as hand]))

(defn click-counter [c]
  [:span "reagent/atom " [:code "click-count"] " : " @c ". "
   [:input {:type "button" :value "Click me!" :on-click #(swap! c inc)}]])

(defn map-with-key
  {:doc "コレクションの各要素にコンポーネントを返却する関数 f を適用したうえで、react key を付与"}
  [f coll]
  (->> coll (map-indexed (fn [i c] ^{:key i} [f c]))))

(defn get-json [path a]
  (-> (js/fetch path)
      (.then #(.json %))
      (.then #(reset! a (js->clj % :keywordize-keys true)))))

(defn load-json [path data]
  [:div "Data keys: " (if @data (keys @data) "nil") ". "
   [:input {:type "button" :value "Load" :on-click #(get-json @path data)}]])

(def counters [(r/atom 0) (r/atom 1)])
(def bmi-data (r/atom (bmi/calc-bmi {:height 100 :weight 80})))
(def plot-data (r/atom  [{:x (->> (range) (map identity) (take 5) )
                     :y (->> (range) (map #(* % %)) (take 5) )
                     :type "scatter"}]))

(def hand-frames [[0.405458003282547, 0.221318066120148, 7.94157188011013e-7, 0.314183413982391, 0.256055176258087, -0.034264475107193, 0.241226002573967, 0.351229131221771, -0.0572676062583923, 0.182741954922676, 0.439660787582397, -0.0713735744357109, 0.126925468444824, 0.482412815093994, -0.0880364179611206, 0.311765193939209, 0.439618438482285, -0.0944081544876099, 0.273363918066025, 0.606201767921448, -0.124245822429657, 0.250764429569244, 0.707834005355835, -0.137449502944946, 0.233733177185059, 0.785610795021057, -0.14565996825695, 0.380796015262604, 0.463617146015167, -0.0889979153871536, 0.361985117197037, 0.654848635196686, -0.117317572236061, 0.34815913438797, 0.769244432449341, -0.132864385843277, 0.337600708007813, 0.851318299770355, -0.143793419003487, 0.439069390296936, 0.464687526226044, -0.0809037685394287, 0.431916892528534, 0.636671483516693, -0.105546213686466, 0.424235582351685, 0.740925073623657, -0.122906133532524, 0.418837070465088, 0.816608548164368, -0.13470147550106, 0.483206987380981, 0.448356211185455, -0.0727889910340309, 0.474570453166962, 0.557963907718658, -0.0958688706159592, 0.466807931661606, 0.620824813842773, -0.107139177620411, 0.461127102375031, 0.670479714870453, -0.112998880445957],
                  [0.39645528793335, 0.204100638628006, 9.29146381167811e-7, 0.307998716831207, 0.248671442270279, -0.0283078607171774, 0.235991090536118, 0.34454333782196, -0.0518164560198784, 0.173126876354218, 0.425929754972458, -0.0671248435974121, 0.115072429180145, 0.468245148658752, -0.0863110348582268, 0.302755653858185, 0.42740336060524, -0.095828115940094, 0.262853145599365, 0.592306733131409, -0.123260788619518, 0.239759266376495, 0.69003826379776, -0.134415313601494, 0.222313314676285, 0.764001488685608, -0.141289606690407, 0.373705089092255, 0.445354819297791, -0.0944230332970619, 0.356344610452652, 0.637420773506165, -0.123775504529476, 0.341039001941681, 0.751492500305176, -0.139342308044434, 0.326699495315552, 0.833506286144257, -0.149602517485619, 0.434019237756729, 0.442595213651657, -0.0888519063591957, 0.425826996564865, 0.622573137283325, -0.116138644516468, 0.411985635757446, 0.72850239276886, -0.134875357151032, 0.400024652481079, 0.804420292377472, -0.147466957569122, 0.480335772037506, 0.422668159008026, -0.0818316861987114, 0.469015896320343, 0.528851270675659, -0.10665462911129, 0.45570707321167, 0.567793846130371, -0.114863626658916, 0.445267856121063, 0.58944183588028, -0.118112236261368],
                  [0.400955498218536, 0.205585330724716, 9.38118489557382e-7, 0.310901552438736, 0.247439190745354, -0.0293404627591372, 0.237640038132668, 0.345006465911865, -0.0528106316924095, 0.174135193228722, 0.429725468158722, -0.0675355494022369, 0.115332558751106, 0.473879545927048, -0.0862407013773918, 0.302856206893921, 0.42409747838974, -0.0969566255807877, 0.264999538660049, 0.592138946056366, -0.125136256217957, 0.24180069565773, 0.691242218017578, -0.136904492974281, 0.22350138425827, 0.766949772834778, -0.14394323527813, 0.373763084411621, 0.444617450237274, -0.0944573059678078, 0.357569664716721, 0.637337446212769, -0.124440521001816, 0.342149674892426, 0.751557588577271, -0.140231996774673, 0.327044934034348, 0.833150506019592, -0.150456622242928, 0.434781581163406, 0.445273488759995, -0.0878696367144585, 0.426084339618683, 0.626259922981262, -0.117221802473068, 0.411892145872116, 0.730520248413086, -0.137139424681664, 0.40092408657074, 0.803186118602753, -0.149988174438477, 0.481943368911743, 0.429522097110748, -0.0796982869505882, 0.468256086111069, 0.533265590667725, -0.106856465339661, 0.452778249979019, 0.562870264053345, -0.115655839443207, 0.440409541130066, 0.576109945774078, -0.118771947920322]])

(def stream-data (r/atom {:frames hand-frames :length 3 :idx 0 :knob 0.0 :pause false}))
(defn calc-idx [{:keys [length knob] :as data}] (assoc data :idx (* length knob 1e-3)))
(defn stream-seekbar [comp data]
  (let [{:keys [length idx knob]} @data
        [color status] (cond (= knob 0) ["red" "start"]
                             (= knob 1000) ["blue" "end"]
                             :else ["green" "progress"])]
    [comp (int idx) "/" (int length) " "
     [:span {:style {:color color}} status]
      [ui/slider data :knob knob 0 1000 :idx calc-idx]]))

(def layout (r/atom {:title "Sample"}))

(def plot-node (atom nil))

(def current-page (r/atom :home))

(def filepath (r/atom nil))

(def experiment-data (r/atom nil))

(def page-home
  [:<>
   [:div {:class "flex h-16 items-center justify-center bg-blue-300 gap-2 text-2xl"}
    [:strong "ReagentApp"]]
   [ui/timer :div {:class "flex items-center justify-end bg-blue-100 pe-4"}]
   [:div {:class "bg-blue-50"}
    ;; [:p "再描画可能なリスト"]
    ;; [ui/lister (->> counters (map-with-key click-counter))]
    [:div {:class "flex justify-center items-center p-6"}
     [:div {:class "w-1/2 p-6 rounded-xl shadow"}
      [bmi/bmi bmi-data]]]
    [:div {:class "grid grid-cols-2 gap-8 p-6 shadow"}
     [:section
      [:div
       {:class "pb-4"}
       "plotly.js によるプロット"]
      [:div
       {:class "bg-white p-1 rounded-xl shadow"}
       [plt/plot {:data plot-data :layout layout :node plot-node}]]
      [:div
       {:class "flex"}
       ;; {:class "flex items-center justify-end"}
       [:button
        {:class "flex-1 items-center justify-center bg-gray-50 mt-4 p-2 rounded-xl shadow"
         :on-click #(plt/update-plot {:data plot-data :node plot-node})}
        "Update Plot"]]]
     [:section
      [:div
       {:class "pb-4"}
       "three.js による 3D アニメーション"]
      [:div
       {:class "bg-white p-1 rounded-xl shadow"}
       [box/rolling-box {}]]]]

    [:section {:class "grid grid-cols-3 gap-8 p-6"}
     [:div {:class "col-span-2"}
      [:div
       {:class "bg-gray-50 mt-4 p-2 rounded-xl shadow"}
       [hand/hand-skeleton {:stream stream-data}]]]]
    [:section {:class "grid grid-cols-3 gap-8 p-6"}
     [:div {:class "col-span-2"}
      [:div {:class "grid grid-cols-[9fr_1fr] gap-2"}
       [stream-seekbar :span stream-data]
       [:div {:class "flex"}
        [:button
         {:class "flex-1 items-center justify-center bg-green-300 mt-4 p-2 rounded-xl shadow"
          :on-click #(swap! stream-data (fn [a] (assoc a :pause (not (:pause a)))))}]]]]
     [:div {:class "col-span-1"}
      [:div {:class "grid grid-cols-3 gap-4"}
       [:div {:class "col-span-1"} "JsonPath:"]
       [:div {:class "col-span-2"} [ui/text-input filepath]]]
      [:div {:class "grid grid-cols-2 gap-4"}
       [:button
        {:class "flex items-center justify-center bg-gray-50 mt-4 p-2 rounded-xl shadow"
         :type "button"
         :on-click #(get-json @filepath experiment-data)}
        "Load"]
       [:button
        {:class "flex items-center justify-center bg-gray-50 mt-4 p-2 rounded-xl shadow"
         :type "button"
         :on-click #(swap!
                     stream-data
                     (fn [a] (let [frames (->> @experiment-data
                                               first val
                                               :y-train)]
                               (assoc a :frames frames :length (count frames)))))}
        "Set"]]]]]])

(def page-plot [:<>
   [:p.someclass "This is " [:strong "Plot"] " page"]
   [:p] [:section
         [:p "plotly.js によるプロット"]
         [plt/plot {:data plot-data :layout layout :node plot-node}]
         [:button {:on-click #(plt/update-plot {:data plot-data :node plot-node})} "Update Plot"]]])

(defn rooter []
  (fn []
    (case @current-page
      :home page-home
      :plot page-plot)))

(defn hello [] (rooter))
