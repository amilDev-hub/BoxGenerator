import borderCreator from "../functions/borderCreator";
import directionCreator from "../functions/directionCreator";
import shadowCreator from "../functions/shadowCreator";
import sizeCreator from "../functions/sizeCreator";
import type { CardTailwind } from "../type/cardTailwindType";

const useStyleBuilderCss = (card: CardTailwind) => {
  if (!card) return null;

  const boxshadow = shadowCreator(card.shadow);

  const direction = directionCreator(card.direction);

  const border = borderCreator(card.border);

  const size = sizeCreator(card.size)

 
  
  return {...boxshadow , ...border , ...size , ...direction};
};

export default useStyleBuilderCss;
