import Counter from "../Counter"
import { useState, useEffect } from "react"
import { updateCart } from "../../Services/Cart/cart"


const CartItem = ({product}) => {
    const [itemQuantity, setItemQuantity] = useState(1)

    const fetchQuantity = () => {
        setItemQuantity(product.quantity);
    }

    const handleQuantityChange = async () => {
        await updateCart(product.CartId, {quantity: itemQuantity});
    }

    useEffect(() => {
        fetchQuantity();
    },[])

    useEffect(() => {
        handleQuantityChange();
    },[itemQuantity])

    return (
        <div>
            <div>
                <h2>{product.itemName}</h2>
                <p>{product.variant}</p>
            </div>
            <div>
                <span>Quantity: {product.quantity}</span>
                <Counter onChange={setItemQuantity} value={itemQuantity} />
            </div>
            <div>
                <button>Remove</button>
            </div>
        </div>
    )
}

export default CartItem
