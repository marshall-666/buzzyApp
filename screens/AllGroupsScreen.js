import React from 'react'
import { Button, View, Text, StyleSheet, Image, FlatList, Pressable, KeyboardAvoidingView } from 'react-native';
import AppHeader from '../comps/AppHeader';
import TaskBtn from '../comps/taskBtn';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar';
import { GroupThread } from '../comps/GroupThread';
import {GroupsData} from '../data/GroupsData';

const AllGroupsScreen = () => {
    return (
        <View style={{flex:1}}>

         <AppHeader text="Groups"/>   


         <View style={styles.thread}>
            <FlatList  
                data={GroupsData}
                renderItem={({item})=><GroupThread GroupsData={item}/>}
            />
         </View>

         <NavBar/>

        
     </View>
    )
}

export default AllGroupsScreen

const styles = StyleSheet.create({
    thread:
    {
        
        
        justifyContent:'space-between',


    }
})
