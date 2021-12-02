import React, { useEffect, useState,useContext } from 'react'
import { Button, View, Text, StyleSheet, Image, FlatList, Pressable, KeyboardAvoidingView } from 'react-native';
import AppHeader from '../comps/AppHeader';
import TaskBtn from '../comps/taskBtn';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar';
import { GroupThread } from '../comps/GroupThread';
import {GroupsData} from '../data/GroupsData';
import {Configurations} from '../PropConfig/Props'
import { useNavigation } from '@react-navigation/core';
import talktoserver from "../api/talktoserver"
import {Test} from '../data/test'
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';


const lightBg = Configurations.colors.lightBg
const AllGroupsScreen = ({navigation}) => {
    
const [dbResult, setDbResult] = useState()
const [ gName, setGName] = useState()
// const [ grp, setGrpName] = useState()
const [grpArray, setGrpArray]=useState([])
const { user,users } = useContext(AuthenticatedUserContext);
const {grmpNum, setNumGrp} = useState('0')

useEffect(()=>{
    
    var loadGroupList = {
        op: 'get_group_ls',
        user_id: user.uid,
    }
    
    talktoserver(loadGroupList).then((rd) => {
        setDbResult(rd)
        setNumGrp(dbResult.length)
    })
},[])
console.log('=======================')
// console.log(dbResult)
// console.log('------------------------')
// console.log(dbResult.groups[0].group)
console.log('xxxxxxxxxxxxxxxxxxxxxxxxx')


useEffect(()=>{

    console.log(dbResult)
}, [dbResult])

    
// useEffect(()=>
// {
//     const groupInfo = async () =>
//     {
//         setGrpName(dbResult[0].gname)
//     }
// groupInfo()
// },[dbResult])
    return (
        <View style={styles.header}>
        
            <View style={styles.head}>
                <Text style={{fontSize:22}} >
                    You are currently in 
                </Text>
                <Text style={{fontSize:22}} >
                    {grmpNum} Groups  
                </Text>
            </View>
            <View style={styles.lowerDiv}>

                <View style={styles.thread}>   
                    <FlatList 
                        contentContainerStyle={{ maxWidth:'100%', maxHeight:'80%'}}
                        scrollEnabled={true}
                        data={dbResult}
                        renderItem={({item})=> <GroupThread 
                                                        groupName={item.groups.grpName}
                                                        groupMembersNum={item.groups.mem_count}
                                                        // groupImg={item.groups.imageUri}
                                                        onPress={()=>{ navigation.navigate('GroupHome', {groupName: item.groups.grpName,
                                                         numOfMem: item.groups.mem_count ,
                                                         members: item.groups.members,
                                                         groupId:item.groups.groupid
                                                        })}}/>}
                        />
                    
                </View>
                   
                <View style=
                {{
                    flexDirection:'row', 
                    justifyContent:'space-around',
                    padding: 10,
                    
                    
                    }}>
                    {/* <Pressable
                        onPress={()=>{navigation.navigate('JoinGroup')}} 
                        style={styles.joinCreate} >
                            <Text> 
                                Join a Group 
                            </Text>
                    </Pressable> */}
                    
                    <Pressable
                        onPress={()=>{navigation.navigate('CreateGroup')}} 
                        style={styles.joinCreate} >
                            <Text> 
                                Create a Group 
                            </Text>
                    </Pressable>

                </View>
        <View style={styles.navCont}>

            <NavBar/>
        </View>
        </View>
     </View>
    )
}

export default AllGroupsScreen

const styles = StyleSheet.create({
    head:
    {
        alignItems:'center',
        justifyContent:'center',
        height:150,
        
    },
    header:
    {
        backgroundColor:lightBg,
        justifyContent:'space-between',
        height:'100%'
    },
    thread:
    {   
        alignItems:'center',
    },
    lowerDiv: {
        justifyContent:'space-between',
        backgroundColor: Configurations.colors.primCol,
        height:'80%',
            
    },
    joinCreate:
    {        
        margin:5,
        padding:15,
        borderRadius:5,
        backgroundColor:Configurations.colors.butCol
    },
    navCont:
    {
        alignItems:'center',
        marginBottom: 10
    }

})