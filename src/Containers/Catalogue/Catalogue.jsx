import { getProducts } from "../../Services/Products/products"
import Card from "../../Components/Card"
import { useState, useEffect } from "react"
import styles from './Catalogue.module.scss'

const Catalogue = ({ category=null }) => {
  

    const [items, setItems] = useState([]);

    const getProductData = async () => {
      const data = await getProducts();

      if (category){
        const filtered = data.filter((product) => {
          return product.category === category;
        })
        setItems(filtered);
      } else {
          setItems(data);
      }


    };
  
    useEffect(() => {
      getProductData();
    },[category]);


    return (
        <div className={styles.Catalogue}>
            {items.map((product) => {
                return <Card key={product.id} products={product}/>;
            })}
        </div>
    )
}

export default Catalogue
