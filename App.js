import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
=======
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskCreatingScreen from './screens/TaskCreatingScreen';
import TaskboardScreen from './screens/TaskboardScreen '
>>>>>>> origin/levi

// export {default}from './storybook'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    
  
    
    
    <NavigationContainer>
       <StatusBar style="auto" />
    <Stack.Navigator initialRouteName="Taskboard" screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Taskboard" component={TaskboardScreen}  />
      <Stack.Screen name="TaskCreating" component={TaskCreatingScreen}  />

    </Stack.Navigator>
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





