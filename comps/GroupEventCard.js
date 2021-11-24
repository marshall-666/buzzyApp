import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import Styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const CardCont = Styled.View`
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
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:32%;
height:100%;
`


const GroupEventCard = ({
    backgroundColor="#FFFFFF",
    EventBackgroundColor="#D63030",
    EventTitle="Basketball Practice",
    EventDescrip="Town Center Field #5",
    EventStartTime="September 24th 5:00pm",
    EventDueTime="September 24th 7:00pm",
    onGroupPress=()=>{},
    onChatPress=()=>{},


}) => {
  const navigation = useNavigation();
  return (
  <CardCont backgroundColor={backgroundColor}>
    <EventColour EventBackgroundColor={EventBackgroundColor}></EventColour>
    <TextCont>
      <Text style={{fontSize:24}}>{EventTitle.substr(0,15)}</Text>
      <Text style={{fontSize:14}}>{EventDescrip}</Text> 
      <Text style={{fontSize:14}}>{EventStartTime}</Text> 
      <Text style={{fontSize:14}}>{EventDueTime}</Text>  
    </TextCont>
    
    <IconCont>
      <TouchableOpacity onPress={()=>{navigation.navigate('GroupHome')}}>
        <MaterialIcons name="group" size={35} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('AllChats')}}>
        <Entypo name="chat" size={35} color="black" />
      </TouchableOpacity>
    </IconCont>
  
  
  
  </CardCont>
  );
};



export default GroupEventCard;