// import styled from "@emotion/styled-base";
import React, { useState,useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity, View, Button, TextInput } from 'react-native';
import Styled from "styled-components/native";
import { FontAwesome5 } from '@expo/vector-icons';
import {AppTimePicker1, AppTimePicker2} from "./AppTimePicker";
import RecBtn from "./RecBtn";
import { Configurations } from '../PropConfig/Props'
import ModalSelector from 'react-native-modal-selector'
import talktoserver from "../api/talktoserver"



const CardCon = Styled.View`
width:${(props) => props.width};
height:${(props) => props.height}px;
background-color:${(props) => props.bgc};
justify-content:space-around;
align-items:center;
padding-top:25px;
display:flex
flex-wrap:wrap;
flex-direction:row;
`
const TextCon = Styled.View`
display:flex;
height:80%;
width:300px;
justify-content:space-between;
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
font-size:16px;

`
const PickerCon = Styled.View`
width:100%;
margin-top:10px
`
const PickerConTwo = Styled.View`
width:100%;

display: ${(props) => props.display};
justify-content:space-around;

`
const TimeCon = Styled.View`
height:35%;
justify-content:space-around;

`
const ButtonCon = Styled.View`
align-items:center;
margin-top:10%;
`
const TaskTable = ({

  text = 'Create ',
  height = 1200,
  width = "100%",
  onRecBtnPress = () => { },
  taskName,
  discription,
  location,
  startTime,
  endTime,
  setStartTime,
  setEndTime,
  setTaskName,
  setLocation,
  Value,
  setValue,
 desc,setDesc,
 bgC,
 txtC,
 category_id,
 dummyList,
 grpNameVal,
 grpDisp='flex',
 setCategory_id,
 handleGroups= ()=>{},
 title='Create Task',
 ff="Galvji"
}) => {
  const [dbResultGrp, setDbResultGrp] = useState()
  const [grpList, setGrpList] = useState([])
  const [grpName, setGrpName]= useState('No Group Selected')
  const [grpId, setGrpId] = useState('0')
  const [grpListDisp, setListDisp] = useState('none')
  // const [selectedValue, setSelectedValue] = useState('Courses')
  // const [Value, setValue] = useState('')
// const [endTime,setEndTime] =useState('Pick end Time')
  // const [startTime,setStartTime] =useState('Pick start Time')
 
  

  let index = 0;
  const data = [
    { key: index++, section: true, label: 'Type' },
    { key: index++, label: 'Courses' },
    { key: index++, label: 'Groups' },
    { key: index++, label: 'Events' },
    // etc...
    // Can also add additional custom keys which are passed to the onChange callback
    // { key: index++, label: 'Vegetable', customKey: 'Not a fruit' }
  ];

 
const groups =[]


useEffect (()=>{
  if ( Value=== 'Courses')
  {
    setCategory_id( '2')
    setListDisp('none')
    // console.log('hiiii')
  }
  
  else if (Value=== 'Groups')
      {
        setCategory_id('1')
        setListDisp('flex')
      }
  
      else {
        setCategory_id('3')
      setListDisp('none')
  }


},[Value])

    






  return (
    <CardCon bgc={Configurations.colors.primCol} height={height} width={width}>
      <TextCon>
        <TextInput1 tColor={Configurations.colors.secCol}>
          <Text style={{fontFamily:ff}} >
            {title}
            </Text> <FontAwesome5 name="edit" size={22} color={Configurations.colors.secCol} />
          
        </TextInput1>
        <TextInput2 style={{fontFamily:ff, color:Configurations.colors.secCol}} >
          Task Name
        </TextInput2>
        <TextInput3
        
          style=
          {styles.inputStyle}
          onChangeText={(text) => { setTaskName(text) }}
          value={taskName}
          placeholder="Type the task name"
        >
        </TextInput3 >
        <TextInput2 style={{fontFamily:ff, color:Configurations.colors.secCol}} >
          Task Category
        </TextInput2>
        <PickerCon>
          <ModalSelector
            data={data}
            initValue="Coures"
            // onValueChange={(label) => setSelectedValue(label)}
            onChange={(item)=>{ 
              
              setValue(item.label)
             
             
            
            
            }}
            borderBottomWidth="none" 
            >
             <TextInput
                        style={{
                        borderWidth:1, 
                        borderColor:Configurations.colors.secCol, 
                        padding:2, 
                        height:35, 
                        fontSize:18, 
                        textAlign:'center',
                        color:Configurations.colors.secCol,

                      }}
                        editable={false}
                        placeholder=""
                        value={Value}
                         />
          </ModalSelector>
            
        </PickerCon>

        <PickerConTwo display={grpListDisp} >
        <TextInput2 style={{fontFamily:ff, color:Configurations.colors.secCol, marginBottom:10}} >
          Please Select a group 
        </TextInput2>
          <ModalSelector
            data={dummyList}
            initValue="No group Selected"
            // onValueChange={(label) => setSelectedValue(label)}
            onChange={handleGroups
              // setGrpName(item.label)
              // setGrpId(item.groupId)
            }
            borderBottomWidth="none" 
            >
             <TextInput
                      style=
                      {{
                          borderWidth:1, 
                          borderColor:Configurations.colors.secCol, 
                          padding:2, 
                          height:35, 
                          fontSize:18, 
                          textAlign:'center',
                          color:Configurations.colors.secCol
                      }}
                        editable={false}
                        placeholder="no group selected"
                        value={grpNameVal}
                        
                         />
          </ModalSelector>
            
        </PickerConTwo>
        {/* <TextInput3 style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'white', color: Configurations.colors.secCol }}
         
         value={selectedValue}
         
        >
        </TextInput3> */}
        <TextInput2 style={{fontFamily:ff, color:Configurations.colors.secCol}} >
          Location
        </TextInput2>
        <TextInput3 style={styles.inputStyle}
          placeholder="Type the Location"
          onChangeText={(text) => { setLocation(text) }}
          value={location}
          // defaultValue={text}
        ></TextInput3>
         <TextInput2 style={{fontFamily:ff, color:Configurations.colors.secCol}} >
           
         Description
        </TextInput2>
        <TextInput3 style=
          {styles.inputStyle}
          placeholder="Describe your purpose"
          onChangeText={(text) => { setDesc(text) }}
          value={desc}
          // defaultValue={text}
        ></TextInput3>
        <TimeCon>
        <TextInput2 style={{fontFamily:ff, color:Configurations.colors.secCol}} >
          Start Time
        </TextInput2> 
          <AppTimePicker1
            startTime={startTime} setStartTime={setStartTime} 
            />
          

        <TextInput2 style={{fontFamily:ff, color:Configurations.colors.secCol}} >
          End Time
        </TextInput2>
        
          <AppTimePicker2
           endTime={endTime}  setEndTime={setEndTime}  
           />
        </TimeCon>
      <ButtonCon>
        <RecBtn txtC={txtC} bgC={bgC} style={{}} onRecBtnPress={onRecBtnPress} text={text} bgC={bgC}/>
      </ButtonCon>
      </TextCon>

    </CardCon>
  );
  
};


const styles=StyleSheet.create({
  
  
  
  inputStyle: 
      {
            height: 40,
            borderBottomWidth: 3,
            borderBottomColor: 'white',
            fontSize:16,
            fontFamily:'Galvji'
      },

  labelStyle:
      {
            color: Configurations.colors.secCol ,

      }
            

})
export default TaskTable;