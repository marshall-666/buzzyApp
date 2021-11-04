import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import Styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

const CardCont = Styled.View`
width:90%;
height:90px;
display:flex;
background-color:${(props) => props.backgroundColor};
flex-direction:row;
border:1px solid #C4C4C4;
border-top-right-radius:${(props) => props.borderTopRightRadius};
border-bottom-right-radius:${(props) => props.borderBottomRightRadius};
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
    borderTopRightRadius=0,
    borderBottomRightRadius="0",
    EventBackgroundColor="#EFF32A",
    EventTitle="Buzzy Bee",
    EventDescrip="come up with marketing scheme",
    EventDueDate="September 23rd 5:00pm",
    onGroupPress=()=>{},
    NumOfGroupMembers="+3 people"


}) => {
  return (
  <CardCont backgroundColor={backgroundColor} borderTopRightRadius={borderTopRightRadius} borderBottomRightRadius={borderBottomRightRadius}>
    <EventColour EventBackgroundColor={EventBackgroundColor}></EventColour>
    <TextCont>
      <Text style={{fontSize:24}}>{EventTitle}</Text>
      <Text>{EventDescrip}</Text> 
      <Text>{EventDueDate}</Text>  
    </TextCont>
    
    <IconCont>
      <TouchableOpacity onPress={onGroupPress}>
        <MaterialIcons name="group" size={55} color="black" />
      </TouchableOpacity>
      <Text>{NumOfGroupMembers}</Text>
    </IconCont>
  
  
  
  </CardCont>
  );
};



export default GroupEventCard;