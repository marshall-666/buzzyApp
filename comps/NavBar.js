
import React from "react";
import {View, TouchableOpacity, Dimensions} from 'react-native';
import Styled from "styled-components/native";
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";
import  {Configurations} from'../PropConfig/Props'


const BarCont = Styled.View`
width:90%;
height:60px;
display:flex;
background-color:${(props) => props.backgroundColor};
flex-direction:row;
border-radius: 30px;
justify-content:space-evenly;
align-items:center;
`
const YellowCircle = Styled.View`
background-color:${(props) => props.circleBackgroundColor};
display:flex;
justify-content:center;
align-items:center;
height:70px;
width:70px;
top:-6%;
border:6px solid #94BDD4
`



const NavBar = ({
   
    
    onCalendarPress = () => {},
    onHomePress = () => {},
    
    onCoursesPress = () => {},
    onGroupsPress = () => {},
}) => {
  const navigation = useNavigation()

  // const onEventPress = () => {navigation.navigate('TaskCreating')}
  return (
  <BarCont backgroundColor={Configurations.colors.secCol}>
      <TouchableOpacity onPress={()=>{navigation.navigate('Dashboard')}}>
        <Foundation name="calendar" size={35} color="white"/>
      </TouchableOpacity>
      <TouchableOpacity onPress={onHomePress}>
        <Foundation name="home" size={35} color="white"/>
      </TouchableOpacity>
      
      <YellowCircle 
      circleBackgroundColor={Configurations.colors.butCol}
      style={{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2
      }}>
        <TouchableOpacity onPress={()=>{navigation.navigate('TaskCreating')}}>
            <AntDesign name="plus" size={35} color="black" />
        </TouchableOpacity>
      </YellowCircle>    
      
      <TouchableOpacity onPress={onCoursesPress}>
        <FontAwesome5 name="book" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onGroupsPress}>
        <MaterialIcons name="group" size={35} color="white" />
      </TouchableOpacity>
  </BarCont>
  );
};



export default NavBar;