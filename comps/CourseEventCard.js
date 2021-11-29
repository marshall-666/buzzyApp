import React from "react";
import {View, TouchableOpacity, Text, StyleSheet, Pressable} from 'react-native';
import Styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const CardCont = Styled.Pressable`
width:90%;
height:120px;
display:flex;
background-color:${(props) => props.backgroundColor};
flex-direction:row;
border:1px solid #C4C4C4;
border-radius:15px;
margin:10px;
overflow:hidden;

`
const EventColour = Styled.View`
width:4%;
height:100%;
background-color:${(props) => props.EventBackgroundColor};
`

const TextCont = Styled.View`
display:flex;
padding:2%;
flex-direction:column;
justify-content:space-evenly;
width:60%;
height:100%;
`

const IconCont = Styled.View`
display:${(props) => props.IconDisplay};
align-items:center;
justify-content:center;
flex-direction:column;
width:32%;
height:100%;
`


const CourseEventCard = ({
    backgroundColor="#FFFFFF",
    EventBackgroundColor="green",
    EventTitle="",
    EventDescrip="Town Center Field #5",
    EventStartTime="",
    EventDueTime="",
    IconDisplay="flex",
    onCardPress=()=>{}


}) => {
  const navigation = useNavigation();
  return (
    <View style=
    {{
        shadowColor: '#5B7797',
        shadowOffset: {width: 10, height: 8},
        shadowOpacity: .6,
        shadowRadius: 7,
    }}>
    
      
  <CardCont backgroundColor={backgroundColor} onPress={onCardPress}>

    <EventColour EventBackgroundColor={EventBackgroundColor}></EventColour>
    <TextCont>
      <Text style={{fontSize:24}}>{EventTitle.substr(0,15)}</Text>
      <Text style={{fontSize:14}}>{EventDescrip}</Text> 
      <Text style={{fontSize:14}}>{EventStartTime}</Text> 
      <Text style={{fontSize:14}}>{EventDueTime}</Text>  
    </TextCont>
    
   
  
  
 
  </CardCont>
  </View>
  );
};



export default CourseEventCard;

