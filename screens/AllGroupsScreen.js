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
        <View style={{flex:1, justifyContent:'space-between', alignItems:'center',
        backgroundColor:lightBg}}>

         


         <View style={styles.thread}>
            <FlatList  
                data={GroupsData}
                renderItem={({item})=><GroupThread GroupsData={item}/>}
            />
         </View>
            
            <Text style=
            {{
                color:'darkgrey', 
                width:'65%', 
                textAlign:'center'
                
            }}> 
                Dont see a group you're in or you'd like to start your own? 
            
            </Text>
        
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
    )
}

export default AllGroupsScreen

const styles = StyleSheet.create({
    thread:
    {
        
        width:'100%',
        borderBottomWidth:1,
        alignItems:'flex-start',
        justifyContent:'space-between',
    }
    ,
    joinCreate:
    {
        justifyContent:'center',
        alignItems:'center',
        borderTopWidth:1.5,
        borderRightWidth:1.5,
        borderBottomWidth:1.5,
        borderLeftWidth:1.5,
        height:'30%',
        width:'30%',
        margin:5
    }

})
