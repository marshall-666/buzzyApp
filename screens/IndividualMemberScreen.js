import React, {useEffect, useState} from 'react'
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import NavBar from '../comps/NavBar';
import {Configurations} from '../PropConfig/Props'
import IndividualEventCard from '../comps/IndividualEventCard';
import styled from 'styled-components/native';
import {DateCard} from '../comps/DateCard';
import {CreateGroup} from '../comps/CreateGroup'
import { ScheduleMeetingForm } from '../comps/ScheduleMeetingForm';
import { linkWithPhoneNumber } from '@firebase/auth';
import { height } from 'dom-helpers';
import { Foundation } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import talktoserver from "../api/talktoserver"







const lightBg = Configurations.colors.lightBg


const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:90%;
height:100%
width:100%
left:5%
`


const IndividualMemberScreen = ({navigation,
    meetingTimeAppear="November 20th",
    memberName="Abhay Bakshi",
    emailAdd="sample@sample.com",
    phoneNum="7788343160",
    emailHead="Email",
    phoneNumHead="Phone",
    UsernameLabel="Username",
    Username="abhaybee",
    RoleLabel="Role",
    Role="Manager"
    
    
}) => {
    
    const [dbResult, setDbResult] = useState()
    const [user, setUser] = useState('')
    const [imgSrc, setSrc] = useState()
useEffect(()=>{
    var loadMemberDetail = {
        op: 'get_mem_detail',
        m_id: '1', 
    }
    
    
    
    talktoserver(loadMemberDetail).then((rd) => {
        setDbResult(rd)
    })
    
},[])


useEffect(()=>{
    
    const updateUser = async () =>
    {
        
        setUser(dbResult[0].uname)
        setSrc(dbResult[0].img_url)
    }
    
    updateUser()
    
   
    
},[dbResult])
return (
    
        
        <View style={{flex:1, justifyContent:'flex-end', alignItems:'center',
        backgroundColor:lightBg}}>
            
            <View style={styles.mainCont}>
                <Image
                style={{height:180, width:180, borderRadius: 10, borderWidth:6, borderColor:Configurations.colors.lightBg, top:"-10%"}} 
                source={{uri:imgSrc}}/>
                
                
                <View style={{width:"100%", alignItems:'center', top:"-5%",justifyContent:'space-evenly'}}>
                    <Text style={{fontSize:25, color:Configurations.colors.secCol}}>{user}</Text>
                    <Text></Text>
                    <View style={styles.memberRoleLabelCont}>
                    
                    <View  style={styles.userNameAndRoleCont}>
                        <Text style={{color:Configurations.colors.secCol}}>{UsernameLabel}</Text>
                        <Text style={{fontSize:18}}>{user}</Text>
                    </View>
                    
                    <View style={{height:'80%', width:"0.5%", backgroundColor:"grey"}}></View>
                    
                    <View  style={styles.userNameAndRoleCont}>
                        <Text style={{color:Configurations.colors.secCol}}>{RoleLabel}</Text>
                        <Text style={{fontSize:18}}>{Role}</Text>
                    </View>
                    </View>

                   
                

                    <View style={styles.memberInfoCont}>    

                        <Text style={{fontSize:20, color:Configurations.colors.secCol}}>{emailHead}</Text>
                        <Text style={{fontSize:18, color:Configurations.colors.lightBg}}>{emailAdd}</Text>
                        <View style={{width:"100%", height:'0.5%', backgroundColor:Configurations.colors.secCol, }}></View>

                        <Text style={{fontSize:20, color:Configurations.colors.secCol}}>{phoneNumHead}</Text>
                        <Text style={{fontSize:18, color:Configurations.colors.lightBg}}>{phoneNum}</Text> 
                        <View style={{width:"100%", height:'0.5%', backgroundColor:Configurations.colors.secCol,}}></View>   
                    </View>
                </View>
            </View>
            
            <NavBarCon>
                <NavBar/>
            </NavBarCon>
  
        </View>
    )
}

export default IndividualMemberScreen

const styles = StyleSheet.create({
    mainCont: {
        alignItems:'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: Configurations.colors.primCol,
        height:'90%',
        width:'100%',
        padding:'5%',
    },
  
    memberRoleLabelCont:{
        flexDirection:"row",
        width:"70%",
        height:"15%",
    },


    memberInfoCont:{
        justifyContent:"space-evenly",
        height:"40%",
        width:"90%"
    },

    userNameAndRoleCont:{
        width:"50%",
        justifyContent:"space-evenly",
        alignItems:'center',
    },

    IconCont:{
    flexDirection:"row" ,
    alignItems:'center',
    justifyContent:'space-evenly',
    width:"70%",
    height:"15%" ,
    }


})
