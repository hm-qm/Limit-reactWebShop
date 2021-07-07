import { useContext, useEffect } from "react"
import { CartContext } from "../../Context/CartContext/CartProvider"
import CartItem from "../../Components/CartItem"

const CartPage = () => {

    const { cart } = useContext(CartContext)



    return (
        <div>
            <div>
            {cart.map((item) => {
                return <CartItem key={item.id} product={item}/>;
            })}
            </div>
            <div>
                <span>Total price: {cart.reduce((acc, item) => {
                    acc += (item.price*item.quantity)
                    return ((Math.round(acc * 100)/100));
                },0)}</span>
            </div>
        </div>
    )
}

export default CartPage
