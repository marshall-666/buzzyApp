import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components/native'


import { Configurations } from '../PropConfig/Props';
const secCol = Configurations.colors.secCol



const MenuCont = styled.View`
height:${props => props.height};
width:45%;
align-items:flex-end;
background-color:${props => props.color};
`
const IconCell = styled.Pressable`
width:30%;
flex-direction:row;
background-color:green;
justify-content:space-around;
`  

const OptCont = styled.View`
width:100%;
height:90%;
background-color:red;
justify-content:space-around;
display:none;
`

const OptCell = styled.Pressable`
width:100%;
flex-direction:row;
justify-content:space-around;
align-items:center;

`  

const TextCont = styled.Text`
color:#e5e5e5;
`

export const SubMenu = (
    {
        color = secCol
    }
)=> {

    const [height, setHeight] = useState('15%')
    const [card, setCard] = useState(true)



    return (
        <MenuCont 
            color  = {color}
            height = {height}
        >
            



                <IconCell onPress = {()=> {alert('maafuc')}}> 
                    <FontAwesomeIcon icon={faCoffee} size={35} color="white" /> 
                </IconCell>


                <OptCont>
                    <OptCell>
                        <FontAwesomeIcon icon={faCoffee} size = {30} color='white'/>
                        <TextCont>Option1</TextCont>
                    </OptCell>
                    
                    <OptCell>
                        <FontAwesomeIcon icon={faCoffee} size = {30} color='white'/>
                        <TextCont>Option1</TextCont>
                    </OptCell>
                    
                    <OptCell>
                        <FontAwesomeIcon icon={faCoffee} size = {30} color='white'/>
                        <TextCont>Option1</TextCont>
                    </OptCell>
                
                    <OptCell>
                        <FontAwesomeIcon icon={faCoffee} size = {30} color='white'/>
                        <TextCont>Option1</TextCont>
                    </OptCell>
                </OptCont>

        
        </MenuCont>
    )
}
