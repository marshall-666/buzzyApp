import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import Styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const CardCont = Styled.View`
width:90%;
height:90px;
display:flex;
background-color:${(props) => props.backgroundColor};
flex-direction:row;
border:1px solid #C4C4C4;
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


const IndividualEventCard = ({
    backgroundColor="#FFFFFF",
    EventBackgroundColor="#D63030",
    EventTitle="Basketball Practice",
    EventDescrip="Town Center Field #5",
    EventDueDate="September 24th 7:00pm",
    onGroupPress=()=>{},
    onChatPress=()=>{},


}) => {
  return (
  <CardCont backgroundColor={backgroundColor}>
    <EventColour EventBackgroundColor={EventBackgroundColor}></EventColour>
    <TextCont>
      <Text style={{fontSize:24}}>{EventTitle.substr(0,15)}</Text>
      <Text>{EventDescrip}</Text> 
      <Text>{EventDueDate}</Text>  
    </TextCont>
    
    <IconCont>
      <TouchableOpacity onPress={onGroupPress}>
        <MaterialIcons name="group" size={35} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onChatPress}>
        <Entypo name="chat" size={35} color="black" />
      </TouchableOpacity>
    </IconCont>
  
  
  
  </CardCont>
  );
};



export default IndividualEventCard;