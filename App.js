import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './navigation/index';
import LottieView from 'lottie-react-native';
import { Configurations } from './PropConfig/Props'

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
  const [load, setLoad]=useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  
  })
  if (load === true) {
    return (
      <View style={styles.container}>
        <LottieView
          ref={(ref) => {
            anim = ref
          }}
          style={{
            width: 350,
            height: 350,
            backgroundColor: '#fff',
          }}
          source={require('./assets/load.json')}
          autoPlay={true}
        />
         <Text style={styles.title2} >BuzzyBee </Text>
      </View>
    )
  }
  else{
  return <Routes />
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title2: {
    width:'100%',
    color: Configurations.colors.secCol,
    textAlign:'center',
    fontSize:40,
    fontWeight:'600'
  },
});





