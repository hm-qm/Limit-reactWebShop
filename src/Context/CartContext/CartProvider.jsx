import { createContext, useState, useEffect } from "react"
import { getCart } from "../../Services/Cart/cart";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    // Should hold information about items in cart
    // Should hold information about quantity of each item in cart

    const [cart, setCart] = useState([]);
    // const [itemQuantity, setItemQuantity] = useState(0)

    const getCartItems = async () => {
        const data = await getCart();
        setCart(data);
    };

    useEffect(() => {
        getCartItems();
    }, [children])



    const contextData = { cart, getCartItems };

    return (
        <CartContext.Provider value={contextData}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
