import ProductInfo from "../../Components/ProductInfo/ProductInfo"
import { getProductById } from "../../Services/Products/products"
import { useState, useEffect } from "react"
import { useParams } from "react-router"

const ProductPage = ( ) => {

    const { id } = useParams();

    const [shopItem, setShopItem] = useState([]);

    const fetchItem = async() => {
        const data = await getProductById(id)
        setShopItem(data);
    }

    useEffect(() =>{
      fetchItem();
    },[]);


    return (
        <div>
            {shopItem.map((item) => {
                return <ProductInfo key={item.id} product={item} />;
            })}
        </div>
    )
}

export default ProductPage
