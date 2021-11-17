import React, { useState, createContext, useEffect } from 'react';
import { db } from '../firebase/fireStore';
import { collection, getDoc, addDoc, doc } from "firebase/firestore";
export const AuthenticatedUserContext = createContext({});


export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  // const usersCollectionRef = collection(db, "users");

  useEffect(() => {
   
    const getUser = async () => {
      // var user = firebase.auth().currentUser;
      // db.collection("users").where("author", "==", user.uid).get()
      if (user.email === "levi@my.bcit.ca") {
        var id = "5gPwBL6u1GUGlWPgIDGf"
      } else if (user.email === "nbarr2@my.bcit.ca") {
        var id = "GDPLfxDbvm50FRbOvKrx"
      }
      else if (user.email === "nbarr2@my.bcit.ca") {
        var id = "6lo2GhtcCt9weA71sV9A"
          ;
      }
      else if (user.email === "henry@my.bcit.ca") {
        var id = "GuKEQ0nwOu71se7so9zO"
      }
      const usersDocRef = doc(db, "users",id );
      const data = await getDoc(usersDocRef);
      setUsers(data.data())
      
      // console.log( data.data())
      // console.log( data.id)
      // console.log( user.uid)
      // console.log( user)

    }
    getUser();
  }, [])
  
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser, users, setUsers }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};


