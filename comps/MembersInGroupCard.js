import React from 'react'
import { View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'

const MembersInGroupCard = ({
    memberName,
    imgUrl,
}) => {
    return (
        <View 
            style={{
                width: '90%',
                flexDirection: 'row', 
                borderWidth: 1, 
                borderColor:'#c4c4c4'
            }}
        >
            <EllipseSmall imgUrl={imgUrl}/>
            <Text>{memberName}</Text>
            <AntDesign name="calendar" size={20} color="black" />
            <Feather name="at-sign" size={20} color="black" />
        </View>
    )
}

export default MembersInGroupCard


const EllipseSmall = ({
    imgUrl = '../assets/icon.png',
}) => {
    return (
        <Image 
            source={require(imgUrl)}
            style={{
                width: 40,
                height: 40,
                borderRadius: 20,
            }}
        />
    )
}