
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
border-radius:${(props)=>props.bradius}px

`
const TextInput =Styled.Text`
font-size:24px;

`

const RecBtn = ({onBtnPress=()=>{},
  text = 'Create Group',
  RecBtnColor='#FCCA12',
  bradius=10,
  height=75,
  width=275
}) => {
  return (
  
    <TouchableOpacity  onPress={onBtnPress}>
   
    <BtnCon bgc={RecBtnColor} bradius={bradius} height={height} width={width}>
      {/* <TouchableOpacity
        onPress={onBtnPress}
      > */}
        <TextInput>{text}</TextInput>
      {/* </TouchableOpacity> */}
    </BtnCon>
     </TouchableOpacity>
  );
};



export default RecBtn;