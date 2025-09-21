import { useOutlet } from "react-router";
import getActiveCard from "./utils/functions/getActiveCard";

import React, { useEffect, useLayoutEffect, useState, type JSX } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "~/store";
import useStyleBuilder from "./utils/hooks/useStyleBuilder";
import clsx from "clsx";


const LayoutApp = () => {
  const cards = useSelector((state: RootState) => state.tailwindCards.cards);

  const [style, setStyle] = useState<any>();

  const outlet = useOutlet();

  useEffect(() => {
    getActiveCard(cards).then((resolve) => {
      const style = useStyleBuilder(resolve);
      setStyle(style);
     console.log(style);
    });
  }, [cards]);

  console.log(style);



  if (style) {
    return (
      <>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <p> header </p>

          <br />
          {outlet}

          <br></br>

          {/* <div className=" w-[100px] h-[100px] bg-[#000000] rounded-[5px] shadow-[2px_2px_5px_rgba(25,10,0,0.5)] flex flex-col justify-center items-center border-[1px] border-[#0000000] border-dotted"></div> */}

          <div className={clsx(style)}></div>

          <br />
          <p> fotter </p>
        </div>
      </>
    );
  }else{
    return <p>loading . . . </p>
  }
};

export default LayoutApp;
