'use client'
import { CartResponse } from '@/api/types';
import {createContext, ReactNode, useContext, useState} from 'react'

export interface CartContextType{
numberOfCartItems: number;
 updateNumberOfCartItems:(num: number)=>void;
 
}


export const CartContext = createContext<CartContextType>({numberOfCartItems:0 ,updateNumberOfCartItems(){} });

export default function CartContextProvider({children , res}: {children: ReactNode ,res:CartResponse | undefined}) {
    
  const [numberOfCartItems, setNumberOfCartItems] = useState(()=> {
      return res === undefined? 0 : (res as CartResponse).products.length
    });
   

    function updateNumberOfCartItems(num :number){
     setNumberOfCartItems(num)
    }

  return (
    <CartContext.Provider value={{numberOfCartItems , updateNumberOfCartItems}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(){
 const res = useContext(CartContext);
 if(!res){
  throw new Error ("can't use cart context outside it's context");
 }
  return res;
}