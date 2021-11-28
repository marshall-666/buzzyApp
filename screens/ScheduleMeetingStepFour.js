import React from 'react'
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../comps/NavBar';
import {Configurations} from '../PropConfig/Props'
import IndividualEventCard from '../comps/IndividualEventCard';
import {DateCard} from '../comps/DateCard';
import { Available } from '../comps/Available';
import styled from 'styled-components/native';
import RecBtn from '../comps/RecBtn';

const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92.5%;
height:100%
width:100%
left:5%
`

const lightBg = Configurations.colors.lightBg

const ScheduleMeetingStepFourScreen = ({navigation,
meetingTimeAppear="November 20th",
date="November 20th"
}) => {
    return (
        <View style={{flex:1, justifyContent:'flex-end',
        backgroundColor:lightBg,}}>

            <View style={styles.meetingCardCont}>
                <IndividualEventCard IconDisplay="none" EventTitle="Meeting name" EventDescrip="meeting description" EventStartTime="" EventDueTime={meetingTimeAppear}/>
            </View>

            <View style={styles.mainCont}>
                <Text style={{fontSize:30, color:Configurations.colors.secCol}}>Step 4/5</Text>
                <Text style={{fontSize:18, color:Configurations.colors.backCol}}>
                    Where would you like to Meet?
                </Text>
               <Text>Map API</Text>   
               <Text style={{fontSize:18, color:Configurations.colors.backCol}}>Meeting Online?</Text> 
               <Text>Zoom link generator here</Text> 
            <RecBtn text="create" width="140" height="50" onRecBtnPress={()=>{navigation.navigate('ScheduleMeetingS4')}}/>
            </View>
            <NavBarCon>    
                <NavBar/>
            </NavBarCon>
        </View>
    )
}

export default ScheduleMeetingStepFourScreen

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
