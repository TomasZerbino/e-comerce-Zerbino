import { useEffect } from "react";
import { createContext, useState } from "react";
import Item from "../components/Item";

export const cartContext = createContext()

export function CartProvider({children}) {
    const [cart,  setCart] = useState([])
    

    function addToCart (item, count){
        
        if(isInCart(item.id)){
            let prodIndex = cart.findIndex( element => element.id === item.id)
            let prod = cart[prodIndex]
            prod.quantity = prod.quantity + count
            
            const newItem = [...cart]
            newItem.splice(prodIndex, 1, prod)
            setCart([ ...newItem])

        }else{
            let cartCopy = {...item, quantity:count }
            setCart([ ...cart, cartCopy])
            
        }
        console.log(cart)
    }
    
    function isInCart(id){
        return cart.some(cartItem => cartItem.id === id)
    
    }

    function removeItem(id){
        setCart(cart.filter(item => item.id !== id))
    }

    function clear(){
        setCart([])
    }
     
    return(
        <cartContext.Provider value={ {cart, addToCart, setCart, removeItem, clear} }>
            {children}
        </cartContext.Provider>
    )
}