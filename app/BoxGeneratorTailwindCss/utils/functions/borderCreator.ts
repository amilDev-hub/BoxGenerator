import type { borderType } from "../type/borderType";

const borderCreator = (objectBorder: borderType) => {
  const borderArray = Object.entries(objectBorder);
  const style: any = [];
  let styleString:any = null;

   const display:any  = borderArray[3].map((item, index)=> {
    if(index==1){
        if(typeof item == "string"){
            return item.split('-')[1]
        }
    }
   } )

  
   styleString = `${borderArray[0][1]}px ${display[1]} ${borderArray[1][1]}` 

   const border = {border:styleString};


   console.log(border);

  return border;
};


export default borderCreator;