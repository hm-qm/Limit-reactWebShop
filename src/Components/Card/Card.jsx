import styles from './Card.module.scss'
import { useState, useEffect } from 'react'
import { addToCart } from '../../Services/Cart/cart'
import { Link } from 'react-router-dom'

const Card = ({products}) => {

    const [ cartRecord, setCartRecord ] = useState(null)

    const handleClick = () => {
        console.log(cartRecord);
        addToCart(cartRecord);
    }

    useEffect(() => {
        const {...record} = products;
        setCartRecord({...record, quantity: 1});
    }, [products])

    return (
        <div className={styles.Card}>
            <img className={styles.Card__image} src={products.imageLink} alt="" />
            <div className={styles.Card__details}>
                <span><Link to={`/product/${products.id}`}>{products.itemName}</Link></span>
                <span>{products.variant}</span>
                <div className={styles.Card__details_cart}>
                    <span>AU$ {(products.price).toLocaleString("en-US")}</span>
                    <button onClick={handleClick}>add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card
