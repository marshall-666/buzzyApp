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
font-size:18px;
text-align:center

`
const TaskBtn = ({
  onBtnPress=()=>{},
  taskNum = '3',
  taskBtnColor='#E5E5E5',
  bradius=42.5,
  height=85,
  width=85,
  taskCate="Course"
}) => {
  return (
    <View>
    <TouchableOpacity
    onPress={onBtnPress}
    >
    <BtnCon bgc={taskBtnColor} bradius={bradius} height={height} width={width} >
     
        <TextInput>{taskNum}</TextInput>
      
    </BtnCon>
    </TouchableOpacity>
    <TaskInput>{taskCate}</TaskInput>
     </View>
  );
};



export default TaskBtn;