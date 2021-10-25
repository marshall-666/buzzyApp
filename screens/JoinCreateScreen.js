import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import JoinCreate from '../comps/JoinCreate';

const JoinCreateScreen=({ navigation })=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <JoinCreate/>

      <Button
        title="BtnAndHeaderScreen"
        onPress={() => navigation.navigate('BtnAndHeader')}
      />
    </View>
  );
}


export default JoinCreateScreen