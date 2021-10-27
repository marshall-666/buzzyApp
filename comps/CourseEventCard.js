import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import Styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons';

const CardCont = Styled.View`
width:90%;
height:20%;
display:flex;
background-color:${(props) => props.backgroundColor};
flex-direction:row;
border:1px solid #C4C4C4;
border-top-right-radius:${(props) => props.borderTopRightRadius};
border-bottom-right-radius:${(props) => props.borderBottomRightRadius};
overflow:hidden;
`
const EventColour = Styled.View`
width:8%;
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


const CourseEventCard = ({
    backgroundColor="#FFFFFF",
    borderTopRightRadius="20px",
    borderBottomRightRadius="0",
    EventBackgroundColor="#EFF32A",
    EventTitle="MDIA 3109",
    EventDescrip="Finish Beast Composition",
    EventDueDate="Due: September 22nd",
    onEditPress=()=>{},


}) => {
  return (
  <CardCont backgroundColor={backgroundColor} borderTopRightRadius={borderTopRightRadius} borderBottomRightRadius={borderBottomRightRadius}>
    <EventColour EventBackgroundColor={EventBackgroundColor}></EventColour>
    <TextCont>
      <Text style={{fontSize:30}}>{EventTitle}</Text>
      <Text>{EventDescrip}</Text> 
      <Text>{EventDueDate}</Text>  
    </TextCont>

    <IconCont>
      <TouchableOpacity onPress={onEditPress}>
      <Entypo name="edit" size={50} color="black" />
      </TouchableOpacity>
    </IconCont>
  
  </CardCont>

  );
};



export default CourseEventCard;