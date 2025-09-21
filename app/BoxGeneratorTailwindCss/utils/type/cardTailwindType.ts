export type CardTailwind = {
  id: number | string;
  active: boolean;
  border: {
    borderWidth: number;
    borderColor: string;
    borderDirection: string;
    borderExmapel: 'border-double' | 'border-dotted'| 'border-dashed' | 'border-solid';
  }; //border custom type
  direction: {
    activeFlex: boolean;
    direction: string;
    justify: string;
    align: string;
  };
  size: {
    width: number;
    height: number;
    rounded: number;
    backgroundColor: string;
  };
  workSpace: { backgroundColor: string };
  shadow: {
    value: { offsetX: number; offsetY: number; blur: number; color: {r :number , g :number , b:number , a : number  } };
    activeInset: boolean;
  };
};
