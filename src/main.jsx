import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOtrP0gMVMOvnX5pZq5VUPtAmrOG8BBak",
  authDomain: "dev-computaion.firebaseapp.com",
  projectId: "dev-computaion",
  storageBucket: "dev-computaion.appspot.com",
  messagingSenderId: "518866916602",
  appId: "1:518866916602:web:c5b1c63789229018a0e543",
  measurementId: "G-B04B068YJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
      <ChakraProvider>
        <App />
      </ChakraProvider>
)
