import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components/native'


import { Configurations } from '../PropConfig/Props';
const secCol = Configurations.colors.secCol



const MenuCont = styled.View`
height:${props => props.height};
width:100%;
align-items:flex-end;
background-color:${props => props.color};
`
const IconCell = styled.Pressable`

width:30%;

flex-direction:row;
background-color:green;
align-items:center;
justify-content:space-around;
`  

const OptCont = styled.View`
width:50%;
max-height:800px;
height:500px;

background-color:red;
right:${props=> props.right};
justify-content:space-around;
display:${props => props.display};
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

    const [height, setHeight] = useState('5%')
    const [right, setRight] = useState('-50%')
    const [menu, setMenu] = useState(true)
    const [display, setDisplay] = useState('flex')


       const menuHeight = ()=>
    {
        if(menu)
        {
            // setHeight('90%')
            setRight ('0%')
            // setDisplay('flex')
        }
        else{
            // setHeight('5%')
            setRight ('-50%')
            // setDisplay('none')
        }
    }
    

    return (
        <MenuCont 
            color  = {color}
            height = {height}
        >
            



                <IconCell onPress = {()=> {
                    setMenu(!menu) 
                    menuHeight()
                }}> 
                    <FontAwesomeIcon icon={faEllipsisV} size={35} color="white" /> 
                </IconCell>


                <OptCont 
                    display = {display}
                    right =   {right}>
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
