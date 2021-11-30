import React, {useEffect, useState} from 'react'
import { ScrollView, StyleSheet, Text, View, FlatList, Pressable, Image, SectionList } from 'react-native'
import NavBar from '../comps/NavBar'
import MembersInGroupCard from '../comps/MembersInGroupCard'
import { GroupMemberCard } from '../comps/GroupMemberCard'
import InGroupButton from '../comps/InGroupButton'
import GroupEventCard from '../comps/CourseEventCard'
import { MembersData } from '../data/MembersData'
import { Members } from '../data/Members'
import styled from 'styled-components/native'
import talktoserver from "../api/talktoserver"
import IndividualEventCard from '../comps/IndividualEventCard';


const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92%;
height:100%
width:100%
left:5%
`

const GroupHomeScreen = ({
    onSchedulePress=()=>{},
    navigation,
    memberNum=5,
    route,
}) => {

    
    
    //Group Information Retrieval Start

    const groupInfo = route.params
    const groupid =route.params.id
    const [memsArray, setMemsArray]=useState([])
    const [memsIdObj, setMemsIdObj]=useState({})
    const [memsObj, setMemsObj]=useState({})
    const [grpName, setGrpName]=useState()
    const [grpMemNum, setGrpMemNum]=useState()
    const [grpMems, setGrpMems]=useState()

    useEffect(()=>{
       
            setGrpName(groupInfo.name)
            setGrpMemNum(groupInfo.numOfMem)   
            
            const loadGroupMembers = async()=>
            {
            
            for(let i=0; i<groupInfo.members.length; i++ ){
        
                memsObj.name=groupInfo.members[i].name
                memsIdObj.id=groupInfo.members[i].id
                memsArray.push(memsObj.name)
            }
            console.log(memsIdObj)
        }
            
        loadGroupMembers()
       
      
    },[groupInfo])


    // Task Information retrieval Start
    
    const [dbTaskResult, setDbTaskResult] = useState()
    




    useEffect(()=>{
        var loadTaskDetail = {
            op: 'get_task_detail',
            tk_id:groupid, 
            }
        
        talktoserver(loadTaskDetail).then((rd) => {
            setDbTaskResult(rd)
          

        })
    },[])

    useEffect(()=>{
      

        
    },[dbTaskResult])




    return (
        <View style={styles.container}>
            <ScrollView style={{flex: 1}}>

                <View style={styles.midDiv}>
                    
                    <View style={styles.topDiv}>   
                        <View style={styles.textCont}>
                            <Text style={{fontSize: 30}}>{grpName}</Text>
                            <Text>{grpMemNum} Members</Text>
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
                            contentContainerStyle={{maxWidth:'100%'}}
                            scrollEnabled={true}
                            data={memsArray}
                            renderItem={({item})=> <GroupMemberCard 
                            person={item}
                            />}
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
                            {grpName}
                        </Text>
                        

                        <View style={{flexDirection: 'row'}}>
                            
                            <InGroupButton handleBtnOnPress =  {()=>{navigation.navigate('ScheduleMeeting', {info: MembersData.name})}} btnText={'MEETING'} icon="clock"/>
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
                                Upcoming Events for {grpName}
                        </Text>
                        <FlatList
                        contentContainerStyle={{maxWidth:'100%'}}
                        scrollEnabled={true}
                        data={dbTaskResult}
                        renderItem={({item})=> <IndividualEventCard 
                                                EventTitle={item.tname}
                                                EventDescrip={item.tdes}
                                                EventStartTime={item.start_t}
                                                EventEndTime={item.end_t}
                                                IconDisplay="none"
                                                />}
                        />
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
        alignItems:'center',
        justifyContent:'center'
    },

    topDiv: {
    flexDirection:'row',
    justifyContent:"space-between"
    },

    textCont:{
        flexDirection:'column'
    },
    
    midDiv: {
        width: '100%',
        padding: 30,
        
    },
    
    lowerDiv: {
        width: '100%',
        height:'100%',
        paddingTop: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#94BDD4',
    },
    membersView: {
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        marginBottom: 40,
    }
})
