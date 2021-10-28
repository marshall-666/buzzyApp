import React, {useState} from 'react'
import { View, Text, TextInput,Pressable, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Task } from './Task'
import { Configurations } from '../PropConfig/Props'
import { Agenda } from 'react-native-calendars'

const primCol = Configurations.colors.primCol

const CalCont = styled.View`
background-color:${primCol};
height:400px;
width:100%;
`
const HeadTxt = styled.Text``

const timeToString =(time)=> {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }


export const  Calendar = ()=> {
    const [items, setItems] = useState({
      '2021-10-25': 
      [
        {name:'Levi Is Awesome', dueDaTE:'He codes a lot'},
        {name:'Levi Is Awesome', dueDaTE:'He codes a lot'},
        {name:'Levi Is Awesome', dueDaTE:'He codes a lot'}
      
      ],
      '2021-10-28': [{name:'But he needs some sleep', dueDaTE:'so he can rest'}]
    })

 

    
  const renderItem = (item)=>
  {
    return (
        <View style ={{backgroundColor:'white', margin:10, alignItems:'center', height: 50 }}>
            <Text> {item.name}</Text>
            <Text> {item.dueDaTE}</Text>

          </View>
    )
  }

    return (
        <View style ={{flex:1, width:'100%',}}>
             <Agenda
       
        items={items}
        // loadItemsForMonth={loadItems}
        // selected={'2017-05-16'}
        renderItem={renderItem}
 />

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
