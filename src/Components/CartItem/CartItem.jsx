import Counter from "../Counter"
import { useState, useEffect } from "react"
import { updateCart, removeFromCart } from "../../Services/Cart/cart"
import { Link } from "react-router-dom"
import styles from "./CartItem.module.scss"


const CartItem = ({ product }) => {
    const [itemQuantity, setItemQuantity] = useState(1)
    const [deleteState, setDeleteState] = useState(false)

    const fetchQuantity = () => {
        setItemQuantity(product.quantity);
    }

    const handleQuantityChange = async () => {
        await updateCart(product.CartId, {quantity: itemQuantity});
    }

    const handleClick = () => {
        removeFromCart(product.CartId)
        setDeleteState(true)
    }

    useEffect(() => {
        return () => {
        }
    }, [deleteState])


    useEffect(() => {
        fetchQuantity();
    },[])

    useEffect(() => {
        handleQuantityChange();
    },[itemQuantity])

    return (
        <div className={styles.CartItem}>
            <div className={styles.CartItem_left}>
                <Link to={`/product/${product.id}`}><img className={styles.CartItem_left__image} src={product.imageLink} alt="" /></Link>
            </div>
            <div className={styles.CartItem_center}>
                <h2 className={styles.CartItem_center__name}>{product.itemName}</h2>
                <span className={styles.CartItem_center__variant}>{product.variant}</span>
            </div>
            <div className={styles.CartItem_right}>
                <div className={styles.CartItem_right_text}>
                    <h3 className={styles.CartItem_right_text__price}>AU$ {(product.price).toLocaleString("en-US")}</h3>
                    <span className={styles.CartItem_right_text__quantity}>Quantity <Counter onChange={setItemQuantity} value={itemQuantity} /></span>
                </div>
                <div className={styles.CartItem_right_button}>
                    <button className={styles.CartItem_right_button__cartButton} onClick={handleClick}><i class="fas fa-trash-alt"></i></button>
                </div>                
            </div>
        </div>
    )
}

export default CartItem
