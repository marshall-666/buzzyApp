import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const InGroupButton = ({
    btnText='CHAT',
    handleBtnOnPress=()=>{}
}) => {
    return (
        <TouchableHighlight style={styles.container} onPress={handleBtnOnPress}>
            <Text style={{color: '#3D5A80', paddingHorizontal: 20, textAlign: 'center'}}>{btnText}</Text>
        </TouchableHighlight>
    )
}

export default InGroupButton

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 80,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
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
