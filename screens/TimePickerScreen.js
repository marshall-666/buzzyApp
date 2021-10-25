import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTimePicker from '../comps/AppTimePicker';

const TimePickerScreen=({ navigation })=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      
      <AppTimePicker/>
      
      
      
      
      
     
    </View>
  );
}


export default TimePickerScreen