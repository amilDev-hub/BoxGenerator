import type { sizeType } from "../type/sizeType";

const sizeCreator = (objectSize: sizeType) => {
  const sizeObject = {width:objectSize.width , height:objectSize.height , borderRadius :objectSize.rounded , backgroundColor:objectSize.backgroundColor}
  return sizeObject;
};

export default sizeCreator;
