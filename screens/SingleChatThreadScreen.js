import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/core';
import AppHeader from '../comps/AppHeader';
import TaskBtn from '../comps/taskBtn';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar';
import { Message } from '../comps/Message';
import ChatRoom from '../assets/dummy-data/Chat'
import {ChatBar} from '../comps/ChatBar'



console.log(ChatRoom.messgaes)
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



const SingleChatThread = ({ navigation }) => {
const route = useRoute();
console.warn("Displaying person number", route.params?.id)

  return (
    <SafeAreaView 
        style=
        {{ 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'flex-start' 
            
        }}>
     
    
        <Text> Hello Screen 2 </Text>
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
     title="Single Thread"
     onPress={()=>{navigation.navigate('SingleChatThread')}}/>

        <FlatList 
          data={ChatRoom.messages}
          renderItem={({item})=> <Message message={item}
          />}
          inverted
          />
      <ChatBar/>
     {/* <Message message={ChatRoom.messages[0]}/> */}
    </SafeAreaView>
  );
}


export default SingleChatThread;