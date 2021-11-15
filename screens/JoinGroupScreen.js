import React from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'

import AppHeader from '../comps/AppHeader'
import JoinAGroupCard from '../comps/JoinAGroupCard'
import NavBar from '../comps/NavBar'

const JoinGroupScreen = ({
    navigation
}) => {

    const onRecBtnPress = () => {
        navigation.navigate('GroupHome')
    }

    return (
        // <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'position' : 'height'} style={styles.container}>
        <View style={styles.container}>
            
            <View style={styles.midDiv}>
                <JoinAGroupCard 
                    text = "Join Group"
                    onRecBtnPress={onRecBtnPress}/>
            </View>
            <NavBar/>
        </View>
        // </KeyboardAvoidingView>
    )
}

export default JoinGroupScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    midDiv: {
        width: '100%',
        paddingTop: 30,
        alignItems: 'center',
        marginBottom: 50,
    }
})
