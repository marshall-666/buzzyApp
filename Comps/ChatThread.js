import React from 'react'
import { Text, Image, View, Pressable, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/core';


 export const ChatThread = ({
     


 })=>
 {

    const navigation = useNavigation();
    const onPress = ()=>
    {
        console.warn('pressed', user.name)
        navigation.navigate('SingleChatThread', {id: chatRoom.id})
    }
     const user = chatRoom.users[1];
    return(
            <Pressable 
                onPress={onPress}
                style={{flexDirection:'row'}}>
                
                <Image
                    style={{height:100, width:100, borderRadius: 100}} 
                    source={{uri:'https://placekitten.com/50/50'}}/>
                <View style={{justifyContent:'center'}}>
                    <View>
                        <Text> {user.name} </Text>
                        <Text> {chatRoom.lastMessage.createdAt} </Text>
                    </View>
                    <View>
                        <Text> {chatRoom.lastMessage.content} </Text>
                    </View>
                </View>
                        



            </Pressable>

    )
 }
