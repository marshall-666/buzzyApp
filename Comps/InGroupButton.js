import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View, TouchableOpacity } from 'react-native'
import { Octicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 

const InGroupButton = ({
    btnText='CHAT',
    handleBtnOnPress=()=>{},
    icon="comment-discussion"
}) => {
    return (
        <TouchableOpacity onPress={handleBtnOnPress}>
            <View style= {styles.container} >
                <Text style={{color: '#3D5A80',  textAlign: 'center'}}>{btnText}</Text>
                <Octicons name={icon} size={35} color="black" />
            </View>
        </TouchableOpacity>    
    )
}

export default InGroupButton

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 80,
        backgroundColor: '#FFFFFF',
        flexDirection:'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 10,
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOpacity: 25,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,
    }
})
