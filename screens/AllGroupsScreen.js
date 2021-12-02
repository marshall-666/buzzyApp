import React, { useEffect, useState,useContext } from 'react'
import { Button, View, Text, StyleSheet, Image, FlatList, Pressable, KeyboardAvoidingView, ImageBackground } from 'react-native';
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
import { useFonts } from "expo-font";

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
const AllGroupsScreen = ({navigation}) => {
    
const [dbResult, setDbResult] = useState()
const [ gName, setGName] = useState()
// const [ grp, setGrpName] = useState()
const [grpArray, setGrpArray]=useState([])
const { user,users } = useContext(AuthenticatedUserContext);
const [grmpNum, setNumGrp] = useState('0')

useEffect(()=>{
    
    var loadGroupList = {
        op: 'get_group_ls',
        user_id: user.uid,
    }
    
    talktoserver(loadGroupList).then((rd) => {
        setDbResult(rd)
        
    })
},[])
console.log('=======================')
// console.log(dbResult)
// console.log('------------------------')
// console.log(dbResult.groups[0].group)
console.log('xxxxxxxxxxxxxxxxxxxxxxxxx')


useEffect(()=>{
  const groupNum =  async()=>{

        for (let i = 0; i<=dbResult.length;i++)
        {
            setNumGrp(i)
        }
    }
    groupNum()
    // console.log(dbResult)
}, [dbResult])

let [fontsLoaded]= useFonts({
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf')
  })  
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
            
            
                <View style={styles.imgCont}>
                    <Image style ={{width:130, height:130}}source={require('../assets/images/leaf.png')}/>
                        <View>
                            
                            <Text style={styles.headerText} >
                                You are currently in 
                            </Text>
                            <Text style={styles.headerText} >
                                {grmpNum} Group(s)  
                            </Text>

                        </View>
                </View>
            
            <View style={styles.lowerDiv}>

           


                    <FlatList 
                        
                        contentContainerStyle={{ maxWidth:'100%' }}
                        scrollEnabled={true}
                        data={dbResult}
                        renderItem={({item})=> <GroupThread 
                                                        groupName={item.groups.grpName}
                                                        groupMembersNum={item.groups.mem_count}
                                                        ff="Poppins-Medium"
                                                        // groupImg={item.groups.imageUri}
                                                        onPress={()=>{ navigation.navigate('GroupHome', {groupName: item.groups.grpName,
                                                         numOfMem: item.groups.mem_count ,
                                                         members: item.groups.members,
                                                         groupId:item.groups.groupid
                                                        })}}/>}
                        />
                    
                   
                <View style=
                {{
                    flexDirection:'row', 
                    justifyContent:'space-around',
                    padding: 20,
                    
                    
                    }}>
                    
                    
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
        
        
    },
    header:
    {
        backgroundColor:lightBg,
        justifyContent:'space-between',
        height:'100%'
    },
    headerText:
    {
        fontSize:22, 
        fontFamily:'Poppins-Medium',
        color: Configurations.colors.secCol
    },
    imgCont:
    {
        flexDirection:'row', 
        width:'100%', 
        justifyContent:'space-between', 
        alignItems:'center',
        padding:"5%"
    },
    thread:
    {   
        alignItems:'center',
    },
    lowerDiv: {
        justifyContent:'space-between',
        backgroundColor: Configurations.colors.lightBg,
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
        marginBottom: '7%',
        justifyContent:'center',
        marginTop:15
        
    }

})