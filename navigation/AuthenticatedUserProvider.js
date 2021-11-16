import React, { useState, createContext,useEffect } from 'react';
import { db } from '../firebase/fireStore';
import { collection, getDoc, addDoc,doc} from "firebase/firestore"; 
export const AuthenticatedUserContext = createContext({});


export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
 

  useEffect(() => {
    const getUser =async()=>{
      const data =await getDoc(usersCollectionRef);
      setUsers(data.data());
      // console.log(data.data)
    }
    getUser();
    }, [])

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser,users, setUsers }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};


