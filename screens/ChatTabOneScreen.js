import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import AppHeader from '../comps/AppHeader';
import TaskBtn from '../comps/taskBtn';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar';




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



const ChatTabOne = ({ navigation }) => {


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
     onPress={()=>{navigation.navigate('ChatTabOne')}}/>
    
    <Button 
        style=
        {{
            backgroundColor: 'red',
            width: 100,
            height: 55

        }}
     title="TAB TWO"
     onPress={()=>{navigation.navigate('ChatTabTwo')}}/>

      
    </View>
  );
}


export default ChatTabOne