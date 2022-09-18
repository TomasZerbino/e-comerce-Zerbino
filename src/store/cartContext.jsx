import { createContext, useState } from "react";

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

    let total = 0;
    cart.forEach((item) => {
    total += item.price * item.quantity
    });

     
    return(
        <cartContext.Provider value={ {cart, addToCart, setCart, removeItem, clear, total} }>
            {children}
        </cartContext.Provider>
    )
}