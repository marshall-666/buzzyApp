
import styled from "@emotion/styled-base";
import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Button, Picker } from 'react-native';
import Styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons';
import AppTimePicker from "./AppTimePicker";
import NavBar from "./NavBar";
import RecBtn from "./RecBtn";

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

const TaskTable = ({

  text = 'Create Group',
  CardColor = '#35579F',
  bradius = 25,
  height = 600,
  width = "100%",
  onJoinPress = () => { },
  onCreatePress = () => { },
  onRecBtnPress=()=>{}
}) => {
  const [selectedValue, setSelectedValue] = useState("Courses")
  return (
    <CardCon bgc={CardColor} bradius={bradius} height={height} width={width}>

      <TextCon>
        
          <TextInput1 >  <Text style={{marginRight:50}}>Create Task </Text>
          <FontAwesome5 name="edit" size={22} color="white" />
          </TextInput1>
        <TextInput2>
          Task Name
        </TextInput2>
        <TextInput3 style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'white', }}
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
        ></TextInput3>
      </TextCon>
      <TimeCon>
        <AppTimePicker />
      </TimeCon>
      <ButtonCon>

      <RecBtn onRecBtnPress={onRecBtnPress} />
      </ButtonCon>
     
     

      
     



    </CardCon>
  );
};



export default TaskTable;