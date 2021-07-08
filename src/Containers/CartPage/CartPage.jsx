import { useContext, useEffect } from "react"
import { CartContext } from "../../Context/CartContext/CartProvider"
import CartItem from "../../Components/CartItem"

const CartPage = () => {

    const { cart } = useContext(CartContext)

    useEffect(() => {

    },[cart])

    return (
        <div>
            <div>
            {cart.map((item) => {
                return <CartItem key={item.id} product={item}/>;
            })}
            </div>
            <div>
                <span>Total price: AU$ {cart.reduce((acc, item) => {
                    acc += (item.price*item.quantity);
                    return (acc);
                },0).toLocaleString("en-US")}</span>
            </div>
        </div>
    )
}

export default CartPage
