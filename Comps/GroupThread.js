import React from 'react'
import { Text, Image, View, Pressable, ActivityIndicator, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/core';
import {GroupsData} from '../data/GroupsData';
import { Members } from '../data/Members';
import Styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Configurations } from '../PropConfig/Props';

const primCol = Configurations.colors.primCol
const lightBg = Configurations.colors.lightBg

const CardCont = Styled.View`
width:90%;
display:flex;
background-color:${(props) => props.backgroundColor};
flex-direction:row;
border:1px solid #C4C4C4;
border-radius:15px;
margin:10px;
overflow:hidden;
`
const EventColour = Styled.View`
width:4%;
background-color:${(props) => props.EventBackgroundColor};
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
align-items:flex-start;
justify-content:space-evenly;
width:50%;
`;


const IconCont = Styled.Pressable`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:32%;
`

 export const GroupThread = ({
    navigation,
    backgroundColor="#3D5A8080",
    EventBackgroundColor="#D63030",
    groupName="Web Dev Group",
    groupMembersNum=4,
    groupImg="https://i.pravatar.cc/300",
    onPress = ()=>{
       
    }


 })=>
 {

  
    
  
     
    //  console.warn(GroupsData.groups.name)
    return(
        <CardCont backgroundColor={backgroundColor}>
            

                <MidCont onPress={onPress}>  
                    <Image
                    style={{height:80, width:80, borderRadius: 15, margin:5}} 
                    source={{uri:groupImg}}/>    
                    <TextCont style={{alignItems:'flex-start'}}>    
                        <Text style={{fontSize:18, color:'white'}}>{groupName}</Text>
                        <Text style={{color:primCol}}>{groupMembersNum} Members</Text>
                    </TextCont>       
                </MidCont>
        
                <IconCont onPress={onPress}>
                <MaterialIcons name="arrow-forward-ios" size={24} color={lightBg} />
                </IconCont>

      </CardCont>

    )
 }
