import React, {useState, useEffect} from 'react'
import { View, Text, TextInput,Pressable, TouchableOpacity, Button } from 'react-native'
import styled from 'styled-components/native'
import { Calendar } from 'react-native-calendars'

export const HomeCalendar = ()=> 
{
      const [selected, setSelected] = useState({});
       const onDayPress = day => {
    setSelected(day.dateString);
    console.log('today is', day)
  };

    return (
        <View>
            <Calendar 
                style=
                {{
                    maxWidth: 400,
                    width:400
                }}
                markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: 'blue',
              selectedTextColor: 'white'
            }
          }}
                onDayPress={onDayPress}
            />

        </View>
    )
}
