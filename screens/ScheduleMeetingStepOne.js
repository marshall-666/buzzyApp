import React from 'react'
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../comps/NavBar';
import styled from 'styled-components/native';
import {Configurations} from '../PropConfig/Props'
import IndividualEventCard from '../comps/IndividualEventCard';
import {DateCard} from '../comps/DateCard';

const lightBg = Configurations.colors.lightBg

const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92.5%;
height:100%
width:100%
left:5%
`


const ScheduleMeetingStepOneScreen = ({navigation}) => {
    return (
        <View style={{flex:1, justifyContent:'flex-end', alignItems:'center',
        backgroundColor:lightBg,}}>

            <View style={styles.meetingCardCont}>
                <IndividualEventCard IconDisplay="none" EventTitle="Meeting name" EventDescrip="meeting description" EventStartTime="" EventDueTime=""/>
            </View>

            <View style={styles.mainCont}>
                <Text style={{fontSize:30, color:Configurations.colors.secCol}}>Step 1/5</Text>
                
                    <Text style={{fontSize:18, color:Configurations.colors.backCol}}>
                    What Day would you like to meet?
                    </Text>

                    <View style={styles.dateCardR1}>
                        <DateCard onCardPress=  {()=>{navigation.navigate('ScheduleMeetingStepTwo')}}/>
                        <DateCard  onCardPress=  {()=>{navigation.navigate('ScheduleMeetingStepTwo')}}/>
                    </View>
                   
                    <View style={styles.dateCardR1}>
                        <DateCard  onCardPress=  {()=>{navigation.navigate('ScheduleMeetingStepTwo')}}/>
                        <DateCard  onCardPress=  {()=>{navigation.navigate('ScheduleMeetingStepTwo')}}/>
                    </View>
                <View>
           
                </View>

        
            </View>
            
            <NavBarCon>
                <NavBar/>
            </NavBarCon>
  
        </View>
    )
}

export default ScheduleMeetingStepOneScreen

const styles = StyleSheet.create({
    mainCont: {
        width: '100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: Configurations.colors.primCol,
        height:'80%',
        padding:'5%'
    },
    dateCardR1:{
        flexDirection:'row'
    },
    meetingCardCont:{
        width:'100%',
        height:'30%',
        justifyContent:'flex-end',
        alignItems:'center'
    }
})
