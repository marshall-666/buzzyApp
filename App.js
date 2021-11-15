import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './navigation/index';
import LottieView from 'lottie-react-native';
import { Configurations } from './PropConfig/Props'

import GroupPageOnLoadScreen from './screens/GroupPageOnLoadScreen';
import JoinGroupScreen from './screens/JoinGroupScreen';
import CreateGroupScreen from './screens/CreateGroupScreen';

import DashboardScreen from './screens/DashboardScreen'
import AgendaScreen  from './screens/AgendaScreen'

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

  // const Stack = createNativeStackNavigator();
  // return (
    
  //   <NavigationContainer>
  //     <StatusBar style="auto" />
  //       <Stack.Navigator initialRouteName="Taskboard" screenOptions={{
  //         headerShown: false
  //       }}>
  //       <Stack.Screen name="Taskboard" component={TaskboardScreen}  />
  //       <Stack.Screen name="TaskCreating" component={TaskCreatingScreen}  />
        
  //       <Stack.Screen name="GroupLoad" component={GroupPageOnLoadScreen}  />
  //       <Stack.Screen name="JoinGroup" component={JoinGroupScreen}  />
  //       <Stack.Screen name="CreateGroup" component={CreateGroupScreen}  />

  //     </Stack.Navigator>
  // </NavigationContainer>

  // );

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





