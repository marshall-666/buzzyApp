import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskboardScreen from '../screens/TaskboardScreen '
import TaskCreatingScreen from "../screens/TaskCreatingScreen"


const Stack = createNativeStackNavigator();

export default function TaskboardStack() {
  return (
    <Stack.Navigator  screenOptions={{headerTitle: 'Taskboard', headerShown: false}}>
   
      <Stack.Screen name='Taskboard' component={TaskboardScreen} />
      <Stack.Screen name="TaskCreating" component={TaskCreatingScreen}  />
    </Stack.Navigator>
  );
}