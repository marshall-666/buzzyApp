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
border:.5px solid ${Configurations.colors.secCol};
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
justify-content:flex-start
padding:1%;
`;

const TextCont = Styled.View`
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:space-evenly;
width:50%;
`;


const IconCont = Styled.Pressable`

justify-content:center;
align-items:center;

width:32%;
`

 export const GroupThread = ({
    navigation,
    ff="Galvji",
    fe,
    backgroundColor="rgba(61, 90, 128, .8)",
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
                        <Text style={{fontSize:18, color:lightBg, fontFamily:ff}}>{groupName}</Text>
                        <Text style={{color:primCol, fontFamily:ff}}>{groupMembersNum} Members</Text>
                    </TextCont>       
                </MidCont>
        
                <IconCont onPress={onPress}>
                <MaterialIcons name="arrow-forward-ios" size={24} color={lightBg} />
                </IconCont>

      </CardCont>

    )
 }
