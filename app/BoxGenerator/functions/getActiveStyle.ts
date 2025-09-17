type Card = {
  id: number;
  width: number;
  height: number;
  shadow: { offsetX: number; offsetY: number; blur: number; color: string };
  background: string;
  active: boolean;
  [key: string]: any; // برای بقیه فیلدها
};

type ActiveStyle = {
  id: number 
  width: string;
  height: string;
  backgroundColor: string;
  boxShadow?:string ;
  // { offsetX: number; offsetY: number; blur: number; color: string }
  borderRadius?: string;
  [key: string]: any; // برای بقیه فیلدهای اختیاری
};


const getActiveStyle = (card: Card[]) : Partial<ActiveStyle> =>  {
  const selectedCard = card.find((c) => c.active == true);

  if (!selectedCard?.active) return {}; // اگر کارت فعال نبود، آبجکت خالی بده

  // تبدیل shadow به CSS
  const boxShadow = `${selectedCard.shadow.offsetX}px ${selectedCard.shadow.offsetY}px ${selectedCard.shadow.blur}px ${selectedCard.shadow.color}`;

  // استخراج بقیه استایل‌ها (مقداری که قابل استفاده در style هست)
  const { id , width, height, background, rounded,  shadow } = selectedCard;

  return {
    id : id ,
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: background,
    boxShadow:boxShadow,
    borderRadius: `${rounded}px` ,
    shadowValue : shadow
    // {offsetX : shadow.offsetX , blur : shadow.blur , color : shadow.color , offsetY :shadow.offsetY},

  };
};

export default getActiveStyle;
