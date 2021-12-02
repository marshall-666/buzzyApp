import React, { useState } from 'react'
import { Button, View, Text, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';
import NavBar from '../comps/NavBar';
import { Configurations } from '../PropConfig/Props'
import IndividualEventCard from '../comps/IndividualEventCard';
import styled from 'styled-components/native';
import { DateCard } from '../comps/DateCard';
import { CreateGroup } from '../comps/CreateGroup'
import { ScheduleMeetingForm } from '../comps/ScheduleMeetingForm';

const lightBg = Configurations.colors.lightBg


const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92%;
height:100%
width:100%
left:5%
`


const ScheduleMeetingStepThreeScreen = ({ navigation, route,
    meetingTimeAppear = "November 20th",
}) => {
    const { id, meetingSlot, startTime, endTime, mm, dd, Wday } = route.params;
    const [inputTitle, setInputTitle] = useState('')
    const [inputTitle2, setInputTitle2] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
   
   
   
    return (
        <KeyboardAvoidingView  behavior="height"  keyboardVerticalOffset={75} style={styles.container} >
        <View
            style={{
                flex: 1, justifyContent: 'flex-end', alignItems: 'center',
                backgroundColor: lightBg, width: '100%'
            }}>
            <View style={styles.meetingCardCont}>
                <IndividualEventCard IconDisplay="none" EventTitle={inputTitle} EventDescrip={description} EventStartTime={dd + " " + mm} EventDueTime={meetingSlot} />
            </View>

            <View style={styles.mainCont}>

                <View>
                    <Text style={{ textAlign: 'center', fontSize: 30, color: Configurations.colors.secCol }}>Step 2/3</Text>
                    <Text style={{ fontSize: 18, color: Configurations.colors.backCol }}>
                        {/* What Day would you like to meet? */}
                    </Text>

                    <ScheduleMeetingForm
                        inputTitle={inputTitle}
                        setInputTitle={setInputTitle}
                        inputTitle2={inputTitle2}
                        setInputTitle2={setInputTitle2}
                        description={description}
                        setDescription={setDescription}
                        location={location}
                        setLocation={setLocation}
                        // handlePress={()=>{navigation.navigate('ScheduleMeetingStepFour')}}
                        Next={
                            () => {navigation.navigate('MeetingStep4'
                                ,

                            {
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
                            })

                            }
                        }
                        Back={
                            () => { navigation.navigate('ScheduleMeeting') }
                        }
                    />
                </View>


            </View>

            <NavBarCon>
                <NavBar />
            </NavBarCon>

        </View>
        </KeyboardAvoidingView>
    )
}

export default ScheduleMeetingStepThreeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
    mainCont: {
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent:'space-between',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: Configurations.colors.primCol,
        height: '77.5%',
        width: '100%',
        padding: '7.5%',
    },
    meetingCardCont: {
        maxWidth: '100%',
        height: '22.5%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
