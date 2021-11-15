import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'

import AppHeader from '../comps/AppHeader'
import { CreateGroup } from '../comps/CreateGroup'
import NavBar from '../comps/NavBar'
import { Configurations } from '../PropConfig/Props'

const lightBg = Configurations.colors.lightBg

const CreateGroupScreen = ({
    navigation
}) => {

    const handlePress = () => {
        navigation.navigate('GroupHome')
    }

    return (
        // <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'position' : 'height'} style={styles.container}>
        <View style={styles.container}>
            <View style={styles.midDiv}>
                <CreateGroup handlePress={handlePress}/>
            </View>
            <NavBar/>
        </View>
        // </KeyboardAvoidingView>
    )
}

export default CreateGroupScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor:lightBg
    },
    midDiv: {
        width: '95%',
        paddingTop: 30,
        alignItems: 'center',
        marginBottom: 50,
    }
})
