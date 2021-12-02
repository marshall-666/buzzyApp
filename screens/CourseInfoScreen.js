import React, { useState, useEffect } from 'react';
import { Button, View, Text, FlatList, Image, ImageBackground, Animated, StatusBar, StyleSheet} from 'react-native';
import AppHeader from '../comps/AppHeader';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar'
import { Task } from '../comps/Task';
import {CourseData} from '../data/CourseData';
import { Configurations } from '../PropConfig/Props';
// import Animated from 'react-native-reanimated';
import { scrollParent } from 'dom-helpers';

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
top:92.5%;
height:100%
width:100%
left:5%
`

const SPACING = 20;
const ITEM_SIZE = 80;



const CourseInfoScreen = () => {
 
  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
  
    <Wrapper>
        <ImageBackground   
        source={require('../assets/purpleFlower.jpg')}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
        />
          <Animated.View style={{flex:1}}>   
             
                <Animated.FlatList
                onScroll={Animated.event(
                  [{nativeEvent:{contentOffset:{y :scrollY}}}],
                  {useNativeDriver: true}
                )}
                contentContainerStyle={{ 
                  padding:SPACING,
                  paddingTop: StatusBar.currentHeight || 42
                }}
                data={CourseData}
                renderItem={({item, index})=>{ 
                
                const inputRange = [
                  -1,
                  0,
                  ITEM_SIZE * index,
                  ITEM_SIZE * (index + 2)
                ]
                const opacityInputRange = [
                  -1,
                  0,
                  ITEM_SIZE * index,
                  ITEM_SIZE * (index + 0.5)
                ]

                const scale = scrollY.interpolate({
                  inputRange,
                  outputRange: [1, 1, 1, 0]
                })

                const opacity = scrollY.interpolate({
                  inputRange: opacityInputRange,
                  outputRange: [1, 1, 1, 0]
                })

                

                return <Animated.View style={opacity, {transform:[{scale}]}}>
         
                <Task 
                title={item.course}
                time={item.CourseDay}
                location={item.location}
                instructor={item.prof}
                courseTime={item.time}
                />
                </Animated.View>
                }}
              />
        
       

            <NavBarCon>
                <NavBar/>
            </NavBarCon>
          </Animated.View>

           
    </Wrapper>
   

  );
}
export default CourseInfoScreen

