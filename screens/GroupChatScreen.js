import React, { useEffect, useState, useRef, useContext } from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView, FlatList, TextInput } from 'react-native'
import NavBar from '../comps/NavBar'
import talktoserver from "../api/talktoserver"

import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';


const GroupChatScreen = ({
    route,
    navigation
}) => {

    const routeId = route.params.gid

    const { user } = useContext(AuthenticatedUserContext);
    const [chatdata, setChatData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [chatMessage, setChatMessage] = useState(null)
    const [chatUpdated, setChatUpdated] = useState(false)
    const flatListChat = useRef(null)
    
    const load_msgls = 'load_msgls'
    const add_msg = 'add_msg'

    const user_id = user.uid
    
    const group_id = routeId

    useEffect(()=>{

        const chatinterval = setInterval(()=>{
            var loadChats = {
                op: load_msgls,
                user_id: user_id,
                group_id: group_id,
            }
    
            talktoserver(loadChats).then((rd) => {
                setChatData(rd)
            }).then(() => {
                setIsLoading(false)
            })
        }, 1000)

        return () => clearInterval(chatinterval)

    }, [])

    useEffect(()=>{
        var loadChats = {
            op: load_msgls,
            user_id: user_id,
            group_id: group_id,
        }
        talktoserver(loadChats).then((rd) => {
            setChatData(rd)
        })
    }, [chatUpdated])

    const updateChat = (t) => {

        if(t != null){
            var addChat = {
                op: add_msg,
                sender_id: user_id,
                group_id: group_id,
                message: t,
            }
            talktoserver(addChat).then((rd) => {
                if(rd == 'Msg added'){
                    setChatUpdated(!chatUpdated)
                }
            })   
        } else {
            console.log('Message is null')
        }
        
    }

    const renderItem =({item})=> (
        item.sender_id === user_id ? 
        <MyChatLine message={item.message}/>
        :
        <ChatLine sender={item.sender} message={item.message}/>
    )
    

    return (
        
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'position' : 'height'}
            style={styles.container}>
            
            { isLoading ?
            <View style={{
                width: '100%',
                height: '80%',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 10,
                backgroundColor: '#F5F5E1',
                }}
            >
                <Text>Loading...</Text>
            </View> 
            :
            <View style={styles.midDiv}>
                <FlatList
                    ref={flatListChat}
                    onContentSizeChange={()=>{
                        flatListChat.current.scrollToEnd()
                    }}
                    data={chatdata}
                    renderItem={renderItem}
                    keyExtractor={item=>item.id}
                />
            </View>
            }



            <View style={{width:'100%', paddingVertical:17.5, alignItems: 'center'}}>
                <MessageInput 
                updateChat={updateChat} 
                chatMessage={chatMessage} 
                setChatMessage={setChatMessage}
                />
            </View>
            <View style={styles.navbarWrap}>
                <NavBar/>
            </View> 
        </KeyboardAvoidingView>
    )
}

export default GroupChatScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        backgroundColor: '#94BDD4',
    },
    midDiv: {
        width: '100%',
        height: '80%',
        paddingHorizontal: 10,
        backgroundColor: '#F5F5E1',
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
        backgroundColor: '#F2E5B6',
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
    chatlineContainer: {
        flexDirection: 'row', 
        // width: '80%', 
        minHeight: 40,
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#85A5E8',
        borderRadius: 10,
        alignItems: 'center',
        padding: 10
    },
    navbarWrap: {
        width:'100%',
        alignItems: 'center',
        backgroundColor: '#94BDD4',
        paddingVertical: 10
    }
})

const ChatLine =({
    sender,
    message
})=> {
    return(
        <View style={styles.chatContainer}>
            <View>
                <Text style={{fontSize: 11, marginLeft: 5}}>{sender}::</Text>
                <View style={styles.chatlineContainer}>
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
        <View style={{width: '90%', backgroundColor: '#FFF', borderRadius: 10}}>
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