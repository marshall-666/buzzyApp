import React from 'react'
import { View, Text, TextInput,Pressable } from 'react-native'
import styled from 'styled-components/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { Configurations } from '../PropConfig/Props'

const primCol = Configurations.colors.primCol
const butCol = Configurations.colors.butCol
const CardCont = styled.View`
background-color:${primCol};
width:100%;
height:90%;

border-radius:5px;
align-items:center;
padding:20px;
`

const OptCont = styled.View`

width:85%;
height:70%;
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
color:white;
`
const InputBox = styled.TextInput`
width:80%;
height:45px;
border-bottom-width:3px;
border-bottom-color:white;
color:white;
`
const InputContainer = styled.View`
align-items:flex-start;

`


export const  CreateGroup = ({
    handlePress=()=>{},
    nameVal="",
    discpVal="",
    memVal="",
    onGrpVal = ()=>{},
    onDiscpVal=()=>{},
    onMemVal = ()=>{}

})=> {


    return (
        <CardCont>
            
            <HeadCont>
                <HeadTxt>
                    Create A Group
                </HeadTxt>
            </HeadCont>
                
            
            <OptCont>
            
                <InputContainer>
                    <SubTxt> Group Name </SubTxt>
                    <InputBox 
                        placeholder="Name" 
                        placeholderTextColor="lightgrey" 
                        value={nameVal} 
                        onChangeText={onGrpVal}/>
                </InputContainer>
            
                <InputContainer>
                    <SubTxt> Description </SubTxt>
                    <InputBox 
                        placeholder="What is This Group For" 
                        placeholderTextColor="lightgrey" 
                        value={discpVal} 
                        onChangeText={onDiscpVal} 
                    
                    />
                </InputContainer>
            
                <InputContainer>
                    <SubTxt>Invite Members(Separate the emails using a ,) </SubTxt>
                    <InputBox 
                        placeholder="Enter Group Member's Emails" 
                        placeholderTextColor="lightgrey"
                        value={memVal}
                        onChangeText={onMemVal} 
                        />
                </InputContainer>
            
            <ButPress onPress={handlePress}>
                <Text>Create Group</Text>
            </ButPress>
            </OptCont>

        </CardCont>
    )
}
