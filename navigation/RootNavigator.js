import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator,StyleSheet,Text } from 'react-native';
import fireAuth from '../firebase/fireAuth';
import { AuthenticatedUserContext } from './AuthenticatedUserProvider';
import AuthStack from './AuthStack';
import TaskStack from './TaskStack';
import { db } from '../firebase/fireStore';
import { collection, getDoc, addDoc,doc} from "firebase/firestore"; 


export default function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = fireAuth.onAuthStateChanged(async authenticatedUser => {
      try {
        await (authenticatedUser ? setUser(authenticatedUser) : setUser(null));
        setIsLoading(false);
      
      } catch (error) {
        console.log(error);
      }
    });
    
    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);


   if (isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }


  

  return (
    <NavigationContainer>
        {user ?  <TaskStack /> : <AuthStack />}
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});