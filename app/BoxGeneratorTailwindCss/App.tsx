import { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "~/store";
import getActiveCard from "./utils/functions/getActiveCard";
import useStyleBuilderCss from "./utils/hooks/useStyleBuilderCss";
import type { CardTailwind } from "./utils/type/cardTailwindType";


const App = ()=>{


    const cards = useSelector((state: RootState)=> state.tailwindCards.cards)




    return(
        <>
         <div style={{}}></div>
        </>
    )
}

export default App;