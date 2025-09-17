// import React, { useState } from "react";

// type SliderProps = React.InputHTMLAttributes<HTMLInputElement> & {
//   title: string;
// };

// const InputRange: React.FC<SliderProps> = ({ title, value, onChange, ...rest }) => {
//   const [value, setValue] = useState(props.value || 0);

//   return (
//     <div className="w-full flex flex-col  p-3 py-4 gap-4 relative">
//       <div className="w-[90%] flex flex-col gap-5">
//         <p className="text-white font-semibold text-[16px]">{props.title} :</p>
//         <input
//           type="range"
//           {...props}
//           value={value}
//           onChange={(e) => setValue(Number(e.currentTarget.value))}
//           className={`w-full border-none outline-0 appearance-none[#2563eb]
//             [&::-webkit-slider-runnable-track]:h-2
//             [&::-webkit-slider-runnable-track]:rounded-lg
//             [&::-webkit-slider-runnable-track]:bg-gray-300
//             [&::-moz-range-track]:h-2
//             [&::-moz-range-track]:rounded-lg
//             [&::-moz-range-track]:bg-gray-300

//             [&::-webkit-slider-thumb]:appearance-none
//             [&::-webkit-slider-thumb]:h-6
//             [&::-webkit-slider-thumb]:w-6
//             [&::-webkit-slider-thumb]:rounded-full
//             [&::-webkit-slider-thumb]:bg-black
//             [&::-webkit-slider-thumb]:shadow-md
//             [&::-webkit-slider-thumb]:mt-[-2px]

//             [&::-moz-range-thumb]:h-6
//             [&::-moz-range-thumb]:w-6
//             [&::-moz-range-thumb]:rounded-full
//             [&::-moz-range-thumb]:bg-[#D3DAD9]
//             [&::-moz-range-thumb]:shadow-md
//           `}
//         />
//       </div>

//       <div className="rounded-l-[3px] absolute text-base right-0 bg-[#37353E] p-1 text-white font-semibold">
//         {value}px
//       </div>
//     </div>
//   );
// };

// export default InputRange;


import React, { useState, useEffect } from "react";

type SliderProps = React.InputHTMLAttributes<HTMLInputElement> & {
  title: string;
};

const InputRange: React.FC<SliderProps> =  ({ title, ...props }) => {



  return (
    <div className="w-full flex flex-col p-3 py-4 gap-4 relative">
      <div className="w-[90%] flex flex-col gap-5">
        <p className="text-white font-semibold text-[16px]">{title} :</p>
        <input
          type="range"
          {...props}
          onChange={(e) => {
            if (props.onChange) props.onChange(e); // صدا زدن onChange parent
          }}
          className={`w-full border-none outline-0 appearance-none[#2563eb]
            [&::-webkit-slider-runnable-track]:h-2
            [&::-webkit-slider-runnable-track]:rounded-lg
            [&::-webkit-slider-runnable-track]:bg-gray-300
            [&::-moz-range-track]:h-2
            [&::-moz-range-track]:rounded-lg
            [&::-moz-range-track]:bg-gray-300

            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-6
            [&::-webkit-slider-thumb]:w-6
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-black
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:mt-[-2px]

            [&::-moz-range-thumb]:h-6
            [&::-moz-range-thumb]:w-6
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-[#D3DAD9]
            [&::-moz-range-thumb]:shadow-md
          `}
        />
      </div>

      <div className="rounded-l-[3px] absolute text-base right-0 bg-[#37353E] p-1 text-white font-semibold">
        {props.value}px
      </div>
    </div>
  );
};

export default InputRange;
