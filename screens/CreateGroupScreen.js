import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AppHeader from '../comps/AppHeader'
import { CreateGroup } from '../comps/CreateGroup'
import NavBar from '../comps/NavBar'

const CreateGroupScreen = ({
    navigation
}) => {

    const handlePress = () => {
        navigation.navigate('GroupHome')
    }

    return (
        <View style={styles.container}>
            <AppHeader text='Groups'/>
            <View style={styles.midDiv}>
                <CreateGroup handlePress={handlePress}/>
            </View>
            <NavBar/>
        </View>
    )
}

export default CreateGroupScreen

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
    }
})
