import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import AppHeader from '../comps/AppHeader'
import NavBar from '../comps/NavBar'
import MembersInGroupCard from '../comps/MembersInGroupCard'
import InGroupButton from '../comps/InGroupButton'
import GroupEventCard from '../comps/CourseEventCard'

const GroupHomeScreen = ({
    navigation,
    groupName='Default Group',
    memberNum=5
}) => {

    const handleBtnOnPress =()=> {
        alert('Pressed')
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{flex: 1}}>
                <AppHeader text='Groups'/>
                <View style={styles.midDiv}>
                    <Text style={{fontSize: 30}}>{groupName}</Text>
                </View>
                <View style={styles.lowerDiv}>
                    <View style={styles.membersView}>
                        <Text style={{fontSize: 24, padding: 28, color: '#ffffff'}}>Members - {memberNum}</Text>
                        <MembersInGroupCard/>
                        <MembersInGroupCard/>
                        <MembersInGroupCard/>
                        <MembersInGroupCard/>
                        <MembersInGroupCard/>
                        <MembersInGroupCard/>
                    </View>
                    <View style={{width: '100%', alignItems: 'center', marginBottom: 40}}>
                        <Text style={{fontSize: 24, padding: 28, color: '#ffffff', width: '100%', textAlign: 'center'}}>{groupName}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <InGroupButton handleBtnOnPress = {handleBtnOnPress}/>
                            <InGroupButton handleBtnOnPress = {handleBtnOnPress}/>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <InGroupButton handleBtnOnPress = {handleBtnOnPress}/>
                            <InGroupButton handleBtnOnPress = {handleBtnOnPress}/>
                        </View>
                    </View>
                    <View style={{width: '100%', paddingBottom: 150}}>
                        <Text style={{fontSize: 20, padding: 28, color: '#ffffff', width: '100%', textAlign: 'center'}}>Upcoming Events for {groupName}</Text>
                        <GroupEventCard/>
                        <GroupEventCard/>
                        <GroupEventCard/>
                    </View>
                </View>
            </ScrollView>
            <NavBar/>
        </View>
    )
}

export default GroupHomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    midDiv: {
        width: '100%',
        height: 100,
        padding: 30,
    },
    lowerDiv: {
        width: '100%',
        paddingTop: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#94BDD4',
    },
    membersView: {
        width: '100%',
        marginBottom: 40,
    }
})
