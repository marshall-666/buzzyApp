import React, { useEffect, useState,useContext } from 'react'
import { View, StyleSheet, FlatList } from 'react-native';
import NavBar from '../comps/NavBar';
import { GroupThread } from '../comps/GroupThread';
import {Configurations} from '../PropConfig/Props'
import talktoserver from "../api/talktoserver"
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';

const lightBg = Configurations.colors.lightBg
const primCol = Configurations.colors.primCol

const ChatGroupListScreen = ({navigation}) => {
    
    const [dbGroupLs, setDbGroupLs] = useState()
    const { user} = useContext(AuthenticatedUserContext);

    useEffect(()=>{

        var loadChatGroups = {
            op: 'load_chatgroups',
            user_id: user.uid,
        }
        talktoserver(loadChatGroups).then((rd) => {
            setDbGroupLs(rd)
        })
        
    },[])

    console.log(dbGroupLs)

    const renderItem = ({item})=> 
        <GroupThread 
            groupName={item.grpName}
            groupMembersNum={''}
            onPress={() => {
                navigation.navigate('GroupChat', {gid: item.groupid})
            }}
        />

    return (
        <View style={styles.header}>
            <FlatList 
                contentContainerStyle={{ maxWidth:'100%', maxHeight:'80%'}}
                scrollEnabled={true}
                data={dbGroupLs}
                renderItem={renderItem}
            />       
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