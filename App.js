import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RecBtn from './comps/RecBtn';
import JointCreate from './comps/JoinCreate';
import AppHeader  from './comps/AppHeader';
import  AppTimePicker  from './comps/AppTimePicker';
import JointCreateScreen from './comps/JoinCreate';
// export {default} from './storybook'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BtnAndHeaderScreen from './pages/BtnAndHeaderScreen';
import TimePickerScreen from './pages/TimePickerScreen';
import JoinCreateScreen from './pages/JoinCreateScreen';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text> */}
    //   <StatusBar style="auto" />
    //  <RecBtn/>
    // {/* <AppTimePicker/> */}
    //  <AppHeader/>
    //  <JointCreate/>
    // </View>
    
    <NavigationContainer>
    <Stack.Navigator initialRouteName="JoinCreate">
      <Stack.Screen name="JoinCreate" component={JoinCreateScreen} />
      <Stack.Screen name="BtnAndHeader" component={BtnAndHeaderScreen} />
      <Stack.Screen name="TimePicker" component={TimePickerScreen} />
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
