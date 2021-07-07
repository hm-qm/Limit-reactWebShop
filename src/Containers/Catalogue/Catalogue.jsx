import { getProducts } from "../../Services/Products/products"
import Card from "../../Components/Card"
import { useState, useEffect } from "react"
import styles from './Catalogue.module.scss'

const Catalogue = () => {
  

    const [items, setItems] = useState([]);

    const getProductData = async () => {
      const data = await getProducts();
      setItems(data);
    };
  
    useEffect(() => {
      getProductData();
    },[]);

    return (
        <div className={styles.Catalogue}>
            {items.map((product) => {
                return <Card key={product.id} products={product}/>;
            })}
        </div>
    )
}

export default Catalogue
