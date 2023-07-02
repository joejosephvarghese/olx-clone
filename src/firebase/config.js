import firebase from "firebase";
import 'firebase/auth'
import  'firebase/firestore'
import 'firebase/storage'



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg5f6VAMwGHPUqPakpT7IuLfKYjGzz4Mg",
  authDomain: "clone-olx-88268.firebaseapp.com",
  projectId: "clone-olx-88268",
  storageBucket: "clone-olx-88268.appspot.com",
  messagingSenderId: "182914806420",
  appId: "1:182914806420:web:f429946ca801034583fa81",
  measurementId: "G-RL5K2Z2323"
};
 
 export default firebase.initializeApp(firebaseConfig); 