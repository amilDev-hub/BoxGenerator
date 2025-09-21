import type { borderType } from "../type/borderType";
import type { CardTailwind } from "../type/cardTailwindType";
import type { directionType } from "../type/directonType";
import type { shadowType } from "../type/shadowType";
import type { sizeType } from "../type/sizeType";

const useStyleBuilder = (card: CardTailwind) => {
  
  const getBorder = (borderObject: borderType) => {
    const borderArray = Object.entries(borderObject);
    const style: any = [];
    let styleString = "";

    borderArray.map((item, index) => {
      if (index == 0) {
        style.push(`border-[${item[1]}px]`);
        styleString += `border-[${item[1]}px] `;
      }
      if (index == 1) {
        style.push(`border-[${item[1]}]`);
        styleString += `border-[${item[1]}] `;
      }
      if (index == 2) {
        if (item[1] == "all") {
          null;
        } else {
          style.push(`border-[${item[1]}]`);
          styleString += `border-[${item[1]}]`;
        }
      }
      if (index == 3) {
        style.push(item[1]);
        styleString += item[1];
      }
    });

    return styleString;
  };

  const getDirection = (directionObject: directionType) => {
    let directionString = "";
    if (directionObject.activeFlex == true) {
      directionString = `flex ${directionObject.direction} ${directionObject.justify} ${directionObject.align}`;
    }
    return directionString;
  };

  const getShadow = (shadowObject: shadowType) => {
    const rgbaColor = Object.values(shadowObject.value.color);
    const stringShadowColor = `rgba(${rgbaColor.map((num, i) => (i < 3 ? num : num)).join(",")})`;
    const stringShadow = `${shadowObject.activeInset ? "inset":""}shadow-[${shadowObject.value.offsetX}px_${shadowObject.value.offsetY}px_${shadowObject.value.blur}px_${stringShadowColor}]`;
    return stringShadow;
  };

  const getsize = (sizeObject: sizeType) => {
    const stringSizeStyle = `w-[${sizeObject.width}px] h-[${sizeObject.height}px] bg-[${sizeObject.backgroundColor}] rounded-[${sizeObject.rounded}px]`;
    return stringSizeStyle;
  };

  const border = getBorder(card.border);
  const size = getsize(card.size);
  const direction = getDirection(card.direction);
  const shadow = getShadow(card.shadow);

  const result = ` ${size} ${shadow} ${direction} ${border}`;

  return result;
};

export default useStyleBuilder;
