import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components/native'

const MenuCont = styled.View`
height:50%;
width:25%;
background-color:blue;
`
const IconCell = styled.Pressable`
width:100%;
`  

const OptCell = styled.Pressable`
width:100%;
`  


export const SubMenu = ()=> {
    return (
        <MenuCont>
            <IconCell> 
                <FontAwesomeIcon icon={faCoffee} size={35} color="white"/> 
            </IconCell>

            <OptCell>
                <FontAwesomeIcon icon={faCoffee} size = {30} color='white'/>
                <Text>Option1</Text>
            </OptCell>
        
        </MenuCont>
    )
}
