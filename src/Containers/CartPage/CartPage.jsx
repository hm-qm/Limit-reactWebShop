import { useContext, useEffect } from "react"
import { CartContext } from "../../Context/CartContext/CartProvider"
import { removeFromCart } from "../../Services/Cart/cart"
import CartItem from "../../Components/CartItem"
import styles from "./CartPage.module.scss"

const CartPage = () => {


    const { cart, getCartItems } = useContext(CartContext)

    const handleDelete = (CartId) =>{
        removeFromCart(CartId)
        getCartItems();
    }

    useEffect(() => {
        getCartItems();
    },[cart])

    return (
        <div className={styles.CartPage}>
            <div className={styles.CartPage_cartItem}>
            {cart.map((item) => {
                return <CartItem key={item.id} product={item} onDelete={handleDelete}/>;
            })}
            </div>
            <div className={styles.CartPage_cartPrice}>
                <span>Total price: AU$ {cart.reduce((acc, item) => {
                    acc += (item.price*item.quantity);
                    return (acc);
                },0).toLocaleString("en-US")}</span>
            </div>
        </div>
    )
}

export default CartPage
