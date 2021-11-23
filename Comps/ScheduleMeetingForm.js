import React from 'react'
import { View, Text, TextInput,Pressable, ScrollView, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Configurations } from '../PropConfig/Props'

const primCol = Configurations.colors.primCol
const butCol = Configurations.colors.butCol


const OptCont = styled.View`
width:100%;
height:90%;
justify-content:space-around;
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
width:100%;
height:45px;
border-bottom-width:3px;
border-bottom-color:${Configurations.colors.secCol};
color:white;
`
const InputContainer = styled.View`
align-items:flex-start;

`
const Notes = styled.TextInput`
width:100%;
height:30%;
background:white;
borderRadius:10;
`

export const  ScheduleMeetingForm = ({
    handlePress=()=>{},
    inputTitle="Meeting Name",
    inputTitle2="Event Colour",
    buttLabel="Next"
})=> {
    return (
        
                    
            <OptCont>
                <ScrollView contentContainerStyle={{height:'100%', justifyContent:'space-evenly'}}>
                <InputContainer>
                    <SubTxt style={{color:Configurations.colors.secCol}}> {inputTitle} </SubTxt>
                    <InputBox placeholder="Buzzy Bee" placeholderTextColor="lightgrey"/>
                </InputContainer>
            
                <InputContainer>
                    <SubTxt style={{color:Configurations.colors.secCol}}> {inputTitle2} </SubTxt>
                    <InputBox placeholder="Red" placeholderTextColor="lightgrey"/>
                </InputContainer>
                
                <Notes placeholder="meeting notes" placeholderTextColor="lightgrey"/>
               
            
            <ButPress onPress={handlePress}>
                <Text>{buttLabel}</Text>
            </ButPress>
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
