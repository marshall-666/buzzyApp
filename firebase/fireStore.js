import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyA8eqR4_m4N1hNxyB1-hPuQmRFpdpdPLLE",
  authDomain: "buzzybee-d0af8.firebaseapp.com",
  databaseURL: "https://buzzybee-d0af8-default-rtdb.firebaseio.com",
  projectId: "buzzybee-d0af8",
  storageBucket: "buzzybee-d0af8.appspot.com",
  messagingSenderId: "628981663222",
  appId: "1:628981663222:web:b977029152a75e699af3d7",
  measurementId: "G-ZG8GMWZDWY"
};

const app = initializeApp(firebaseConfig)


const fireStore = getFirestore(app);

export default fireStore
