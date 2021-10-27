import React from 'react'
import { View, Text, TextInput, Pressable, Button } from 'react-native'
import styled from 'styled-components/native'
import { Configurations } from '../PropConfig/Props'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'



const butCol = Configurations.colors.butCol

const ChatCont = styled.View`
flex-direction:row;
background-color:green;
`
const InpButCont = styled.View`
flex-direction: row
border: 1px solid grey;
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
width:150px;
`


export const ChatBar =({
    btnCol = butCol
}
    
    )=> {
    return (
        <ChatCont>
           
           <FontAwesomeIcon icon={faCameraRetro} size = {30}/>
           <InpButCont>
                <TextInput placeholder="Type Your Message here"/>
                <SendBut 
                btnCol={btnCol} 
                onPress = {()=>{}}>
                    <Text>Send</Text>

                    </SendBut>
            </InpButCont>
        </ChatCont>
    )
}
