import React from 'react'
import { View, Text, TextInput,Pressable } from 'react-native'
import styled from 'styled-components/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { Configurations } from '../PropConfig/Props'

const primCol = Configurations.colors.primCol

const CardCont = styled.View`
background-color:${primCol};
height:400px;
width100%;
`

const ButPress = styled.Pressable``

const HeadTxt = styled.Text``

export const  FuncName = ()=> {
    return (
        <CardCont>
            <HeadTxt>
                Hey this 
            </HeadTxt>

        </CardCont>
    )
}
