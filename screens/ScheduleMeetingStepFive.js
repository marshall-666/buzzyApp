import React , { useState, useContext}from 'react'
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '../comps/NavBar';
import {Configurations} from '../PropConfig/Props'
import IndividualEventCard from '../comps/IndividualEventCard';
import {DateCard} from '../comps/DateCard';
import { Available } from '../comps/Available';
import styled from 'styled-components/native';
import RecBtn from '../comps/RecBtn';
import LottieView from 'lottie-react-native';
import talktoserver from "../api/talktoserver"
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';

const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92%;
height:100%
width:100%
left:5%
`

const lightBg = Configurations.colors.lightBg
const butCol = Configurations.colors.butCol

const ScheduleMeetingStepFiveScreen = ({navigation,route,
// meetingTimeAppear="November 20th",
// date="November 20th"
}) => {
    const { meetingSlot, Wday, mm, dd,inputTitle,description, startTime, endTime,location,id} = route.params;
    const { user, users } = useContext(AuthenticatedUserContext);
   
    let NewstartTime = startTime.toISOString().slice(0, 10)+ " " + startTime.toISOString().slice(11, -1)
    let NewendTime = endTime.toISOString().slice(0, 10)+ " " + endTime.toISOString().slice(11, -1)
   

  const [dbResult, setDbResult] = useState()

    const DonePress=()=>{

      

        var createTask = {
            op: 'create_task',
            tkname: inputTitle,
            descrip: description,
            category_id: '1',
            start_t: NewstartTime,
            end_t: NewendTime,
            loca: location,
            group_id: '1',
            user_id: user.uid,
        }
       
        console.log(createTask)
        
         talktoserver(createTask).then((rd) => {
            setDbResult(rd) 
           
            console.log(dbResult)
        })

        navigation.navigate('Dashboard')
    }
    return (
        <View style={{flex:1, justifyContent:'center', alignItems: 'center',
        backgroundColor:lightBg,}}>

            <View style={styles.meetingCardCont}>
                <IndividualEventCard IconDisplay="none" EventTitle={inputTitle} EventDescrip={description} EventStartTime={dd+" "+mm} EventDueTime={meetingSlot}/>
            </View>

            <View style={styles.mainCont}>
    <Text style={{textAlign:'center',fontSize: 28, color: Configurations.colors.secCol }}>Step 3/3</Text>
 
        <View style={styles.container}>
          <LottieView
            ref={(ref) => {
              anim = ref
            }}
            style={{
              width: 225,
              height: 225,
              marginTop:'5%'
            }}
            source={require('../assets/online-meetings.json')}
            autoPlay={true}
          />
        </View>
    
                <Text style={{fontSize:30, color:Configurations.colors.secCol,margin:'10%', width:'100%', textAlign:'center'}}>Meeting Set Up!</Text>

                <View style={{display:'flex', flexDirection:'row', }}>
            
            <RecBtn text="Back" width="140" height="50" bgC={butCol} onRecBtnPress={
                ()=>{navigation.navigate('MeetingStep2'
            ,{
               
                id: id,
                meetingSlot: meetingSlot,
                startTime: startTime,
                endTime: endTime,
                mm: mm,
                dd: dd,
                Wday: Wday,
                description: description,
                inputTitle: inputTitle,
                location:location
            }
            
            )}}/>
            <RecBtn text="Done" width="140" height="50" onRecBtnPress={DonePress} bgC={butCol}/>
              </View>
            </View>
            <NavBarCon>    
                <NavBar/>
            </NavBarCon>
        </View>
    )
}

export default ScheduleMeetingStepFiveScreen

const styles = StyleSheet.create({
    mainCont: {
        width: '100%',
        flexDirection:'column',
        alignItems:'center',
        // justifyContent:'space-evenly',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: Configurations.colors.primCol,
        height:'77.5%',
        width: '100%',
        padding:'7.5%'

    },
    dateCardR1:{
        flexDirection:'row'
    },
    meetingCardCont:{
        maxWidth:'100%',
        height:'22.5%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
