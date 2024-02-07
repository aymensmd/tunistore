// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7Lx6jbzQ_BkG8elQdLErlQ3FddsofP_Y",
    authDomain: "tunistore-ce99e.firebaseapp.com",
    projectId: "tunistore-ce99e",
    storageBucket: "tunistore-ce99e.appspot.com",
    messagingSenderId: "743025669827",
    appId: "1:743025669827:web:7e34c316b8cd1079479476"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db, collection, getDocs}
