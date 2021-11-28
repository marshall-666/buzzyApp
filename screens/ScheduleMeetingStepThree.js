import React,{useState} from 'react'
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


const ScheduleMeetingStepThreeScreen = ({navigation,route,
meetingTimeAppear="November 20th",
}) => {
    const { id, meetingSlot,startTime,endTime, mm, dd, Wday} = route.params;
    const [inputTitle,setInputTitle]=useState('')
    const [inputTitle2,setInputTitle2]=useState('')
    const [description,setDescription]=useState('')
    
    return (
        <View style={{flex:1, justifyContent:'flex-end', alignItems:'center',
        backgroundColor:lightBg,}}>

            <View style={styles.meetingCardCont}>
                <IndividualEventCard IconDisplay="none" EventTitle={inputTitle} EventDescrip={description} EventStartTime="" EventDueTime={JSON.stringify(meetingSlot)}/>
            </View>

            <View style={styles.mainCont}>
                <Text style={{fontSize:30, color:Configurations.colors.secCol}}>Step 2/4</Text>
                <Text style={{fontSize:18, color:Configurations.colors.backCol}}>
                    {/* What Day would you like to meet? */}
                </Text>

                <ScheduleMeetingForm 
                inputTitle={inputTitle}
                setInputTitle={setInputTitle}
                inputTitle2={inputTitle2}
                setInputTitle2={setInputTitle2}
                description={description}
                setDescription={setDescription}
                
                // handlePress={()=>{navigation.navigate('ScheduleMeetingStepFour')}}
                Next={
                    ()=>{setDescription(), setInputTitle()}


                }
                
                
                /> 
                    
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
        justifyContent:'space-between',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: Configurations.colors.primCol,
        height:'77.5%',
        width:'100%',
        padding:'5%',
    },
    meetingCardCont:{
        width:'100%',
        height:'22.5%',
        justifyContent:'center',
        alignItems:'center'
    }
})
