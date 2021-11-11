import React, { useState, useEffect, } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Button, View, Text, StyleSheet, Image, FlatList, Pressable, KeyboardAvoidingView } from 'react-native';
import AppHeader from '../comps/AppHeader';
import TaskBtn from '../comps/taskBtn';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar';
import { ChatThread } from '../comps/ChatThread';
import chatRoom from '../assets/dummy-data/ChatRoom'




const TaskButtonsWrapper = styled.View`
margin-left:10px;
margin-top:4%;
margin-bottom:4%;
display:flex;
flex-wrap:nowrap;
flex-direction:row;
justify-content:space-between;
width:75%;
`
const TaskButtonWrapper = styled.View`
margin:3%
`
const CourseEventCardWrapper =styled.View`
height:100%;

`
const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92.5%;
height:100%
width:100%
left:5%
`

const TaskCardsWrapper = styled.ScrollView`
position:absolute;
z-index:2;
top:280px
height:52.5%;
width:100%;
`



const AllChats = ({ navigation }) => {


  return (
    <View
    
        style=
        {{ 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'flex-start' 
            
        }}>
      <AppHeader text="Task" />
      <Text> Hello this is Screen one </Text>
    
    
    <Button 
        style=
        {{
            backgroundColor: 'red',
            width: 100,
            height: 55
    
        }}
     title="TAB ONE" 
     onPress={()=>{navigation.navigate('AllChats')}}/>
    
    <Button 
        style=
        {{
            backgroundColor: 'red',
            width: 100,
            height: 55

        }}
     title="chats"
     onPress={()=>{navigation.navigate('SingleChatThread')}}/>

    <View style={{flex:1}}>
          
        <FlatList  
        data={chatRoom}
        renderItem={({item})=><ChatThread chatRoom={item}/>}/>
        
     </View>
       
    
     
    </View>
  );
}


export default AllChats;