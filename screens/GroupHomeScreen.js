import React from 'react'
import { ScrollView, StyleSheet, Text, View,FlatList, Pressable, Image } from 'react-native'
import NavBar from '../comps/NavBar'
import MembersInGroupCard from '../comps/MembersInGroupCard'
import { GroupMemberCard } from '../comps/GroupMemberCard'
import InGroupButton from '../comps/InGroupButton'
import GroupEventCard from '../comps/CourseEventCard'
import { MembersData } from '../data/MembersData'
import styled from 'styled-components/native'



const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92.5%;
height:100%
width:100%
left:5%
`

const GroupHomeScreen = ({
    onSchedulePress=()=>{},
    navigation,
    groupName='Default Group',
    memberNum=5,
    route,
}) => {

    // information coming in from the GroupThread Component.
    // GroupsData.id and GroupsData.members
    console.warn(route.params)
    const memberInfo = route.params
    const handleBtnOnPress =()=> {
        navigation.navigate('ScheduleMeetingStepOne')
    }
   

    return (
        <View style={styles.container}>
            <ScrollView style={{flex: 1}}>

                <View style={styles.midDiv}>
                    
                    <View style={styles.topDiv}>   
                        <View style={styles.textCont}>
                            <Text style={{fontSize: 30}}>{groupName}</Text>
                            <Text>{memberNum} Members</Text>
                        </View>    
                            <Image source={require("../assets/BuzzyBeeLogo.png")} />
                    </View>     
                    
                    <Pressable onPress={onSchedulePress}>
                        <View>
                            <Text>Schedule Meeting</Text>
                        </View>
                    </Pressable>
                </View>

                <View style={styles.lowerDiv}>
                    
                    <View style={styles.membersView}>
                        
                        <FlatList  
                    style={{}}
                    data={MembersData}
                    renderItem={({item})=><GroupMemberCard MembersData={item}/>}
                    />
                        
                        
                    </View>
                    
                    <View style={{width: '100%', alignItems: 'center', marginBottom: 40}}>
                        <Text style=
                            {{
                                fontSize: 24, 
                                padding: 28, 
                                color: '#ffffff', 
                                width: '100%', 
                                textAlign: 'center'
                            }}>
                            {groupName}
                        </Text>
                        

                        <View style={{flexDirection: 'row'}}>
                            
                            <InGroupButton handleBtnOnPress =  {()=>{navigation.navigate('ScheduleMeetingStepOne')}} btnText={'MEETING'} icon="clock"/>
                            <InGroupButton 
                                handleBtnOnPress = {()=>{navigation.navigate('SingleChatThread')}}/>
                        </View>
                            
                    
                    </View>
                        
                    <View style={{width: '100%', paddingBottom: 150}}>
                        <Text style=
                            {{
                                fontSize: 20, 
                                padding: 28, 
                                color: '#ffffff', 
                                width: '100%', 
                                textAlign: 'center'
                            }}> 
                                Upcoming Events for {groupName}
                        </Text>
                        <GroupEventCard borderTopRightRadius={15}/>
                        <GroupEventCard/>
                        <GroupEventCard borderBottomRightRadius={15}/>
                    </View>
                                

                </View>
            </ScrollView>
            <NavBarCon>
                <NavBar/>
            </NavBarCon>
        </View>
    )
}

export default GroupHomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
    },

    topDiv: {
    flexDirection:'row'
    },

    textCont:{
        flexDirection:'column'
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
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        marginBottom: 40,
    }
})
