import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "~/store";
import {
  ACTIVE_CHANGER,
  ADD_CARD,
  BACKGROUND_COLOR_CHANGER,
  DELET_CARD,
  HEIGHT_CHANGER,
  ROUNDED_CHANGER,
  SHADOW_BLUR_CHANGER,
  SHADOW_COLOR_CHANGER,
  SHADOW_X_CHANGER,
  SHADOW_Y_CHANGER,
  WIDTH_CHANGER,
} from "./slice/boxSlice";
import InputRange from "./components/InputRange";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import getActiveStyle from "./functions/getActiveStyle";
import Header from "./components/Header";
import ColorPicker from "./components/ColorPicker";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Spinner from "./components/Spinner";
import { copyStyleToClipboard } from "./functions/copyStyleToClipboard";
const App = () => {
  const dispatch = useDispatch();
  const card = useSelector((state: RootState) => state.card.cards);
  let activeCard = getActiveStyle(card);
  const [shadowValue, setShadowValue] = useState({});
  const [style, setStyle] = useState({});
  const [loader, SetLoader] = useState(true);
  const shapeRef = useRef<HTMLDivElement>(null);
  const [statusToggelBoxSetting, setStatusToggelBoxSetting] =
    useState("boxStyle");
  type boxShadow =
    | { offsetX: number; offsetY: number; blur: number; color: string }
    | any;

  useLayoutEffect(() => {
    try {
      activeCard = getActiveStyle(card);
      if (activeCard.shadowValue != undefined) {
        setShadowValue(activeCard.shadowValue);
      }

      const { shadowValue, ...rest } = activeCard;
      setStyle(rest);
    } catch (e) {
      console.log(e);
    }
    console.log(activeCard);
  }, [card, dispatch]);

  return (
    <>
      <Header />
      <div className="w-full flex justify-end items-center py-3 p-3 bg-[#D3DAD9]">
        <div className="flex gap-2">
          <button
            className="text-white bg-[#2A2A2A] px-10 rounded-[3px] py-2 gap-1 cursor-pointer hover:bg-[#4b4a4a] transition ease-in-out hover:px-13"
            onClick={() => {
              if (style) {
                copyStyleToClipboard(style);
                // navigator.clipboard.(shapeRef.current.style)
              }
            }}
          >
            code
          </button>
          <button
            className="text-white bg-[#2A2A2A] px-10 rounded-[3px] py-2 hover:bg-[#4b4a4a] cursor-pointer transition ease-in-out hover:px-13"
            onClick={()=>{dispatch(ADD_CARD())}}>
            add shadow
          </button>
        </div>
      </div>
      <main className="w-full flex p-8 px-14 bg-[#D3DAD9]">
        <motion.div
          key={"boxsetting" + activeCard.id}
          className=" w-[800px] bg-[#2A2A2A] rounded-t-[10px] flex "
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, type: "tween", ease: "easeOut" }}
          style={{
            transformOrigin: "bottom",
            overflow: "",
          }}
        >
          <div className="h-4/5 w-full items-end ">
            <div className="w-full h-full flex flex-col gap-2 items-center justify-start p-2 px-5 ">
              <div className="bg-[#44444E] w-[200px] h-[43px] rounded-[25px] flex justify-center items-center  ">
                <p className="text-white text-[23px] font-semibold py-2 ">
                  box settings
                </p>
              </div>

              <div className="flex flex-col w-full pt-2 gap-3">
                <div className="w-full flex justify-between py-3">
                  <p className="text-white text-[20px] font-semibold">
                    cards{activeCard.id}
                  </p>
                  <button
                    className="bg-[#707070] text-[16px] text-white px-8 py-1 rounded-[20px] cursor-pointer"
                    onClick={() => {
                      dispatch(DELET_CARD({ id: activeCard.id }));
                    }}
                  >
                    delete
                  </button>
                </div>

                <div className="flex w-full justify-center flex-col  py-3">
                  <div className="flex  items-center justify-center ">
                    <div className="px-4 py-2 flex justify-center items-center bg-[#707070] rounded-full gap-5">
                      <motion.div
                        onClick={() => {
                          setStatusToggelBoxSetting("boxStyle");
                        }}
                        animate={{
                          backgroundColor:
                            statusToggelBoxSetting === "boxStyle"
                              ? "#ffffff"
                              : "#44444E",
                          color:
                            statusToggelBoxSetting === "boxStyle"
                              ? "#000000"
                              : "#ffffff",
                        }}
                        transition={{
                          ease: "linear",
                        }}
                        className={
                          "w-[140px] py-5 flex justify-center items-center rounded-full transition cursor-pointer"
                        }
                      >
                        box style
                      </motion.div>

                      <motion.div
                        onClick={() => {
                          setStatusToggelBoxSetting("baxshadow");
                        }}
                        layout
                        animate={{
                          backgroundColor:
                            statusToggelBoxSetting === "baxshadow"
                              ? "#ffffff"
                              : "#44444E",
                          color:
                            statusToggelBoxSetting === "baxshadow"
                              ? "#000000"
                              : "#ffffff",
                        }}
                        transition={{
                          ease: "linear",
                        }}
                        className={
                          "w-[140px] py-5 flex justify-center items-center rounded-full transition cursor-pointer"
                        }
                      >
                        box shadow
                      </motion.div>
                    </div>
                  </div>
                  <div className="w-full flex flex-col p-3">
                    {activeCard?.id && activeCard.boxShadow && activeCard && (
                      <>
                        {statusToggelBoxSetting === "boxStyle" ? (
                          <motion.div
                            key="style-panel"
                            initial={{ opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ duration: 1, ease: "easeIn" }}
                          >
                            <InputRange
                              title="width offest"
                              max={300}
                              min={0}
                              value={Number(activeCard.width?.split("px")[0])}
                              onChange={(e) => {
                                dispatch(
                                  WIDTH_CHANGER({
                                    id: activeCard.id,
                                    width: Number(e.currentTarget.value),
                                  })
                                );
                              }}
                            />
                            <InputRange
                              title="height offest"
                              max={300}
                              min={0}
                              value={Number(activeCard.height?.split("px")[0])}
                              onChange={(e) => {
                                dispatch(
                                  HEIGHT_CHANGER({
                                    id: activeCard.id,
                                    height: Number(e.currentTarget.value),
                                  })
                                );
                              }}
                            />
                            <InputRange
                              title="rounded offest"
                              max={500}
                              min={0}
                              value={
                                Number(activeCard?.borderRadius?.split("px")[0])
                                  ? Number(
                                      activeCard?.borderRadius?.split("px")[0]
                                    )
                                  : 0
                              }
                              onChange={(e) => {
                                dispatch(
                                  ROUNDED_CHANGER({
                                    id: activeCard.id,
                                    rounded: Number(e.currentTarget.value),
                                  })
                                );
                              }}
                            />
                            <ColorPicker
                              key={"background-color"}
                              title="color"
                              value={
                                activeCard.backgroundColor
                                  ? activeCard.backgroundColor
                                  : ""
                              }
                              onChange={(bg) => {
                                dispatch(
                                  BACKGROUND_COLOR_CHANGER({
                                    id: activeCard.id,
                                    color: bg,
                                  })
                                );
                              }}
                            />
                          </motion.div>
                        ) : statusToggelBoxSetting === "baxshadow" ? (
                          <motion.div
                            key="shadow-panel"
                            initial={{ opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ duration: 1, ease: "easeIn" }}
                          >
                            <InputRange
                              title="shadowX offest"
                              max={500}
                              min={-500}
                              onChange={(e) => {
                                dispatch(
                                  SHADOW_X_CHANGER({
                                    id: activeCard.id,
                                    x: Number(e.currentTarget.value),
                                  })
                                );
                              }}
                              value={activeCard?.shadowValue?.offsetX}
                            />
                            <InputRange
                              title="shadowY offest"
                              max={300}
                              min={-300}
                              onChange={(e) => {
                                dispatch(
                                  SHADOW_Y_CHANGER({
                                    id: activeCard.id,
                                    y: Number(e.currentTarget.value),
                                  })
                                );
                              }}
                              value={activeCard?.shadowValue?.offsetY}
                            />
                            <InputRange
                              title="shadow blur"
                              max={100}
                              min={0}
                              onChange={(e) => {
                                dispatch(
                                  SHADOW_BLUR_CHANGER({
                                    id: activeCard.id,
                                    blur: Number(e.currentTarget.value),
                                  })
                                );
                              }}
                              value={activeCard?.shadowValue?.blur}
                            />
                            <ColorPicker
                              title="color"
                              key={"sahdow-changer"}
                              value={activeCard?.shadowValue?.color}
                              onChange={(bg) => {
                                dispatch(
                                  SHADOW_COLOR_CHANGER({
                                    id: activeCard.id,
                                    color: bg,
                                  })
                                );
                              }}
                            />
                          </motion.div>
                        ) : null}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="w-full  flex flex-col ">
          <div className="w-full h-1/2  flex justify-center items-center">
            <motion.div ref={shapeRef} style={style}></motion.div>
          </div>

          <div className="w-full h-full flex justify-center">
            <div className="bg-[#2A2A2A] w-[500px] h-[150px] overflow-y-auto self-end flex flex-row flex-wrap justify-around rounded-t-lg p-2">
              <div className=" flex w-full items-start justify-around gap-2  p-2 flex-wrap">
                {card.map((item) => {
                  return (
                    <motion.div
                      className="flex gap-3 flex-row items-center"
                      key={"card" + item.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: item.active ? 1.1 : 1,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        },
                      }}
                    >
                      <p className="text-white font-bold">card {item.id} :</p>
                      <button
                        className={clsx(
                          "px-4 py-1.5 rounded-lg cursor-pointer",
                          item.active
                            ? "text-white bg-[#707070]"
                            : "text-black bg-white"
                        )}
                        onClick={() => {
                          dispatch(ACTIVE_CHANGER({ id: item.id }));
                        }}
                      >
                        {item.active ? "on" : "off"}
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;


