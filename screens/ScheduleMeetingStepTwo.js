import React from 'react'
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../comps/NavBar';
import {Configurations} from '../PropConfig/Props'
import IndividualEventCard from '../comps/IndividualEventCard';
import {DateCard} from '../comps/DateCard';
import { Available } from '../comps/Available';
import styled from 'styled-components/native';

const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92.5%;
height:100%
width:100%
left:5%
`

const lightBg = Configurations.colors.lightBg

const ScheduleMeetingStepTwoScreen = ({navigation,
meetingTimeAppear="November 20th",
date="November 20th",
route
}) => {
    
    
    const MeetingTime =  route.params
    console.log(MeetingTime)


    return (
        <View style={{flex:1, justifyContent:'flex-end',
        backgroundColor:lightBg,}}>

            <View style={styles.meetingCardCont}>
                <IndividualEventCard IconDisplay="none" EventTitle="Meeting name" EventDescrip="meeting description" EventStartTime="" EventDueTime={meetingTimeAppear}/>
            </View>

            <View style={styles.mainCont}>
                <Text style={{fontSize:30, color:Configurations.colors.secCol}}>Step 2/5</Text>
                <Text style={{fontSize:18, color:Configurations.colors.backCol}}>
                    Available Times for {date}
                </Text>
                <Available onSlotPress=  {()=>{navigation.navigate('ScheduleMeetingStepThree')}}/>    
                    
                <View>
           
                </View>

            
            </View>
  
            <NavBarCon>    
                <NavBar/>
            </NavBarCon>
        </View>
    )
}

export default ScheduleMeetingStepTwoScreen

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
