type Card = {
  id: number;
  width: number;
  height: number;
  shadow: { offsetX: number; offsetY: number; blur: number; color: string };
  background: string;
  active: boolean;
  [key: string]: any; 
};

type ActiveStyle = {
  id: number 
  width: string;
  height: string;
  backgroundColor: string;
  boxShadow?:string ;
  borderRadius?: string;
  [key: string]: any; 
};


const getActiveStyle = (card: Card[]) : Partial<ActiveStyle> =>  {
  const selectedCard = card.find((c) => c.active == true);

  if (!selectedCard?.active) return {};


  const boxShadow = `${selectedCard.shadow.offsetX}px ${selectedCard.shadow.offsetY}px ${selectedCard.shadow.blur}px ${selectedCard.shadow.color}`;

 
  const { id , width, height, background, rounded,  shadow } = selectedCard;

  return {
    id : id ,
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: background,
    boxShadow:boxShadow,
    borderRadius: `${rounded}px` ,
    shadowValue : shadow

  };
};

export default getActiveStyle;
