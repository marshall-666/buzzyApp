import React from 'react'
import { View, Text, TextInput,Pressable, ScrollView, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Configurations } from '../PropConfig/Props'
import RecBtn from './RecBtn'
const primCol = Configurations.colors.primCol
const butCol = Configurations.colors.butCol


const OptCont = styled.View`
width:100%;
height:90%;
justify-content:center;

`

const ButPress = styled.Pressable`
height:45px;
width:150px;
background-color:${butCol};
justify-content:center;
align-items:center;
padding:5px;
border-radius:5px;

`
const HeadCont = styled.View`

width:85%;
`
const HeadTxt = styled.Text`
text-align:left;
color:white;
font-weight:500;
font-size:32px;
`


const SubTxt = styled.Text`
font-size:18px;
margin-left:-5px;
color:${Configurations.colors.secCol}
`
const InputBox = styled.TextInput`
width:95%;
height:40px;
border-bottom-width:1px;
border-bottom-color:${Configurations.colors.secCol};
color:white;
`
const InputContainer = styled.View`
align-items:flex-start;
margin-bottom:5%

`
const Notes = styled.TextInput`
width:100%;
height:30%;
background:white;
borderRadius:10px;
margin-bottom:2.5%
padding-left:5%
justify-content:flex-start;
align-items:flex-start
`
const BtnCon = styled.View `
width:100%;
height:20%;
display:flex;
flex-direction:row
justify-content:space-between;
align-items:center
`
const TextInput2 = styled.Text`
font-size:18px;
padding-top:1.5%
`
const TextInput3 = styled.TextInput`
width:100%;

`
export const  ScheduleMeetingForm = ({
    handlePress=()=>{},
    inputTitle,
    setInputTitle,
    inputTitle2,
    setInputTitle2,
    description,
    setDescription,
    Next=()=>{},
    Back=()=>{},
    location,
    setLocation
})=> {
    
    return (
            <OptCont>
                <ScrollView contentContainerStyle={{height:'100%', }}>
                <InputContainer>
                    <TextInput2 style={{color:Configurations.colors.secCol}}>Meeting Name</TextInput2>
                    <TextInput3 style={{ height: 36, borderBottomWidth: 1, borderBottomColor: Configurations.colors.secCol, color: Configurations.colors.secCol }}
                    placeholder="Buzzy Bee"  onChangeText={(text) => { setInputTitle(text) }} value={inputTitle}/>
                </InputContainer>
            
                {/* <InputContainer>
                    <TextInput2 style={{color:Configurations.colors.secCol}}> Task color </TextInput2>
                    <TextInput3 style={{ height: 36, borderBottomWidth: 1, borderBottomColor: Configurations.colors.secCol, color: Configurations.colors.secCol }}
                    placeholder="Red" placeholderTextColor="lightgrey" onChangeText={(text) => { setInputTitle2(text) }} value={inputTitle2}/>
                </InputContainer> */}
                
                <Notes placeholder="meeting notes" placeholderTextColor={Configurations.colors.secCol} onChangeText={(text) => { setDescription(text) }} value={description}/>
               
            
            {/* <ButPress onPress={handlePress}>
                <Text style={{fontSize:20}}>{buttLabel}</Text>
            </ButPress> */}
            <InputContainer>
             <TextInput2 style={{ color: Configurations.colors.secCol }} >
          Meeting Platform
        </TextInput2>
        <TextInput3 style={{ height: 36, borderBottomWidth: 1, borderBottomColor: Configurations.colors.secCol, color: Configurations.colors.secCol }}
          placeholder="Type the Location or a Meeting method"
          onChangeText={(text) => { setLocation(text) }}
          value={location}
          // defaultValue={text}
        ></TextInput3>
      </InputContainer>
            <BtnCon>
            <RecBtn bgC={butCol} text="Back" width={150} height={60} onRecBtnPress={Back}/>
            <RecBtn bgC={butCol} text="Next" width={150} height={60} onRecBtnPress={Next}/>
            </BtnCon>
                </ScrollView>
            
            </OptCont>


        

    )
}

const styles = StyleSheet.create({
    
    slot:{

        justifyContent:'center',
        alignItems:'center'
    }

})
