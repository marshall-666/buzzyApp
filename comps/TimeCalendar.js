import React, {useState, useEffect} from 'react'
import { View, Text, TextInput,Pressable, TouchableOpacity, Button } from 'react-native'
import styled from 'styled-components/native'
import { Configurations } from '../PropConfig/Props'
import {ExpandableCalendar, Timeline, CalendarProvider} from 'react-native-calendars';
// import XDate from 'xdate';

const primCol = Configurations.colors.primCol

const CalCont = styled.View`
background-color:${primCol};
height:400px;
width:100%;
`
const HeadTxt = styled.Text``



//  function sameDate( a, b) {
//   return a.getFullYear() === b.getFullYear() &&
//     a.getMonth() === b.getMonth() &&
//     a.getDate() === b.getDate();
// }

const EVENTS = [
  {
    start: '2017-09-06 01:30:00',
    end: '2017-09-06 02:30:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    color: '#e6add8'
  },
  {
    start: '2017-09-07 00:30:00',
    end: '2017-09-07 01:30:00',
    title: 'Visit Grand Mother',
    summary: 'Visit Grand Mother and bring some fruits.',
    color: '#ade6d8'
  },
  {
    start: '2017-09-07 02:30:00',
    end: '2017-09-07 03:20:00',
    title: 'Meeting with Prof. Behjet Zuhaira',
    summary: 'Meeting with Prof. Behjet at 130 in her office.',
    color: '#e6add8'
  },
  {
    start: '2017-09-07 04:10:00',
    end: '2017-09-07 04:40:00',
    title: 'Tea Time with Dr. Hasan',
    summary: 'Tea Time with Dr. Hasan, Talk about Project'
  },
]



export const  TimeCalendar = ()=> {
    const [newDate, setNewDate] = useState('2021-11-05')

   onDateChanged = date => {
    // console.warn('TimelineCalendarScreen onDateChanged: ', date, updateSource);
    // fetch and set data for date + week ahead
    setNewDate(date)
  };
    

    return (
        <View style ={{flex:1, width:'100%',}}>
             <CalendarProvider 
                date={newDate}/>

            <ExpandableCalendar
                firstDay={1}
            />

            {/* <Timeline
          format24h={true}
          eventTapped={e => e}
          events={EVENTS.filter(event => sameDate(new XDate(event.start), new XDate(newDate)))}
          // scrollToFirst={true}
          // start={0}
          // end={24}
        /> */}

 

        </View>
    )
}



// const  loadItems=(day) =>{
//     setTimeout(() => {
//       for (let i = -15; i < 85; i++) {
//         const time = day.timestamp + i * 24 * 60 * 60 * 1000;
//         const strTime = timeToString(time);
//         if (!items[strTime]) {
//           items[strTime] = [];
//           const numItems = Math.floor(Math.random() * 3 + 1);
//           for (let j = 0; j < numItems; j++) {
//             items[strTime].push({
//               name: 'Item for ' + strTime + ' #' + j,
//               height: Math.max(50, Math.floor(Math.random() * 150))
//             });
//           }
//         }
//       }
//       const newItems = {};
//       Object.keys(items).forEach(key => {
//         newItems[key] = items[key];
//       });
//       setItems(newItems);
//     }, 1000);
//   }
