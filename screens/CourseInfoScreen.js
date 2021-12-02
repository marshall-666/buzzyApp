import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, Image, ImageBackground, Animated, StatusBar, StyleSheet} from 'react-native';
import AppHeader from '../comps/AppHeader';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar'
import { Task } from '../comps/Task';
import {CourseData} from '../data/CourseData';
import { Configurations } from '../PropConfig/Props';
// import Animated from 'react-native-reanimated';


const Wrapper = styled.View`
display:flex;
height:100%;
width:100%;
flex-direction:column;
justify-content:flex-end;
`;

const CourseCardWrapper =styled.View`
height:100%;
align-items:center;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:${Configurations.colors.primCol};
overflow:hidden;
`


const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:90%;
height:100%
width:100%
left:5%
`





const CourseInfoScreen = () => {
 
  return (
  
    <Wrapper>
        <ImageBackground   
        source={require('../assets/images/blueHex.png')}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
        />
          <View style={{flex:1}}>   
             
                <FlatList
                contentContainerStyle={{ 
                  padding:'5%'
                }}
                data={CourseData}
                renderItem={({item, index})=>{ 
                
                return <Task 
                title={item.course}
                time={item.CourseDay}
                location={item.location}
                instructor={item.prof}
                courseTime={item.time}
                />
                }}
              />
            
       

            <NavBarCon>
                <NavBar/>
            </NavBarCon>
          </View>

           
    </Wrapper>
   

  );
}
export default CourseInfoScreen

