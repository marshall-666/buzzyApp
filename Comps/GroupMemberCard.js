import React from 'react'
import { Text, Image, View, Pressable, ActivityIndicator, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from '@react-navigation/core';
import {GroupsData} from '../data/GroupsData';
import { Members } from '../data/Members';
import Styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const CardCont = Styled.View`
width:90%;
height:40%;
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
height:80%;
flex-direction:column;
justify-content:flex-end;
`;


const IconCont = Styled.Pressable`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:32%;
height:100%;
`

 export const GroupMemberCard = ({
     
 })=>
 {
    const navigation = useNavigation();
    const onPress=()=>{
        Alert.alert("navigate to individual members page when created")
    },
    backgroundColor="#FFFFFF",
    EventBackgroundColor="#D63030",
    memberName="Jody Prinsloo"
   
    return(
        <CardCont backgroundColor={backgroundColor}>

                <MidCont onPress={onPress}>  
                    <Image
                    style={{height:80, width:80, borderRadius: 10}} 
                    source={{uri:'https://i.pravatar.cc/300'}}/>    
                    <TextCont>    
                        <Text style={{fontSize:20}}>{memberName}</Text>
                    </TextCont>       
                </MidCont>
        
                <IconCont style={{borderLeftColor:"black", borderLeftWidth:"0.5px"}} onPress={onPress}>
                <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
                </IconCont>
                
        </CardCont>

    )
 }
