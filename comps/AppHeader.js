
import styled from "@emotion/styled-base";
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Button } from 'react-native';
import Styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons';


const CardCon = Styled.View`
width:${(props) => props.width};
height:${(props) => props.height}px;
background-color:${(props) => props.bgc};
justify-content:space-between;
align-items:flex-end;
display:flex;
flex-direction:row;
padding-left:5%;
padding-right:5%;
padding-bottom:2%
`

const TextInput = Styled.Text`
font-size:${(props) => props.fontSize}px;
width:330px
text-align:${(props) => props.textAlign};
color:#ffffff;

margin-bottom:-5px
`
const IconInut = Styled.Text`
display:${(props) => props.dispaly};
`
const AppHeader = ({
  text = 'Settings',
  headColor = '#1E315C',
  height = 95,
  width = '100%',
  onMenuPress = () => { },
  onBackPress = () => { },
  fontSize = 36,
  display = 'flex',
  textAlign = 'left'
}) => {
  return (
    <CardCon bgc={headColor} height={height} width={width}>
      <TouchableOpacity onPress={onBackPress}>
        <IconInut dispaly={display}>
          <Entypo name="arrow-with-circle-left" size={24} color="white" />
        </IconInut>
      </TouchableOpacity>
      <TextInput fontSize={fontSize} textAlign={textAlign}>{text}</TextInput>
      <TouchableOpacity onPress={onMenuPress}>
        <Entypo name="dots-three-vertical" size={24} color="white" />
      </TouchableOpacity>
    </CardCon>
  );
};



export default AppHeader;