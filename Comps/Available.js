import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import {Configurations} from '../PropConfig/Props'
import { TimeSlot } from './TimeSlot'
import { Times } from '../data/AvailableTime'

const dividerCol = Configurations.colors.lightBg
const bgCol = Configurations.colors.primCol

export const Available = (
    {
        monthName =" November",
        day="today",
        date = "20th",
        bgColor={bgCol}
    }
) => {
    return (
        <View style={styles.card}  >
                
            <View style={{width:'100%'}}>
                <Text style={{
                    fontSize:30, 
                    color:'white',
                    fontWeight:'bold'}}>{date}
                
                </Text>
                
                <Text style={{
                    fontSize:25, 
                    color:'white',
                    fontWeight:'bold'}}>
                        {monthName}
                </Text>
            </View>
            
            <FlatList 
                data={Times}
                renderItem={({item})=> <TimeSlot from={item.from}
                to={item.to}/>}/>



            <Text style={{
                    fontSize:25, 
                    color:'white',
                    fontWeight:'bold'}}> {day} 
            </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    
    card:{
        padding:15,
        
        width:"60%",
        height:'80%',
        marginTop:10,
        justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius:10,
        borderTopWidth:1,
        borderRightWidth:1,
        borderBottomWidth:1,
        borderLeftWidth:1,

    },
    slot:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        borderTopWidth:1,
        borderRightWidth:1,
        borderBottomWidth:1,
        borderLeftWidth:1,
        borderRadius:10,
    },

    divider:{
        backgroundColor:dividerCol,
        height:5,
        width:55

    }
})
