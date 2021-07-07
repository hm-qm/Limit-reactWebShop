import firestore from "../../firestore"


export const testProduct = {productId: 'saYOFHmWgIgcakmfySeK', quantity: 3, variant: 'petroloni'};

// Create
export const addToCart = async (product) => {
    const collection = firestore.collection("Cart").doc('43ty326cGjecu3EJvSOX').collection('cart-instance-01')
    collection.add(product)
}

// Read
export const getCart = async () => {
    const collection = firestore.collection("Cart").doc('43ty326cGjecu3EJvSOX').collection('cart-instance-01');
    const colData = await collection.get();
    const cartArr = colData.docs;
    const cartItems = cartArr.map((doc) => ({CartId: doc.id, ...doc.data()}));
    return cartItems;
}

export const itemsInCart = async() => {
    const data = await getCart();
    
    const totalQuantity = data.reduce((acc, doc) => {
        acc += doc.quantity;
        return acc;
    },0)

    return totalQuantity;
}

// Update
export const updateCart = async(id, record) => {
    const ref = firestore.collection("Cart").doc('43ty326cGjecu3EJvSOX').collection('cart-instance-01').doc(id);
    await ref.update(record);
}

// Delete
export const removeFromCart = async(id) => {
    const collection = firestore.collection("Cart").doc('43ty326cGjecu3EJvSOX').collection('cart-instance-01').doc(id);
    await collection.delete()
}