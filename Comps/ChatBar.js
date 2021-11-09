import React from 'react'
import { useState } from 'react'
import { View, Text, TextInput, Pressable, Button, KeyboardAvoidingView, Platform } from 'react-native'
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

width:70%;
flex-wrap:wrap;
`
const CamCont = styled.Pressable``

export const ChatBar =({
    btnCol = butCol,
    onCamPress = ()=>{}
}
    
    )=> {
        const [message, setMessage] = useState('hhh')
        
        const sendMessage = ()=>
        {
            console.warn("sending:", message)
            setMessage('')
        }

        const onPlusClick = ()=>
        {
            console.warn("Type a message to send")
        }

        const onPress = ()=> 
        {
            if (message)
            {
                sendMessage();
            }
            else {
                onPlusClick();
            }
        }
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={95}>
           <CamCont onPress={()=>{onCamPress}}>
            {/* <FontAwesomeIcon icon={faCameraRetro} size = {30}/> */}
           </CamCont>
           <InpButCont>

               <View 
                
               style={{flex:1, justifyContent:'center'}}>
                <TextBox 
                    value={message}
                    onChangeText = {setMessage}
                    multiline
                    numberOfLines={4}
                    placeholder="Type Your Message here"
                    />
                </View>
                <SendBut 
                    btnCol={btnCol} 
                    onPress = {onPress}>
                        <Text>Send</Text>
                </SendBut>

                        
            </InpButCont>
        </KeyboardAvoidingView>
    )
}
