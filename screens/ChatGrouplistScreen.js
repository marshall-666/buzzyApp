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
import { ChatThread } from '../comps/ChatThread';

const lightBg = Configurations.colors.lightBg
const primCol = Configurations.colors.primCol
const ChatGroupListScreen = ({navigation}) => {
    
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


// useEffect(()=>{

//     console.log(dbResult)
// }, [dbResult])

    
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
        
            
                
                    <FlatList 
                        contentContainerStyle={{ maxWidth:'100%', maxHeight:'80%'}}
                        scrollEnabled={true}
                        data={dbResult}
                        renderItem={({item})=> <GroupThread 
                                                        groupName={item.groups.grpName}
                                                        groupMembersNum={item.groups.mem_count}
                                                        // groupImg={item.groups.imageUri}
                                                        onPress={()=>{ navigation.navigate('GroupChat', {name: item.groups.grpName,
                                                         numOfMem: item.groups.mem_count ,
                                                         members: item.groups.members,
                                                         id:item.groups.groupid
                                                        })}}/>}
                        />
                    
                
                   
                <View style=
                {{
                    flexDirection:'row', 
                    justifyContent:'space-around',
                    padding: 10,
                    
                    
                    }}>
                    
                    
                    

                </View>
        <View style={styles.navCont}>

            <NavBar/>
        </View>
        
     </View>
    )
}

export default ChatGroupListScreen

const styles = StyleSheet.create({
    head:
    {
        alignItems:'center',
        justifyContent:'center',
        height:150,
        
    },
    header:
    {
        backgroundColor:primCol,
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