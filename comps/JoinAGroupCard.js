import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

const JoinAGroupCard = ({
    // groupName,
    // setGroupName,
    // groupLink,
    // setGroupLink,
}) => {
    const [groupName, setGroupName] = useState()
    const [groupLink, setGroupLink] = useState()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Join a group</Text>
            <Text style={styles.subTitle}>Group Name</Text>
            <TextInput
                placeholder='Type Group Name Here'
                placeholderTextColor='#aaaaaa'
                style={styles.inputText}
                value={groupName}
                onChangeText={() => setGroupName(groupName)}
            />
            <View style={styles.devider}/>
            <Text style={{color: '#c7c7c7', fontSize: 18, textAlign:'center', marginVertical: 50}}>OR</Text>
            <Text style={styles.subTitle}>Paste Group Link</Text>
            <TextInput
                placeholder='Paste Group Link Here'
                placeholderTextColor='#aaaaaa'
                style={styles.inputText}
                value={groupLink}
                onChangeText={() => setGroupLink(groupLink)}
            />
            <View style={styles.devider}/>
        </View>
    )
}

export default JoinAGroupCard

const styles = StyleSheet.create({
    container: {
        width: '85%',
        minHeight: 450,
        backgroundColor: '#35579f',
        padding: 15,
        borderRadius: 25,
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 15,
        marginBottom: 50,
    },
    subTitle: {
        color: '#fff', 
        fontSize: 20, 
        textAlign: 'left',
        paddingLeft: 15,
        // marginVertical: 30,
    },
    inputText: {
        paddingLeft: 15,
        marginTop: 30,
        color: '#fff'
    },
    devider: {
        width: '85%',
        height: 2,
        backgroundColor: '#fff',
        marginLeft: 15,
        marginTop: 5,
    }
})