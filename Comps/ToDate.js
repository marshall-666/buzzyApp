import { light } from '@eva-design/eva';
import React from 'react'
import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import { Configurations } from '../PropConfig/Props';

const lightBg = Configurations.colors.lightBg;

const d = new Date();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
let day = weekday[d.getDay()];


const months = new Array(12);
months[0]= "January";
months[1]= "February";
months[2]= "March";
months[3]= "April";
months[4]= "May";
months[5]= "June";
months[6]= "July";
months[7]= "August";
months[8]= "September";
months[9]= "October";
months[10]= "November";
months[11]= "December";
let month = months[d.getDay()];

export const ToDate = ({ff}) => {
    return (
        <View style={styles.dateHeader}>
            
                            
                <Text style={{fontSize:60, fontFamily:ff}}> { d.getDate()}</Text>
                <Text style={{fontSize:24, fontFamily:ff}}> {day}</Text>
            
        </View>
    )
}



const styles = StyleSheet.create({
    dateHeader:
    {
        flex:1,
        alignItems:'center', 
        justifyContent:'center',
        width:'100%',
        height:200,
        backgroundColor: lightBg,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        marginBottom:15,
        
    }
})
