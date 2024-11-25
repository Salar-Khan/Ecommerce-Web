import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext();
export const CartProvider = ({children})=>{
    const [cart , setCart] = useState([]);

    const addItem =(product)=>{
        setCart((prevCart)=>[...prevCart , product])
    };
    const removeItem = (productId) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
      };
    const getTotalItems = () => {
        return cart.length;
      };
      return(
          <CartContext.Provider value={{removeItem , getTotalItems ,addItem , cart}}>
              {children}
          </CartContext.Provider>
      )
};
export const useCart = ()=>{
    return useContext(CartContext)
}