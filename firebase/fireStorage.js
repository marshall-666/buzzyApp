import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: "AIzaSyA8eqR4_m4N1hNxyB1-hPuQmRFpdpdPLLE",
  authDomain: "buzzybee-d0af8.firebaseapp.com",
  databaseURL: "https://buzzybee-d0af8-default-rtdb.firebaseio.com",
  storageBucket: "buzzybee-d0af8.appspot.com"
};
const fire = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
 const fstorage = getStorage(fire);
