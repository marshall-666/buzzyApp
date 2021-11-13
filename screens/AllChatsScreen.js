import React, { useState, useEffect, } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Button, View, Text, StyleSheet, Image, FlatList, Pressable, KeyboardAvoidingView } from 'react-native';
import AppHeader from '../comps/AppHeader';
import TaskBtn from '../comps/taskBtn';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar';
import { ChatThread } from '../comps/ChatThread';
import chatRoom from '../assets/dummy-data/ChatRoom'







const AllChats = ({ navigation }) => {


  return (
    <View
    
        style=
        {{ 
            flex: 1, 
            alignItems: 'center', 
            justifyContent: 'flex-start' 
            
        }}>
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
       
    
     <NavBar/>
    </View>
  );
}


export default AllChats;