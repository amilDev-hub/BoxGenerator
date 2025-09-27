import type { shadowType } from "../type/shadowType";

const shadowCreator = (shadowObject: shadowType) => {
  const rgbaColor = Object.values(shadowObject.value.color);
  const stringShadowColor = `rgba(${rgbaColor.map((num, i) => (i < 3 ? num : num)).join(", ")})`;
  const stringShadow = `${shadowObject.value.offsetX}px ${shadowObject.value.offsetY}px ${shadowObject.value.blur}px ${stringShadowColor} ${shadowObject.activeInset ? "inset " : ""}`;

  return { boxShadow: stringShadow };
};
export default shadowCreator;
