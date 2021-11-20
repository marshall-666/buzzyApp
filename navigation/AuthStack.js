import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (

    <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerShown: false
    }}>
      
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='SignUp' component={SignUpScreen} />
    </Stack.Navigator>

  );
}