import React from 'react'
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../comps/NavBar';
import {Configurations} from '../PropConfig/Props'
import IndividualEventCard from '../comps/IndividualEventCard';
import styled from 'styled-components/native';
import {DateCard} from '../comps/DateCard';
import {CreateGroup} from '../comps/CreateGroup'
import { ScheduleMeetingForm } from '../comps/ScheduleMeetingForm';

const lightBg = Configurations.colors.lightBg


const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92.5%;
height:100%
width:100%
left:5%
`


const ScheduleMeetingStepThreeScreen = ({navigation,
meetingTimeAppear="November 20th",
}) => {
    return (
        <View style={{flex:1, justifyContent:'flex-end', alignItems:'center',
        backgroundColor:lightBg,}}>

            <View style={styles.meetingCardCont}>
                <IndividualEventCard IconDisplay="none" EventTitle="Meeting name" EventDescrip="meeting description" EventStartTime="" EventDueTime={meetingTimeAppear}/>
            </View>

            <View style={styles.mainCont}>
                <Text style={{fontSize:30, color:Configurations.colors.secCol}}>Step 3/5</Text>
                <Text style={{fontSize:18, color:Configurations.colors.backCol}}>
                    What Day would you like to meet?
                </Text>

                <ScheduleMeetingForm handlePress={()=>{navigation.navigate('ScheduleMeetingS3')}}/> 
                    
                <View>
           
                </View>

            </View>
            
            <NavBarCon>
                <NavBar/>
            </NavBarCon>
  
        </View>
    )
}

export default ScheduleMeetingStepThreeScreen

const styles = StyleSheet.create({
    mainCont: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-evenly',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: Configurations.colors.primCol,
        height:'80%',
        width:'100%',
        padding:'5%',
    },
    meetingCardCont:{
        width:'100%',
        height:'30%',
        justifyContent:'flex-end',
        alignItems:'center'
    }
})
