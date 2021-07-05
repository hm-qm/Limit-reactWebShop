

const Card = ({products}) => {
    return (
        <>
            <img src={products.imageLink} alt="" />
            <h3>{products.itemName}</h3>
            <p>{products.price}</p>
            <p>{products.variant}</p>
            <button>add to cart</button>
        </>
    )
}

export default Card
