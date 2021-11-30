import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, Image, ImageBackground} from 'react-native';
import AppHeader from '../comps/AppHeader';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar'
import { Task } from '../comps/Task';
import {CourseData} from '../data/CourseData';
import { Configurations } from '../PropConfig/Props';



const image = { uri: '' };

const Wrapper = styled.View`
display:flex;
height:100%;
width:100%;
flex-direction:column;
justify-content:space-between;
`;

const CourseCardWrapper =styled.View`
height:85%;
align-items:center;
flex-direction:column;
justify-content:center;
background-color:${Configurations.colors.primCol};
border-top-right-radius: 25px;
border-top-left-radius: 25px;
overflow:hidden;
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
        <View style={{width:'100%', alignItems:'center', height:'30%',justifyContent:'space-evenly'}}>
          <Image style={{width:'50%', height:"50%"}}source={require('../assets/coolBee.png')}/>
          <Text style={{fontSize:25}}>Your buzzy course information!</Text>
        </View>
       
          <CourseCardWrapper>
          <View style={{width:'100%'}}>   
            <ImageBackground style={{width:'100%', top:"-5%"}}source={require('../assets/fileCabinet.jpg')}>   
                <FlatList
                contentContainerStyle={{ 
                  height:"150%",
                  display:"flex",
                }}
                data={CourseData}
                renderItem={({item})=> <Task 
                title={item.course}
                time={item.CourseDay}
                location={item.location}
                instructor={item.prof}
                courseTime={item.time}
                />}
              />
            </ImageBackground>    
       

          </View>
          </CourseCardWrapper>
            <NavBarCon>
                <NavBar/>
            </NavBarCon>
    </Wrapper>
   

  );
}
export default CourseInfoScreen

