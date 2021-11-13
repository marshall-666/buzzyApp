import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Configurations} from '../PropConfig/Props'

const dividerCol = Configurations.colors.lightBg
const bgCol = Configurations.colors.primCol

export const Available = (
    {

    }
) => {
    return (
        <View style={styles.card} >
            <View>
                <Text>hello</Text>
                <Text>hello</Text>
            </View>
            
            <View style={styles.slot}>
                <Text> Time Slot </Text>
                <View style={styles.divider}></View>
                <View>
                    <Text>From</Text>
                    <Text>To</Text>
                </View>

            </View>



        </View>
    )
}



const styles = StyleSheet.create({
    
    card:{
        backgroundColor:bgCol,
        width:"90%",
        height:'50%',
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    slot:{
        width:'70%',
        flexDirection:'row',
        alignItems:'center',
        borderTopWidth:1,
        borderRightWidth:1,
        borderBottomWidth:1,
        borderLeftWidth:1,
    },

    divider:{
        backgroundColor:dividerCol,
        height:5,
        width:55

    }
})
