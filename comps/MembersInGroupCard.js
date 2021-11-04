import React from 'react'
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'

const MembersInGroupCard = ({
    memberName = 'Member\'s name',
    imgUrl = 'https://thumbs.dreamstime.com/b/beautiful-woman-headshot-over-white-background-101850107.jpg',
}) => {
    return (
        <View style={styles.backBox}>
            <EllipseSmall imgUrl={imgUrl}/>
            <Text style={styles.nameText}>{memberName}</Text>
            <TouchableHighlight onPress={() => alert('Navigate to Calendar')}>
                <AntDesign name="calendar" size={20} color="black" style={{margin: 10}}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => alert('Navigate to Chatting')}>
                <Feather name="at-sign" size={20} color="black" style={{margin: 10}}/>
            </TouchableHighlight>
        </View>
    )
}

export default MembersInGroupCard


const EllipseSmall = ({
    imgUrl,
}) => {
    return (
        <Image 
            source={{uri:imgUrl}}
            style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                margin: 10,
            }}
        />
    )
}

const styles = StyleSheet.create({
    backBox: {
        width: '90%',
        height: 60,
        alignItems: 'center',
        flexDirection: 'row', 
        borderWidth: 1, 
        borderColor:'#c4c4c4',
        backgroundColor: '#fff',
    },
    nameText: {
        width: '55%',
        padding: 10,
    }
})