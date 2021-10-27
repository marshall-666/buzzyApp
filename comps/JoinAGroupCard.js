import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

const JoinAGroupCard = ({
    groupName,
    groupLink,
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Join a group</Text>
            <Text style={{color: '#fff', fontSize: 20, textAlign: 'left'}}>Group Name</Text>
            <TextInput
                placeholder='Type Group Name Here'
                placeholderTextColor='#aaaaaa'
                value={groupName}
            />
            <Text style={{color: '#c7c7c7', fontSize: 18, textAlign:'center'}}>OR</Text>
            <Text style={{color: '#fff', fontSize: 20, textAlign: 'left'}}>Paste Group Link</Text>
            <TextInput
                placeholder='Paste Group Link Here'
                placeholderTextColor='#aaaaaa'
                value={groupLink}
            />

        </View>
    )
}

export default JoinAGroupCard

const styles = StyleSheet.create({
    container: {
        width: '85%',
        height: 600,
        backgroundColor: '#35579f',
        padding: 15,
    },
    title: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 15,
    }
})