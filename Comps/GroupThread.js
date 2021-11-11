import React from 'react'
import { Text, Image, View, Pressable, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/core';
import {GroupsData} from '../data/GroupsData';


 export const GroupThread = ({GroupsData})=>
 {

    const navigation = useNavigation();
    const onPress = ()=>
    {
        console.warn('pressed', group.name, group.id)
        navigation.navigate('GroupHome', {id: GroupsData.id})
    }
     const group = GroupsData.groups;
    //  console.warn(GroupsData.groups.name)
    return(
            <Pressable 
                onPress={onPress}
                style={{flexDirection:'row', margin:15,}}>
                
                <Image
                    style={{height:100, width:100, borderRadius: 100}} 
                    source={{uri:group.imageUri}}/>
                <View style={{justifyContent:'center'}}>
                    <View>
                        
                        {/* <Text> {title}</Text> */}
                        <Text> {group.name} </Text>
                    </View>
                    
                </View>
                        



            </Pressable>

    )
 }
