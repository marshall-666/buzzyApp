import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList} from 'react-native';
import AppHeader from '../comps/AppHeader';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar'
import { Task } from '../comps/Task';
import {CourseData} from '../data/CourseData';
import { Configurations } from '../PropConfig/Props';




const Wrapper = styled.View`
display:flex;
height:100%;
width:100%;
flex-direction:column;
justify-content:space-evenly;
`;

const CourseCardWrapper =styled.View`
height:80%;
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
        <View style={{width:'100%', alignItems:'center'}}>
          <Text style={{fontSize:25}}>Your buzzy course information!</Text>
        </View>
        <CourseCardWrapper> 
          <View style={{width:'80%' }}>   
                <FlatList
                contentContainerStyle={{
                  justifyContent:"space-evenly",
                  height:"150%"

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

          </View>
        </CourseCardWrapper>  
            <NavBarCon>
                <NavBar/>
            </NavBarCon>
    </Wrapper>
   

  );
}
export default CourseInfoScreen

