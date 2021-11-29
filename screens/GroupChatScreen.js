import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, FlatList, TextInput } from 'react-native'
import NavBar from '../comps/NavBar'
import talktoserver from "../api/talktoserver"

const GroupChatScreen = ({
    route,
    navigation
}) => {

    const [chatdata, setChatData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [chatMessage, setChatMessage] = useState()
    const [chatUpdated, setChatUpdated] = useState(false)
    const [dbResult, setDbResult] = useState()
    
    useEffect(()=>{
        var loadChats = {
            op: 'load_msgls',
            user_id: '1',
            group_id: '1',
        }
        talktoserver(loadChats).then((rd) => {
            setChatData(rd)
        })
    }, [])

    useEffect(()=>{
        var loadChats = {
            op: 'load_msgls',
            user_id: '1',
            group_id: '1',
        }
        talktoserver(loadChats).then((rd) => {
            setChatData(rd)
        })
    }, [chatUpdated])

    const updateChat = (t) => {
        var addChat = {
            op: 'add_msg',
            sender_id: '1',
            group_id: '1',
            message: t,
        }
        
        talktoserver(addChat).then((rd) => {
            if(rd == 'Msg added'){
                setChatUpdated(!chatUpdated)
            }
        })   
    }

    const renderItem =({item})=> (
        item.send_id === user_id ? 
        <MyChatLine message={item.message}/>
        :
        <ChatLine sender={item.sender} message={item.message}/>
    )

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'position' : 'height'}
            style={styles.container}>
            <View style={styles.midDiv}>
                <FlatList
                    data={chatdata}
                    renderItem={renderItem}
                    keyExtractor={item=>item.id}
                />
            </View>
            <View>
                <MessageInput 
                updateChat={updateChat} 
                chatMessage={chatMessage} 
                setChatMessage={setChatMessage}/>
            </View>
            <NavBar/> 
        </KeyboardAvoidingView>
    )
}

export default GroupChatScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#F5F5E1',
    },
    midDiv: {
        width: '100%',
        paddingHorizontal: 10,
        height: '90%',
        marginBottom: 5,
    },
    myChatContainer:{
        flexDirection: 'row',
        width: '100%',
        minHeight: 40,
        marginTop: 5,
        justifyContent:'flex-end'
    },
    myChatlineContainer: {
        flexDirection: 'row', 
        // width: '80%', 
        minHeight: 40,
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: Themes.darkMode.tue,
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        justifyContent: 'flex-end'
    },
    chatContainer:{
        flexDirection: 'row',
        width: '100%',
        // minHeight: 40,
        marginTop: 5,
        justifyContent:'flex-start',
    },
})

const ChatLine =({
    sender,
    message
})=> {
    return(
        <View style={styles.chatContainer}>
            <View>
                <Text>{sender}</Text>
                <View>
                    <Text>{message}</Text>
                </View>
            </View>
        </View>
    )
}

const MyChatLine =({
    message
})=> {
    return (
        <View style={styles.myChatContainer}>
            <View style={styles.myChatlineContainer}>
                <Text>{message}</Text>
            </View>
        </View>
    )
}

const MessageInput =({
    chatMessage,
    setChatMessage,
    updateChat=()=>{},
})=> {
    return(
        <View>
            <TextInput
                placeholder='Type here...'
                onChangeText={(t) => setChatMessage(t)}
                value={chatMessage}
                style={{width:'80%', height:45, paddingHorizontal:15}}
                onSubmitEditing = {()=>{
                    updateChat(chatMessage)
                    setChatMessage(null)
                }}
            />
        </View>
    )
}