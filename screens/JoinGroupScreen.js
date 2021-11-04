import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AppHeader from '../comps/AppHeader'
import JoinAGroupCard from '../comps/JoinAGroupCard'
import NavBar from '../comps/NavBar'

const JoinGroupScreen = () => {
    return (
        <View style={styles.container}>
            <AppHeader text='Groups'/>
            <View style={styles.midDiv}>
                <JoinAGroupCard />
            </View>
            <NavBar/>
        </View>
    )
}

export default JoinGroupScreen

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
