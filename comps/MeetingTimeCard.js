import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import Styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons';


const CardCont = Styled.View`
width:50%;
height:25%;
display:flex;
background-color:${(props) => props.backgroundColor};
flex-direction:column;
justify-content:space-between;
align-items:center;
padding:2%;
border-radius:15px;
border:1px solid #C4C4C4;
overflow:hidden;
`


const DateCont = Styled.View`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:40%;
`;



const MeetingTimeCard = ({
    backgroundColor="#FFFFFF",
    date="25th",
    month="December",
    day="Monday"
}) => {
  return (
  <CardCont backgroundColor={backgroundColor}>
    <DateCont>
        <Text style={{
            fontWeight:"bold",
            fontSize:25
        }}>{date}</Text>
        <Text>{month}</Text>
    </DateCont>
    <Text>{day}</Text>
  </CardCont>

  );
};



export default MeetingTimeCard;