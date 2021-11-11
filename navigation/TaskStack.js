import React, {useState,useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskboardScreen from '../screens/TaskboardScreen '
import TaskCreatingScreen from "../screens/TaskCreatingScreen"
import LottieView from 'lottie-react-native';
import { View, StyleSheet, Text } from 'react-native';
import { Configurations } from '../PropConfig/Props'
import DashboardScreen from '../screens/DashboardScreen';


const Stack = createNativeStackNavigator();

export default function TaskboardStack() {
  const [load, setLoad]=useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  
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
          source={require('../assets/welcome.json')}
          autoPlay={true}
        />
        <Text style={styles.title}><Text style={styles.title1}>Welcom to BuzzyBee</Text>
        </Text>
      </View>
    )
  }

  return (
    <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerTitle: 'Taskboard', headerShown: false }}>
      <Stack.Screen name='Taskboard' component={TaskboardScreen} />
      <Stack.Screen name="TaskCreating" component={TaskCreatingScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width:'70%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
  },
  title1: {
    width:'100%',
    color: Configurations.colors.secCol,
    textAlign:'center',
    fontSize:32,
    fontWeight:'400'
  },
  title2: {
    width:'100%',
    color: Configurations.colors.primCol,
    textAlign:'center',
    fontSize:32,
    fontWeight:'400'
  },
});