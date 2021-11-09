import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import Styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


const CardCont = Styled.View`
width:90%;
height:120px;
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
padding:1%;
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
    borderTopRightRadius="0",
    borderBottomRightRadius="0",
    EventBackgroundColor="#EFF32A",
    EventTitle="MDIA 3109",
    EventDescrip="Finish Beast Composition",
    EventStartTime="September 24th 5:00pm",
    EventDueTime="September 24th 7:00pm",
    onGroupPress=()=>{},


}) => {
  return (
  <CardCont backgroundColor={backgroundColor} borderTopRightRadius={borderTopRightRadius} borderBottomRightRadius={borderBottomRightRadius}>
    <EventColour EventBackgroundColor={EventBackgroundColor}></EventColour>
    <TextCont>
      <Text><Text style={{fontSize:20}}>{EventTitle}</Text>  <FontAwesome5 name="edit" size={22} color="black" iconStyle={{marginLeft: 50}} /></Text> 
      <Text style={{fontSize:14}}>{EventDescrip}</Text> 
      <Text style={{fontSize:14}}>{EventStartTime}</Text> 
      <Text style={{fontSize:14}}>{EventDueTime}</Text>  
    </TextCont>
  </CardCont>
  );
};



export default GroupEventCard;