import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppHeader from '../comps/AppHeader'
import JoinCreate from '../comps/JoinCreate'
import NavBar from '../comps/NavBar'

const GroupChatScreen = ({
    navigation
}) => {

    const onJoinPress = () => {
        
    }

    const onCreatePress = () => {
       
    }

    return (
        <View style={styles.container}>
            <View style={styles.midDiv}>
                
            </View>
            <NavBar/> 
        </View>
    )
}

export default GroupChatScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    midDiv: {
        width: '100%',
        paddingTop: 30,
        alignItems: 'center',
        marginBottom: 50,
    },
  
})
