import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecBtn from '../comps/RecBtn';
import AppHeader from '../comps/AppHeader';

function BtnAndHeaderScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center',  }}>
     <AppHeader />

    <RecBtn/>   

        <Button
        title="TimePicker"
        onPress={() => navigation.navigate('TimePicker')}
      />
    </View>
  );
}


export default BtnAndHeaderScreen