import firestore from "../../firestore.js";




// Read
export const getProducts = async () => {
    // Access collection of the products on firebase
    const collection = firestore.collection("Products");
    // Fetch collection data
    const colData = await collection.get();
    // From collection data, obtain an array of query document snapshots
    const docArr = colData.docs;
    // destructure array to include product id and product data
    const products = docArr.map((doc) => ({ id: doc.id, ...doc.data()}))

    console.log(products)
    
    return products;
};

export const getProductById = async (id) => {
    const collection = firestore.collection("Products").doc(id)

    const itemData = await collection.get()

    const productArr = [{id: itemData.id, ...itemData.data()}]

    return productArr;
}

