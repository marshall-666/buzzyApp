import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './navigation/index';
import LottieView from 'lottie-react-native';
// export {default}from './storybook'

export default function App() {
  const [load, setLoad]=useState(true)
  const Stack = createNativeStackNavigator();
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
});
