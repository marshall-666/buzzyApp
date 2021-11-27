import React, {useEffect, useState} from 'react'
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


const lightBg = Configurations.colors.lightBg
const AllGroupsScreen = ({navigation}) => {


const [dbResult, setDbResult] = useState()
const [numOfGroups, setNumOfGroups] = useState()
const [gname, setGname] = useState()
const [memCount, setMemCount] = useState()
useEffect(()=>{
var loadGroupList = {
    op: 'get_group_ls',
    user_id: '',
}

talktoserver(loadGroupList).then((rd) => {
    setDbResult(rd)
    console.log(dbResult[1].mem_count)
    console.log("/////////////////////////////////")
})
},[]) 

useEffect(()=>{
        
    const updateGroupList = async () =>
    {
        setGname(dbResult[1].group.gname)
        setNumOfGroups(dbResult[0].group_count)
        setMemCount(dbResult[1].mem_count)
    }
    
updateGroupList()

},[dbResult])





    return (
        <View style={styles.header}>
        
            <View style={styles.head}>
                <Text style={{fontSize:22}} >
                    You are currently in
                </Text>
                <Text style={{fontSize:22}} >
                    {numOfGroups} Group(s)
                </Text>
            </View>
            <View style={styles.lowerDiv}>

                <View style={styles.thread}>   
                    <FlatList 
                        contentContainerStyle={{ maxWidth:'100%'}}
                        scrollEnabled={true}
                        data={GroupsData}
                        renderItem={({item})=> <GroupThread 
                                                groupName={gname}
                                                groupMembersNum={numOfGroups + " " + "members"}    
                                                groupImg={item.groups.imageUri}
                                                onPress={()=>{ navigation.navigate('GroupHome', {info: item.groups.name})}}/>}
                        />
                    
                </View>
                   
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <Pressable
                        onPress={()=>{navigation.navigate('JoinGroup')}} 
                        style={styles.joinCreate} >
                            <Text> 
                                Join a Group 
                            </Text>
                    </Pressable>
                    
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
