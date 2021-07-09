import { useContext, useEffect } from "react"
import { CartContext } from "../../Context/CartContext/CartProvider"
import CartItem from "../../Components/CartItem"
import styles from "./CartPage.module.scss"

const CartPage = () => {

    // const [deleteState, setDeleteState] = useState(false)

    // const handleDeleteState = () => {
    //     setDeleteState(true);
    // }

    const { cart } = useContext(CartContext)

    useEffect(() => {
        
    },[cart])

    return (
        <div className={styles.CartPage}>
            <div className={styles.CartPage_cartItem}>
            {cart.map((item) => {
                return <CartItem key={item.id} product={item}/>;
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
