import React from 'react'
import { Text, Image, View, Pressable, ActivityIndicator, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/core';
import {GroupsData} from '../data/GroupsData';
import { Members } from '../data/Members';
import Styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const CardCont = Styled.View`
width:90%;
height:120px;
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
height:100%;
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
height:60%;
flex-direction:column;
align-items:flex-start;
justify-content:space-evenly;
`;


const IconCont = Styled.Pressable`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:32%;
height:100%;
`

 export const GroupThread = ({GroupsData})=>
 {

    const navigation = useNavigation();
    const onPress = ()=>{
        navigation.navigate('GroupHome', {id: GroupsData.id, name: GroupsData.members})
    },
    backgroundColor="#FFFFFF",
    EventBackgroundColor="#D63030",
    groupName="Web Dev Group",
    groupMembersNum="4 members"
  
     const group = GroupsData.groups;
    //  console.warn(GroupsData.groups.name)
    return(
        <CardCont backgroundColor={backgroundColor}>
            <EventColour EventBackgroundColor={EventBackgroundColor}></EventColour>

                <MidCont onPress={onPress}>  
                    <Image
                    style={{height:80, width:80, borderRadius: 100}} 
                    source={{uri:group.imageUri}}/>    
                    <TextCont>    
                        <Text style={{fontSize:18}}>{groupName}</Text>
                        <Text>{groupMembersNum}</Text>
                    </TextCont>       
                </MidCont>
        
                <IconCont style={{borderLeftColor:"black", borderLeftWidth:0.5}} onPress={onPress}>
                <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
                </IconCont>

      </CardCont>

    )
 }
