import { useSelector } from "react-redux";
import type { RootState } from "~/store";
import type { CardTailwind } from "../type/cardTailwindType";

const getActiveCard = (arr : CardTailwind[]) : Promise<any> =>  {
  return new Promise((resolve) => {
    const card = arr.find((c) => c.active == true);
    if(card){
        resolve(card)
    }
  });
};

export default getActiveCard;
