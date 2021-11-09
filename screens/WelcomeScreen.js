import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import AppHeader from '../comps/AppHeader';
import styled from 'styled-components/native';
import TaskCardArea from '../comps/taskCardArea';
import InputField from '../comps/InputField'
import RecBtn from '../comps/RecBtn';
import { Configurations } from '../PropConfig/Props'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ErrorInfo } from '../comps/ErrorInfo'
import LottieView from 'lottie-react-native';


const LogoWrapper = styled.View`
margin-left:10px;
margin-top:8%;
margin-bottom:8%;
display:flex;
flex-wrap:nowrap;
flex-direction:row;
justify-content:space-between;
width:75%;
height:150px
`
const TaskButtonWrapper = styled.View`
margin:3%
`
const CourseEventCardWrapper = styled.View`
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
top:300px
height:52.5%;
width:100%;
`
const WelcomeScreen = ({ navigation }) => {
  
  

 
    return (
      <View style={styles.container}>
        <LottieView
          ref={(ref) => {
            anim = ref
          }}
          style={{
            width: 350,
            height: 350,
            backgroundColor: '#fff',
          }}
          source={require('../assets/welcome.json')}
          autoPlay={true}
        />
        <Text style={styles.title}><Text style={styles.title1}>Register Successful!</Text>
         <Text style={styles.title2} >Welcome To BuzzyBee </Text>
        </Text>
      </View>
    )
  }



export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width:'70%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
  },
  title1: {
    width:'100%',
    color: Configurations.colors.secCol,
    textAlign:'center',
    fontSize:32,
    fontWeight:'400'
  },
  title2: {
    width:'100%',
    color: Configurations.colors.primCol,
    textAlign:'center',
    fontSize:32,
    fontWeight:'400'
  },
});