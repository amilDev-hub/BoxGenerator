import directionCreator from "../functions/directionCreator";
import shadowCreator from "../functions/shadowCreator";
import type { CardTailwind } from "../type/cardTailwindType";

const useStyleBuilderCss = (card: CardTailwind) => {
  if (!card) return null;

  const boxshadow = shadowCreator(card.shadow);

  const direction = directionCreator(card.direction);

  console.log(direction);

  console.log(boxshadow);

  return direction;
};

export default useStyleBuilderCss;
