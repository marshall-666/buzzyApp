
import React from "react";
import {View, TouchableOpacity, Dimensions} from 'react-native';
import Styled from "styled-components/native";
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  {Configurations} from'../PropConfig/Props'
import { Octicons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
const BarCont = Styled.View`
width:90%;
height:60px;
display:flex;
background-color:${(props) => props.backgroundColor};
flex-direction:row;
border-radius: 15px;
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
border:2.5px solid #3D5A80
`



const NavBar = ({
   
  
    onCalendarPress = () => {},
    onHomePress = () => {},
    
    onCoursesPress = () => {},
    // onGroupsPress = () => {},
    // GroupHome,
}) => {
  const navigation = useNavigation()

  // const onEventPress = () => {navigation.navigate('TaskCreating')}
  return (
  <BarCont backgroundColor='rgba(61, 90, 128, 1)'>
      <TouchableOpacity onPress={()=>{navigation.navigate('Dashboard')}}>
      <Foundation name="home" size={35} color="white"/>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Taskboard')}}>
        
        <FontAwesome5 name="tasks" size={30} color="white" />
      </TouchableOpacity>
      
      <YellowCircle 
      circleBackgroundColor="#F5F5E1"
      style={{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2
      }}>
        <TouchableOpacity onPress={()=>{navigation.navigate('TaskCreating')}}>
            <AntDesign name="plus" size={35} color="black" />
        </TouchableOpacity>
      </YellowCircle>    
      
      <TouchableOpacity onPress={()=>{navigation.navigate('ChatGrouplist')}}>
      <Octicons name="comment-discussion" size={35} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('AllGroups')}}>
        <MaterialIcons name="group" size={35} color="white" />
      </TouchableOpacity>
  </BarCont>
  );
};



export default NavBar;