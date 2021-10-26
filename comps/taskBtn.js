import styled from "@emotion/styled-base";
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import  Styled from "styled-components/native";


const BtnCon = Styled.View`
width:${(props)=>props.width}px;
height:${(props)=>props.height}px;
background-color:${(props)=>props.bgc};
justify-content:center;
align-items:center;
border-radius:${(props)=>props.bradius}px;
border: 7px solid grey;
`
const TextInput =Styled.Text`
font-size:24px;

`
const TaskInput =Styled.Text`
font-size:24px;
text-align:center

`
const TaskBtn = ({
  onBtnPress=()=>{},
  text = '3',
  RecBtnColor='#E5E5E5',
  bradius=42.5,
  height=85,
  width=85,
  task="Course"
}) => {
  return (
    <View>
    <TouchableOpacity
    onPress={onBtnPress}
    >
    <BtnCon bgc={RecBtnColor} bradius={bradius} height={height} width={width} >
     
        <TextInput>{text}</TextInput>
      
    </BtnCon>
    </TouchableOpacity>
    <TaskInput>{task}</TaskInput>
     </View>
  );
};



export default TaskBtn;