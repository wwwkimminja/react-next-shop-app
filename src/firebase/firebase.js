// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth'
import { getFireStore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1W4SmoWxi4Xo_qGXCbYA5pQZDCxAI1As",
  authDomain: "react-next-shop-app-8ab20.firebaseapp.com",
  projectId: "react-next-shop-app-8ab20",
  storageBucket: "react-next-shop-app-8ab20.appspot.com",
  messagingSenderId: "167333487783",
  appId: "1:167333487783:web:b0a47248040af07ad8e782"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFireStore(app);
export const storage = getStorage(app);

export default app;