import styled from "@emotion/styled-base";
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import  Styled from "styled-components/native";


const BtnCon = Styled.View`
width:${(props)=>props.width}px;
height:${(props)=>props.height}px;
background-color:${(props)=>props.bgc};
justify-content:center;
align-items:flex-start;
border-radius:${(props)=>props.bradius}px;
padding:10px
box-shadow: 0 3px 5px rgba(0, 0, 0 , 0.3);
`
const TextInput =Styled.Text`
font-size:32px;
color:${(props)=>props.textColor}
`
const TaskInput =Styled.Text`
font-size:14px;
color:${(props)=>props.textColor}
`
const TaskBtn = ({
  onBtnPress=()=>{},
  taskNum = '3',
  taskBtnColor='#E5E5E5',
  bradius=15,
  height=100,
  width=100,
  taskCate="Course",
  textColor="black"
}) => {
  return (
    <View>
    <TouchableOpacity
    onPress={onBtnPress}
    >
    <BtnCon bgc={taskBtnColor} bradius={bradius} height={height} width={width} >
     
        <TextInput textColor={textColor}>{taskNum}</TextInput>
        <TaskInput textColor={textColor}>{taskCate}</TaskInput>
    </BtnCon>
    </TouchableOpacity>
    {/* <TaskInput>{taskCate}</TaskInput> */}
     </View>
  );
};



export default TaskBtn;