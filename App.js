import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskCreatingScreen from './screens/TaskCreatingScreen';
import TaskboardScreen from './screens/TaskboardScreen '
import DashboardScreen from './screens/DashboardScreen'
import AgendaScreen  from './screens/AgendaScreen'
import ChatTabOne from './screens/ChatTabOneScreen';
import ChatTabTwo from './screens/ChatTabTwoScreen'
// export {default}from './storybook'

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    
  
    
    
    <NavigationContainer>
       <StatusBar style="auto" />
    <Stack.Navigator initialRouteName="ChatTabOne" screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Taskboard" component={TaskboardScreen}  />
      <Stack.Screen name="TaskCreating" component={TaskCreatingScreen}/>
      <Stack.Screen name="Agenda" component={AgendaScreen}/>
      <Stack.Screen name="ChatTabTwo" component={ChatTabOne}/>
      <Stack.Screen name="ChatTabOne" component={ChatTabTwo}/>
      

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





