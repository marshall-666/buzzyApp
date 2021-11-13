import { light } from '@eva-design/eva';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
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


export const ToDate = () => {
    return (
        <View style=
                {{
                    alignItems:'center', 
                    justifyContent:'center',
                    width:'100%',
                    height:100,
                    backgroundColor: lightBg,
                    borderBottomLeftRadius:20,
                    borderBottomRightRadius:10
                }}>
            <Text style={{fontSize:60, fontWeight:'550'}}> { d.getDate()}</Text>
            <Text style={{fontSize:24}}> {day}</Text>
        </View>
    )
}



const styles = StyleSheet.create({})
