import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import {Configurations} from '../PropConfig/Props'
import { TimeSlot } from './TimeSlot'
import { Times } from '../data/AvailableTime'
import { Days } from '../data/AvailableTime'
import { itemList } from '../data/tasks'

const dividerCol = Configurations.colors.lightBg
const bgCol = Configurations.colors.primCol
const darkCol= Configurations.colors.secCol
export const Available = (
    {
        monthName =" November",
        day="today",
        date = "20th",
        bgColor={bgCol},
        data,
        onSlotPress=()=>{}
    }
) => {
    return (
        <View  style={styles.card} >
                
            <View style={{width:'100%',alignItems:'flex-start'}}>
                <Text style={{
                    fontSize:30, 
                    color:darkCol,
                    fontWeight:'bold',
                    }}>
                    {date}
                </Text>
                
                <Text style={{
                    fontSize:25, 
                    color:darkCol,
                    fontWeight:'bold',
                    marginLeft:-4}}>
                        {monthName}
                </Text>

            </View>
            
                {data}
            
            {/* <FlatList 
                data={Times}
                renderItem={({item})=> <TimeSlot  onSlotPress={onSlotPress}from={item.from}
                to={item.to}/>}/> */}



            <Text style={{
                    fontSize:25, 
                    marginTop:20,
                    color:darkCol,
                    fontWeight:'bold'}}> {day} 
            </Text>
        </View>
    )
}



const styles = StyleSheet.create({
    
    card:{
        // backgroundColor:'red',
        paddingHorizontal:20,
        paddingVertical:25,
        height:410,
        backgroundColor:'#ffffff80',
        margin:10,
        justifyContent:'space-evenly',
        alignItems:'center',
        borderRadius:10,
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
