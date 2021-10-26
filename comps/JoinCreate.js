
import styled from "@emotion/styled-base";
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Button } from 'react-native';
import Styled from "styled-components/native";


const CardCon = Styled.View`
width:${(props) => props.width}px;
height:${(props) => props.height}px;
background-color:${(props) => props.bgc};
justify-content:center;
align-items:center;
border-radius:${(props) => props.bradius}px;
display:flex;
flex-wrap:wrap;
flex-direction:row;
`
const TextCon = Styled.View`
display:flex;
height:300px;
width:300px;
justify-content:center;
align-items:center;
flex-direction:row;
flex-wrap:wrap;
`
const TextInput1 = Styled.Text`
font-size:24px;

text-align:center;
color:#ffffff;
margin-top:50px
`
const TextInput2 = Styled.Text`
font-size:64px;

color:#ffffff;
text-align:center;
margin-top:50px
`
const TextInput3 = Styled.Text`
font-size:64px;
color:#ffffff;
text-align:center;
margin-top:75px
`
const TextInput4 = Styled.Text`
font-size:24px;
text-align:center;
color:#ffffff;
margin-top:100px

`
const TextInput5 = Styled.Text`
font-size:18px;
text-align:center;
color:#ffffff;

`

const JoinCreate = ({
  text = 'Create Group',
  CardColor = '#35579F',
  bradius = 25,
  height = 600,
  width = 350,
  onJoinPress = () => { },
  onCreatePress = () => { },

}) => {
  return (
    <CardCon bgc={CardColor} bradius={bradius} height={height} width={width}>


      <TextCon>
        <TextInput1>Would you like to:</TextInput1>
        <TouchableOpacity onPress={onJoinPress}>
        <TextInput2 >JOIN</TextInput2>
        </TouchableOpacity>
       
      </TextCon>
      <TextInput5>———————— OR —————————</TextInput5>

      <TextCon>

      <TouchableOpacity  onPress={onCreatePress}> 
      
      <TextInput3> CREATE </TextInput3>
      </TouchableOpacity>
      <TextInput4>A Group</TextInput4>
      
      </TextCon>
     
       
        
    </CardCon>
  );
};



export default JoinCreate;