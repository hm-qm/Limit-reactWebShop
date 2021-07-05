import { getProducts } from "../../Services/Products/products"
import Card from "../../Components/Card"
import { useState, useEffect } from "react"

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
        <div>
            <div>
                <h3> Hello </h3>
            </div>
            <div>
                {items.map((product) => {
                    return <Card key={product.id} products={product}/>;
                })}
            </div>
        </div>
    )
}

export default Catalogue
