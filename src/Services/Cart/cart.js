import firestore from "../../firestore"


//Create



//Read
export const getCart = async () => {

    const collection = firestore.collection("Cart");

    const colData = await collection.get();

    const cartArr = colData.docs;

    const cartItems = cartArr.map((doc) => ({id: doc.id, ...doc.data()}));

    return cartItems;
}