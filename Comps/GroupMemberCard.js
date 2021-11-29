import React from 'react'
import { Text, Image, View, Pressable, ActivityIndicator, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/core';
import {GroupsData} from '../data/GroupsData';
import { Members } from '../data/Members';
import Styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const CardCont = Styled.View`
width:90%
padding: 10px;
display:flex;
background-color:${(props) => props.backgroundColor};
flex-direction:row;
border:1px solid #C4C4C4;
border-radius:15px;
margin:10px;
overflow:hidden;
`

const MidCont = Styled.Pressable`
display:flex;
flex-direction:row;
width:75%;
align-items:center;
justify-content:space-evenly;

`;

const TextCont = Styled.View`
display:flex;
flex-direction:column;
justify-content:flex-end;
`;


const IconCont = Styled.Pressable`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:32%;

`

 export const GroupMemberCard = ({
     person= "whatevr"
 })=>
 {
    const navigation = useNavigation();
   
    return(
        <CardCont backgroundColor='#ffffff' style={{ shadowColor: '#000000',
        shadowOpacity: 25,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,}}>
            
                <MidCont onPress={()=>{navigation.navigate('IndividualMemberScreen')}}>  
                    <Image
                    style={{height:80, width:80, borderRadius: 10}} 
                    source={{uri:'https://i.pravatar.cc/300'}}/>    
                    <TextCont>    
                        <Text style={{fontSize:20}}>{person}</Text>
                    </TextCont>       
                </MidCont>
        
                <IconCont style={{borderLeftColor:"black", borderLeftWidth:0.5}} onPress={()=>{navigation.navigate('IndividualMemberScreen')}}>
                <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
                </IconCont>
                
        </CardCont>

    )
 }
