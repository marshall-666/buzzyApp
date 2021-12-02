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
justify-content:flex-start;

`;

const TextCont = Styled.View`
display:flex;
flex-direction:column;
justify-content:flex-end;
margin:5%;
`;


const IconCont = Styled.Pressable`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
width:32%;

`

 export const GroupMemberCard = ({
     person= "whatevr",
     ff=''
 })=>
 {
    const navigation = useNavigation();
   
    return(
        <CardCont backgroundColor='#ffffff80' style={{shadowColor: '#000000',
      }}>
            
                <MidCont onPress={()=>{navigation.navigate('IndividualMemberScreen')}}>  
                    <Image
                    style={{height:80, width:80, borderRadius: 10}} 
                    source={{uri:'https://i.pravatar.cc/300'}}/>    
                    <TextCont>    
                        <Text style={{fontSize:20, fontFamily:ff}}>{person}</Text>
                    </TextCont>       
                </MidCont>
        
                <IconCont  onPress={()=>{navigation.navigate('IndividualMemberScreen')}}>
                <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
                </IconCont>
                
        </CardCont>

    )
 }
