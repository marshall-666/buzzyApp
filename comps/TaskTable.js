
import styled from "@emotion/styled-base";
import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Button, TextInput } from 'react-native';
import Styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons';
import AppTimePicker from "./AppTimePicker";
import NavBar from "./NavBar";
import RecBtn from "./RecBtn";
import {Picker} from '@react-native-picker/picker';

const CardCon = Styled.View`
width:${(props) => props.width};
height:${(props) => props.height}px;
background-color:${(props) => props.bgc};
justify-content:center;
align-items:center;
border-top-left-radius:25px ;
border-top-right-radius:25px;
display:flex
flex-wrap:wrap;
flex-direction:row;
`
const TextCon = Styled.View`
display:flex;
height:55%;
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
padding-top:5%
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
height:15%;
`
const ButtonCon = Styled.View`
margin-top:10%;
width:100%;
justify-content:center;
align-items:center;

`

const TaskTable = ({

  text = 'Create Group',
  CardColor = '#35579F',

  height = 650,
  width = "100%",
  onJoinPress = () => { },
  onCreatePress = () => { },
  onRecBtnPress=()=>{}
}) => {
  const [selectedValue, setSelectedValue] = useState("Courses")
  const [textValue, setTextValue] = useState("null")

  return (
    <CardCon bgc={CardColor}  height={height} width={width}>

      <TextCon>
          <TextInput1 >
            <Text>
              Create Task 
            </Text> 
          
            <FontAwesome5 name="edit" size={22} color="white" />
            
          </TextInput1>
        <TextInput2>
          Task Name
        </TextInput2>
        
        <TextInput3 
          style=
          {{ 
            height: 40, 
            borderBottomWidth: 1, 
            borderBottomColor: 'white', 
          }}
          onChangeText = {()=>{setTextValue()}}
          value = {textValue}
          placeholder="Type the task name"
        // onChangeText={text => setText(text)}
        // defaultValue={text}
        >
        </TextInput3>
        <TextInput2>
          Task Category
        </TextInput2>
        <PickerCon
          selectedValue={selectedValue}
          style={{ height: 50, width: "100%" }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Courses" value="Courses" />
          <Picker.Item label="Groups" value="Groups" />
          <Picker.Item label="Events" value="Events" />
        </PickerCon>
        <TextInput2>
          Location
        </TextInput2>
        <TextInput3 style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'white', }}
          placeholder="Type the Location"
        // onChangeText={text => setText(text)}
        // defaultValue={text}
        >
          
        </TextInput3>
      <TextInput2>
         Time and Date
      </TextInput2>
      
      </TextCon>
      <TimeCon>
        <AppTimePicker />
      </TimeCon>
      <ButtonCon>
      <RecBtn onRecBtnPress={()=>{console.log(TextInput3.value)}} />
      </ButtonCon>
    
    </CardCon>
  );
};



export default TaskTable;