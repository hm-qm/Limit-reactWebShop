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
            <div className={styles.Card_top}>
                <Link to={`/product/${products.id}`}><img className={styles.Card_top__image} src={products.imageLink} alt="" /></Link>
            </div>
            <div className={styles.Card_bottom}>
                <span><Link className={styles.Card_bottom__name} to={`/product/${products.id}`}>{products.itemName}</Link></span>
                <span className={styles.Card_bottom__variant}>{products.variant}</span>
                <div className={styles.Card_bottom__cart}>
                    <span className={styles.Card_bottom__price}>AU$ {(products.price).toLocaleString("en-US")}</span>
                    <button className={styles.Card_bottom__cartButton} onClick={handleClick}><i class="fas fa-shopping-bag"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Card
