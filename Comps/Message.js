import React from 'react'
import { View, Text } from 'react-native'
import { Configurations } from '../PropConfig/Props'

const colOne = Configurations.colors.butCol
const grey = "lightgrey"
const myId = 'u1'

export const Message = ({message}) => {

    const isMe = message.user.id === myId;
    return (
        <View style={{
            padding: 10,
            margin: 10,
            borderRadius: 10,
            maxWidth: "75%",
            marginLeft: isMe? 'auto': 10 ,
            marginRight: isMe? 10: 'auto' ,
            backgroundColor: isMe? grey : colOne }}>
            <Text > {message.content} </Text>
        </View>
    )
}


