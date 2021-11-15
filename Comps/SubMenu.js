import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useState } from 'react';

import styled from 'styled-components/native'


import { Configurations } from '../PropConfig/Props';
const secCol = Configurations.colors.secCol



const MenuCont = styled.View`
height:${props => props.height};

align-items:flex-end;
background-color:red;
`
const IconCell = styled.Pressable`
flex-direction:row;

margin-top:-30px;
justify-content:space-around;
`  

const OptCont = styled.View`
width:250px;
max-height:800px;
height:500px;
position:absolute;
z-index:2000;
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

    const [height, setHeight] = useState('0%')
    const [right, setRight] = useState('-400px')
    const [menu, setMenu] = useState(true)
    const [display, setDisplay] = useState('flex')


       const menuHeight = ()=>
    {
        if(menu)
        {
            // setHeight('90%')
            setRight ('-5%')
            // setDisplay('flex')
        }
        else{
            // setHeight('5%')
            setRight ('-400px')
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
                    <FontAwesomeIcon icon={faEllipsisV} size={30} color="white" /> 
                </IconCell>


                <OptCont 
                    display = {display}
                    right =   {right}>
                    <OptCell>
                        
                        <TextCont>Option1</TextCont>
                    </OptCell>
                    
                    <OptCell>
                        
                        <TextCont>Option1</TextCont>
                    </OptCell>
                    
                    <OptCell>
                        
                        <TextCont>Option1</TextCont>
                    </OptCell>
                
                    <OptCell>
                        
                        <TextCont>Option1</TextCont>
                    </OptCell>
                </OptCont>

        
        </MenuCont>
    )
}
