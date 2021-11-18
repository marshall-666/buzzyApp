import React from 'react'
import { Button, View, Text, StyleSheet, Image, FlatList, Pressable, KeyboardAvoidingView } from 'react-native';
import AppHeader from '../comps/AppHeader';
import TaskBtn from '../comps/taskBtn';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar';
import { GroupThread } from '../comps/GroupThread';
import {GroupsData} from '../data/GroupsData';
import {Configurations} from '../PropConfig/Props'

const lightBg = Configurations.colors.lightBg

const AllGroupsScreen = ({navigation}) => {
    return (
        <View style={{flex:1, justifyContent:'flex-end',
        backgroundColor:lightBg,}}>

            <View style={styles.lowerDiv}>

                <View style={styles.thread}>   
                    <FlatList  
                    data={GroupsData}
                    renderItem={({item})=><GroupThread GroupsData={item}/>}
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

         <NavBar/>
        </View>
     </View>
    )
}

export default AllGroupsScreen

const styles = StyleSheet.create({
    thread:
    {
        
        width:'100%',
        borderBottomWidth:1,
        alignItems:'center',
        justifyContent:'space-between',
    },
    lowerDiv: {
        width: '100%',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: Configurations.colors.primCol,
    },
    joinCreate:
    {
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        height:'40%',
        width:'40%',
        margin:5,
        backgroundColor:Configurations.colors.butCol
    }

})
