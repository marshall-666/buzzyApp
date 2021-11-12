
import styled from "@emotion/styled-base";
import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Button } from 'react-native';
import Styled from "styled-components/native";
import  {Configurations} from'../PropConfig/Props'

const CardCon = Styled.View`
width:${(props) => props.width};
height:${(props) => props.height}px;
background-color:${(props) => props.bgc};
justify-content:center;
align-items:center;
border-radius:${(props) => props.bradius}px;
display:flex;
flex-wrap:wrap;
flex-direction:row;
box-shadow: 0 3px 10px rgba(0, 0, 0 , 0.9);
`
const TextCon = Styled.View`
display:flex;
height:50%;
width:300px;
justify-content:flex-start;
flex-direction:column;
flex-wrap:wrap;
`

const TextInput1 = Styled.Text`
font-size:24px;
color:#ffffff;
width:100%
padding-top:3%
marginLeft:0;
`
const TextInput2 = Styled.Text`
font-size:18px;
color:#ffffff;
padding-top:10px
`
const TextInput3 = Styled.TextInput`
width:100%;
color:#ffffff;
`
const PickerCon = Styled.Picker`
width:100%;
color:#ffffff;
`
const TimeCon = Styled.View`
height:10%;
`
const ButtonCon = Styled.View`
margin-top:10%
`

const TaskCardArea = ({

  text = 'Create Group',
  bradius = 25,
  height = 800,
  width = "100%",
  onJoinPress = () => { },
  onCreatePress = () => { },
  onRecBtnPress=()=>{}
}) => {
  const [selectedValue, setSelectedValue] = useState("Courses")
  return (
    <CardCon  bgc={Configurations.colors.primCol} bradius={bradius} height={height} width={width}>
    </CardCon>
  );
};



export default TaskCardArea;