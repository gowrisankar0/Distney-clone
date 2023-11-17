// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABtUC_bj_fbs6n6Qo6AsAmGYuz_4xlRVQ",
  authDomain: "distneyplus-clone.firebaseapp.com",
  projectId: "distneyplus-clone",
  storageBucket: "distneyplus-clone.appspot.com",
  messagingSenderId: "839314002209",
  appId: "1:839314002209:web:1cc0ce84e9ba4a62c56e60",
  measurementId: "G-9G8WJQ1Z4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =app.firestore();
const auth =app.auth();
const provider =new app.auth.GoogleAuthProvider();
const storage =app.storage();
const analytics = getAnalytics(app);


export { auth, provider, storage };
export default db;