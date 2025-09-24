import type { directionType } from "../type/directonType";

const directionCreator = (directionObject: directionType) => {
  const objectDirecton = {
    display: "",
    flexDirection: "",
    justifyContent: "",
    alignItems: "",
  };

  if (directionObject.activeFlex) {

    const display = directionObject.activeFlex ? "flex" : "block";

    const direction = directionObject.direction.includes("col")? "column": "row";

    const justify = directionObject.justify.split("-")[1];

    const align = directionObject.align.split("-")[1];

    console.log(justify);

    objectDirecton.display = display;

    objectDirecton.flexDirection = direction;

    objectDirecton.justifyContent = justify;

    objectDirecton.alignItems = align;
    
  }
  return objectDirecton;
};

export default directionCreator;
