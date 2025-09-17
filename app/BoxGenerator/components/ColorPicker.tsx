import React, { useState, useRef, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import type { RootState } from "~/store";
type ColorPickerProps = {
  title: string;
  value: string;
  id?: number;
  onChange?: (color: string) => void;
};

const ColorPicker: React.FC<ColorPickerProps> = ({
  title,
  value,
  id,
  onChange,
}) => {
  const card = useSelector((state: RootState) => state.card.cards);
  const [color, setColor] = useState(value);
  const [open, setOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const handleChange = (newColor: string) => {
    if (value) {
      setColor(newColor);
      onChange?.(newColor);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [value, pickerRef.current?.nodeValue]);

  return (
    <div className="flex flex-col gap-3 w-full justify-center py-2 relative transition-all">
      <motion.div
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
        layout
      >
        <div className="flex gap-2 items-center w-4/5 pl-1">
          <p className="text-white font-semibold text-[19px]">{title} :</p>

          {/* مربع رنگی */}
          <div
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded border cursor-pointer"
            style={{ backgroundColor: color }}
          ></div>
        </div>

        {/* پنل رنگ فقط وقتی باز است */}
        {open && (
          <motion.div
            className=""
            key={"panel"}
            layout
            transition={{ duration: 1, ease: "easeInOut" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div
              ref={pickerRef}
              className="absolute z-50 mt-2 -right-[310px] bg-[#2a2a2a] p-2 px-3 rounded-lg -top-[500px]  flex gap-1"
            >
              <HexColorPicker
                className="p-1"
                color={color}
                onChange={handleChange}
              />
              <button
                className="text-[#44444E] bg-white text-center  px-5 rounded-lg hover:bg-[#000000] hover:text-white"
                onClick={() => {
                  setOpen(false);
                }}
              >
                ok
              </button>
            </div>
          </motion.div>
        )}

        {/* نمایش HEX رنگ */}
        <div
          className="absolute right-0 top-[11px] bg-[#37353E] p-2 rounded text-white font-semibold "
          onClick={() => navigator.clipboard.writeText(color)}
        >
          {color}
        </div>
      </motion.div>
    </div>
  );
};

export default ColorPicker;
