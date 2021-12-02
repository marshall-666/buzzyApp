import React, {useEffect, useState, useContext} from 'react'
import { ScrollView, StyleSheet, Text, View, FlatList, Pressable, Image, SectionList, ImageBackground } from 'react-native'
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
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import { Configurations } from '../PropConfig/Props'
import { useFonts } from "expo-font";



const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:90%;
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

    
    let [fontsLoaded]= useFonts({
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf')
      })
      // state
    
    //Group Information Retrieval Start

    const {groupName , groupId,members,numOfMem} = route.params
    const groupInfo = route.params
    // const SelectGrpId = groupInfo.id
    // const groupid =route.params.id
    const [memsArray, setMemsArray]=useState([])
    const [memsIdObj, setMemsIdObj]=useState({})
    const [memsObj, setMemsObj]=useState({})
    // const [grpName, setGrpName]=useState()
    const [grpMemNum, setGrpMemNum]=useState()
    const [grpMems, setGrpMems]=useState()
    const { user, users } = useContext(AuthenticatedUserContext);
    const [grpTaskArr, setGrpTaskArr] = useState([])
    
    useEffect(()=>{
       
            // setGrpName(groupName)
            setGrpMemNum(numOfMem)   
            
            const loadGroupMembers = async()=>
            {
            
            for(let i=0; i<groupInfo.members.length; i++ ){
        
                memsObj.name=groupInfo.members[i].name
                memsIdObj.id=groupInfo.members[i].id

                if(memsArray.length < groupInfo.members.length)
                {memsArray.push(memsObj.name)}

                console.log(groupInfo)
            }
            
        }
            
        console.log(memsArray)
        loadGroupMembers()
       
      
    },[groupInfo])

    // Task Information retrieval Start
    

    
    const [dbResult, setDbResult] = useState()
    const [isLoading, setIsLoading] = useState(true)

  


    useEffect(()=>{

        
                var loadTaskList = {
                    op: 'get_tasks_ls',
                    user_id: user.uid,
                }

                talktoserver(loadTaskList).then((rd) => {
                    setDbResult(rd)
                })
                // console.log(dbResult)
                const filterGrpTask = async()=>
                {
                    const groupTaskArray = dbResult.filter(function(el)
                      {
                        return el.gp_id == groupId
                      })
                      setGrpTaskArr(groupTaskArray)
                    //   console.log(grpTaskArr)
                }
        filterGrpTask()        // console.log(dbResult)
    },[dbResult])

    return (
        <View style={styles.container}>
            <ImageBackground
              source={require('../assets/images/blueHex.png')}
              style={{height:'100%', width:'100%', position:'absolute', }}
              blurRadius={90}>

            
            <ScrollView style={{flex: 1}} contentContainerStyle={{alignItems:'center'}}>

                <View style={styles.midDiv}>
                    <View style={styles.topDiv}>   
                        <View style={styles.textCont}>
                            <Text style={{fontSize: 30, fontFamily:"Poppins-Medium"}}>{groupName}</Text>
                            <Text style={{fontFamily:"Poppins-Regular"}}>{grpMemNum} Members</Text>
                        </View>    
                            <Image source={require("../assets/BuzzyBeeLogo.png")} />
                    </View>     
                    
                  
                </View>

                
                    <View style={styles.membersView}>
                        
                        <FlatList  
                            contentContainerStyle={{maxWidth:'100%'}}
                            scrollEnabled={true}
                            data={memsArray}
                            renderItem={({item})=> <GroupMemberCard 
                            person={item}
                            ff="Poppins-Regular"
                            />}
                        />
                    
                    
                    </View>
                    
                    <View style={{width: '100%', alignItems: 'center', marginBottom: 40}}>
                        <Text style=
                            {{
                                fontFamily:"Poppins-Medium",
                                fontSize: 24, 
                                padding: 28, 
                                color: '#ffffff', 
                                width: '100%', 
                                textAlign: 'center'
                            }}>
                            {groupName} 
                        </Text>
                        

                        <View style={{flexDirection: 'row'}}>
                            
                            <InGroupButton handleBtnOnPress =  {()=>{navigation.navigate('ScheduleMeeting', {
                                info: MembersData.name,
                                members:members,
                                groupInfo:groupInfo,
                                groupName:groupName ,
                                 groupId:groupId,
                               numOfMem:numOfMem
                                
                            
                            
                            
                            
                            })}} btnText={'MEETING'}
                            ff='Poppins-Medium'
                            icon="clock"/>
                            <InGroupButton 
                                handleBtnOnPress = {()=>{navigation.navigate('ChatGrouplist')}}
                                ff='Poppins-Medium'
                                />
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
                        <FlatList
                        contentContainerStyle={{maxWidth:'100%'}}
                        scrollEnabled={true}
                        data={grpTaskArr}
                        renderItem={({item})=> <IndividualEventCard 
                                                onEditPress={()=>{navigation.navigate('EditTask', item.id)}}
                                                EventTitle={item.title}
                                                EventDescrip={item.summary}
                                                EventStartTime={item.start}
                                                EventEndTime={item.end}
                                                IconDisplay="none"
                                                ff='Poppins-Medium'
                                                fe='Poppins-Regular'
                                                />}
                        />
                    </View>
                                

            </ScrollView>
            </ImageBackground>
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
        width: '90%',
        padding: 30,
        backgroundColor:'rgba(148, 189, 212, 0.5)',
        marginTop:"10%",
        marginBottom:"5%",
        borderRadius:10
        
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
