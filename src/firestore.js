import firebase from "firebase";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSVrD6EsHFJ6mx7gumBQGj7677-5y7saU",
    authDomain: "limit-react-web-shop.firebaseapp.com",
    projectId: "limit-react-web-shop",
    storageBucket: "limit-react-web-shop.appspot.com",
    messagingSenderId: "625220422861",
    appId: "1:625220422861:web:004a7dff46a74f4e45ed84"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();