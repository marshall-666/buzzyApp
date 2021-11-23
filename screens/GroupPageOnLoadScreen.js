import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppHeader from '../comps/AppHeader'
import JoinCreate from '../comps/JoinCreate'
import NavBar from '../comps/NavBar'

const GroupPageOnLoadScreen = ({
    navigation
}) => {

    const onJoinPress = () => {
        navigation.navigate('JoinGroup')
    }

    const onCreatePress = () => {
        navigation.navigate('CreateGroup')
    }

    return (
        <View style={styles.container}>
            <AppHeader text='Groups'/>
            <View style={styles.midDiv}>
                <JoinCreate onJoinPress={onJoinPress} onCreatePress={onCreatePress}/>
            </View>
            <NavBar/> 
        </View>
    )
}

export default GroupPageOnLoadScreen

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
