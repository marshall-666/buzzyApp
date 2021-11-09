import React from 'react'
import { View, Text, TextInput, Pressable, Button } from 'react-native'
import styled from 'styled-components/native'
import { Configurations } from '../PropConfig/Props'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'



const butCol = Configurations.colors.butCol

const ChatCont = styled.View`
width:100%;
flex-direction:row;
align-items:center;
justify-content:space-around;
`
const InpButCont = styled.View`
flex-direction: row

background-color:white;
justify-content:space-between;
width:90%;
`
const SendBut = styled.Pressable`
background-color:${props => props.btnCol};
height:45px;
border-radius:5px;
align-items:center

justify-content:center;
width:100px;
`
const TextBox = styled.TextInput`
border:1px solid grey;
width:70%;
flex-wrap:wrap;
`
const CamCont = styled.Pressable``

export const ChatBar =({
    btnCol = butCol,
    onCamPress = ()=>{}
}
    
    )=> {
    return (
        <ChatCont>
           <CamCont onPress={()=>{onCamPress}}>
            <FontAwesomeIcon icon={faCameraRetro} size = {30}/>
           </CamCont>
           <InpButCont>
                <TextBox 
                    multiline
                    numberOfLines={4}
                    placeholder="Type Your Message here"
                    />
                <SendBut 
                    btnCol={btnCol} 
                    onPress = {()=>{}}>
                        <Text>Send</Text>
                </SendBut>

                        
            </InpButCont>
        </ChatCont>
    )
}
