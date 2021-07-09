import { useState, useEffect } from "react"
import { addToCart } from "../../Services/Cart/cart";
import styles from "./ProductInfo.module.scss"
import Counter from "../Counter";


const ProductInfo = ({ product }) => {

    const [itemQuantity, setItemQuantity] = useState(1)
    const [buttonText, setButtonText] = useState("Add to Cart")
    const [ cartRecord, setCartRecord ] = useState(null)

    const handleClick = () => {
        addToCart(cartRecord);
        setButtonText("Added!");
    }


    useEffect(() => {
        const {...record} = product;
        setCartRecord({...record, quantity: itemQuantity});
    }, [product, itemQuantity])

    return (
        <div className={styles.ProductInfo}>
            <div className={styles.ProductInfo_left}>
                <img  className={styles.ProductInfo_left__image} src={product.imageLink} alt="" />
            </div>
            <div className={styles.ProductInfo_right}>
                <h2 className={styles.ProductInfo_right__name}>{product.itemName}</h2>
                <span className={styles.ProductInfo_right__variant}>{product.variant}</span>
                <h3 className={styles.ProductInfo_right__price}>AU$ {(product.price).toLocaleString("en-US")}</h3>
                <div>
                    <Counter onChange={setItemQuantity} value={itemQuantity} />
                </div>
                <div>
                    <button onClick={handleClick} className={styles.ProductInfo_right__cartButton}>{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo
