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


const CourseCardWrapper =styled.View`
height:80%;
width:100%;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#35579F;
border-top-right-radius: 25px;
border-top-left-radius: 25px;
flex:0.9;
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
  
    <Wrapper>

        <CourseCardWrapper> 
            <ScrollView  
              style=
              {{
                width:'100%', height:'100%'
              }} 
              contentContainerStyle=
                {{
                  width:'100%', 
                  height:'150%', 
                  display:'flex', 
                  justifyContent:'space-evenly', 
                  alignItems:'center', 
                  background:'green',
                
                }}>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            <Task/>
            </ScrollView>
            <NavBarCon>
                <NavBar/>
            </NavBarCon>
        </CourseCardWrapper>  
    </Wrapper>
   

  );
}


export default CourseInfoScreen