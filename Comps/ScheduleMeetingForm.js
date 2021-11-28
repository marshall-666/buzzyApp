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
height:85%;
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
margin-bottom:7.5%
`
const Notes = styled.TextInput`
width:100%;
height:25%;
background:white;
borderRadius:10px;
margin-bottom:5%
`
const BtnCon = styled.View `
width:100%;
height:20%;
display:flex;
flex-direction:row
justify-content:space-between;
align-items:center
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
    Back=()=>{}
})=> {
    return (
        
                    
            <OptCont>
                <ScrollView contentContainerStyle={{height:'100%', }}>
                <InputContainer>
                    <SubTxt style={{color:Configurations.colors.secCol}}>  Meeting name</SubTxt>
                    <InputBox placeholder="Buzzy Bee" placeholderTextColor="lightgrey" value={inputTitle}/>
                </InputContainer>
            
                <InputContainer>
                    <SubTxt style={{color:Configurations.colors.secCol}}> Task color </SubTxt>
                    <InputBox placeholder="Red" placeholderTextColor="lightgrey" value={inputTitle2}/>
                </InputContainer>
                
                <Notes placeholder="meeting notes" placeholderTextColor="lightgrey" value={description}/>
               
            
            {/* <ButPress onPress={handlePress}>
                <Text style={{fontSize:20}}>{buttLabel}</Text>
            </ButPress> */}
            <BtnCon>
            <RecBtn text="Back" width={150} height={60} onRecBtnPress={Back}/>
            <RecBtn text="Next" width={150} height={60} onRecBtnPress={Next}/>
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
