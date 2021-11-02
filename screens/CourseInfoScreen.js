import React, { useState, useEffect } from 'react';
import { Button, View, Text,ScrollView } from 'react-native';
import AppHeader from '../comps/AppHeader';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar'
import { Task } from '@/comps/Task';



const Wrapper =styled.ScrollView`
height:100;
`


const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92.5%;
height:100%
width:100%
left:5%
`


const CourseInfoScreen = () => {
 
  
  return (
  
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <AppHeader text="Task" />

      <Wrapper> 
     <Task></Task>
       
    </Wrapper>
       <NavBarCon>
          <NavBar />

          </NavBarCon>
    </View>
   

  );
}


export default CourseInfoScreen