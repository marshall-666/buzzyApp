import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Configurations } from '../PropConfig/Props'
 
const bgCol = Configurations.colors.primCol;
const dividerCol = Configurations.colors.lightBg;

export const TimeSlot = ({from="11:11", to="66:66"}) => {
    return (
        <View style={styles.slot}>
                <Text style={{
                    fontSize:22, 
                    color:'white',
                    fontWeight:'600'}}> Time Slot </Text>
                <View style={styles.divider}></View>
                <View>
                    <Text style={{
                    fontSize:22, 
                    color:'white',
                    fontWeight:'600'}}>{from}</Text>
                    <Text style={{
                    fontSize:22, 
                    color:'white',
                    fontWeight:'600'}}>{to}</Text>
                </View>

            </View>
    )
}



const styles = StyleSheet.create({
    
    slot:{
        margin:15,
        // width:'90%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderTopWidth:1.5,
        borderRightWidth:1.5,
        borderBottomWidth:1.5,
        borderLeftWidth:1.5,
        borderRadius:10,
        borderTopColor:dividerCol,
        borderRightColor:dividerCol,
        borderBottomColor:dividerCol,
        borderLeftColor:dividerCol,
    },

    divider:{
        backgroundColor:dividerCol,
        height:5,
        width:55

    }
})
