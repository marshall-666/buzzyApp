import React, { useState, useEffect } from 'react';
import { Button, View, Text,ScrollView } from 'react-native';
import AppHeader from '../comps/AppHeader';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar'
import { Task } from '../comps/Task';

const Wrapper = styled.View`
display:flex;
height:100%;
width:100%;
flex-direction:column
justify-content:space-between;
`;




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
  
    <Wrapper>
    <AppHeader text="Account" />           
            <NavBarCon>
                <NavBar/>
            </NavBarCon>
      
    </Wrapper>
   

  );
}


export default CourseInfoScreen