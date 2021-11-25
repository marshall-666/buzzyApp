import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { Configurations } from '../PropConfig/Props'



export const DateCard = (
    {
        date="21st",
        month="December",
        availableTimes="2 Available Times",
        day="Tuesday",
        onCardPress=()=>{}
    }
    ) => {
        
    return (
        <View style={styles.card}  >
            <TouchableOpacity onPress={onCardPress}>
                <Text style={{fontWeight:'bold' ,fontSize:20}}>{date}</Text>
                <Text>{month}</Text>
                <Text></Text>
            <   Text>{availableTimes}</Text>
                <Text></Text>
                <Text>{day}</Text>
            </TouchableOpacity>
        </View>
    )
}



const styles = StyleSheet.create({
    
    card:{
        flex:0.5,
        aspectRatio:1,
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:15,
        padding:5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 5,  
        margin:10

    }
})
