import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Configurations } from '../PropConfig/Props'
 
const bgCol = Configurations.colors.primCol;
const dividerCol = Configurations.colors.lightBg;

export const TimeSlot = ({
    from="11:11", 
    to="66:66",
    onSlotPress=()=>{}
}) => {
    return (
        <View>
            <TouchableOpacity style={styles.slot} onPress={onSlotPress}>    
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
            </TouchableOpacity>
            </View>
    )
}



const styles = StyleSheet.create({
    
    slot:{
        margin:15,
        backgroundColor: Configurations.colors.primCol,
        padding:5,
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
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 5,  
    },

    divider:{
        backgroundColor:'black',
        height:1,
        width:55

    }
})
