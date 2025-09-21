import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CardTailwind } from "../utils/type/cardTailwindType";


export const tailwindBoxSlice = createSlice({


  name: "tailwindGenerator",
  initialState: {
    cards: [

      {
        id: 1,
        active: true,
        border: {
          borderWidth: 1,
          borderColor: "#000000",
          borderDirection: "all",
          borderExmapel: 'border-dotted',
        },
        direction: {activeFlex : true , align : 'items-center' , direction : 'flex-col' , justify : 'justify-center'},

        shadow :{activeInset : false , value :{  offsetX: 2, offsetY: 2, blur: 5, color:{r : 25 , g :10 , b : 0 , a : 0.50}} },


        workSpace :{backgroundColor : '#000000'},
        
        size : {width : 200 , backgroundColor :'#000000' ,height : 300 , rounded : 5  },
      },
      {
        id: 2,
        active: false,
        border: {
          borderWidth: 1,
          borderColor: "#000000",
          borderDirection: "all",
          borderExmapel: 'border-dotted',
        },
        direction: {activeFlex : true , align : 'items-center' , direction : 'flex-col' , justify : 'justify-center'},

        shadow :{activeInset : false , value :{  offsetX: 2, offsetY: 2, blur: 5, color:{r : 25 , g :10 , b : 0 , a : 0.50}} },


        workSpace :{backgroundColor : '#000000'},
        
        size : {width : 200 , backgroundColor :'#000000' ,height : 300 , rounded : 5  },
      },
      
    ] as CardTailwind[] ,
  },
  reducers: {
    KIR : (state , action : PayloadAction )=>{
       console.log('kir');
    }
  },
});


export default tailwindBoxSlice.reducer 

export const {
  KIR
} = tailwindBoxSlice.actions

