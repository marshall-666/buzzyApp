import React from 'react'
import { Text, Image, View, Pressable, ActivityIndicator } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/core';



 export const ListAvatar = ({Members})=>
 {

    const navigation = useNavigation();
    const onPress = ()=>
    {
        console.warn('pressed', Members.name, Members.id)
        navigation.navigate('MembersSchedule', {id: Members.id})
    }
     

    //  console.warn(GroupsData.groups.name)
    return(
            <Pressable 
                onPress={onPress}
                style={{margin:10,}}>
                
                <Image
                    style={{height:100, width:100, borderRadius: 100}} 
                    source={{uri:Members.imageUri}}/>
                    <View style=
                    {{
                        alignItems:'center', 
                        marginTop:5
                    
                    }}>
                        <Text> {Members.name} </Text>
                    </View>
                    
                



            </Pressable>

    )
 }
