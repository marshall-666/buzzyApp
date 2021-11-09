// import styled from "@emotion/styled-base";
import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Button } from 'react-native';
import Styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons';
import AppTimePicker from "./AppTimePicker";
import NavBar from "./NavBar";
import RecBtn from "./RecBtn";
import {Picker} from '@react-native-picker/picker';
import  {Configurations} from'../PropConfig/Props'


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
height:90%;
width:300px;
justify-content:flex-start;
flex-direction:column;
flex-wrap:wrap;
`

const TextInput1 = Styled.Text`
font-size:24px;
color:${(props) => props.tColor};
padding-top:3%
marginLeft:0;
`
const TextInput2 = Styled.Text`
font-size:18px;
padding-top:5%
`
const TextInput3 = Styled.TextInput`
width:100%;
`
const PickerCon = Styled.Picker`
width:100%;
`
const TimeCon = Styled.View`
height:15%;
`
const ButtonCon = Styled.View`
margin-top:-200px
`
const TaskTable = ({

  text = 'Create ',
  height = 800,
  width = "100%",
  onJoinPress = () => { },
  onCreatePress = () => { },
  onRecBtnPress=()=>{},
  TaskName,
  LoCation,

}) => {
  const [selectedValue, setSelectedValue] = useState("Courses")
  return (
    <CardCon bgc={Configurations.colors.primCol}  height={height} width={width}>

      <TextCon>
          <TextInput1  tColor={Configurations.colors.secCol}   ><Text>Create Task </Text> <FontAwesome5 name="edit" size={22} color={Configurations.colors.secCol}/>
          </TextInput1>
        <TextInput2  style={{color:Configurations.colors.secCol}} >
          Task Name 
        </TextInput2>
        <TextInput3 style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'white', }}
          placeholder="Type the task name"
        onChangeText={ TaskName}
        defaultValue={text}
        >
        </TextInput3>
        <TextInput2 style={{color:Configurations.colors.secCol}} >
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
        <TextInput2 style={{color:Configurations.colors.secCol}} >
          Location
        </TextInput2>
        <TextInput3 style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'white', color:Configurations.colors.secCol }}
          placeholder="Type the Location"
        onChangeText={LoCation}
        defaultValue={text}
        ></TextInput3>
      <TextInput2 style={{color:Configurations.colors.secCol}} >
         Start Time
        </TextInput2>
        <TimeCon>
        <AppTimePicker />
      </TimeCon>
        <TextInput2 style={{color:Configurations.colors.secCol}} >
         End Time
        </TextInput2>
        <TimeCon>
        <AppTimePicker />
      </TimeCon>
      </TextCon>
      <ButtonCon>
      <RecBtn onRecBtnPress={onRecBtnPress} text={text}/>
      </ButtonCon>
    
    </CardCon>
  );
};



export default TaskTable;