import React, { useState, createContext, useEffect } from 'react';
import { db } from '../firebase/fireStore';
import { collection, getDoc, addDoc, doc } from "firebase/firestore";
export const AuthenticatedUserContext = createContext({});


export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  // const [id,setId]=useState()
  // const [autoRefresh, setAutoRefresh] = useState(0)
  // const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    // let interval
    const getUser = async () => {
      // var user = firebase.auth().currentUser;
      // db.collection("users").where("author", "==", user.uid).get()
     
      const usersDocRef = doc(db, "users",result.user.uid );
      const data = await getDoc(usersDocRef);
      setUsers(data.data())
      // console.log( data.data())
      // console.log( data.id)
      console.log( user.uid)
      console.log( user)
    }
 
    getUser()

  }, [])
  
  
  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser, users, setUsers }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};


