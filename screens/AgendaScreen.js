import React, {useState, useEffect} from 'react'
import { View, Text, TextInput,Pressable, TouchableOpacity, Button } from 'react-native'
import styled from 'styled-components/native'
import { Configurations } from '../PropConfig/Props'
import { Agenda } from 'react-native-calendars'
import { SelectedDay } from '../data/test'
import DashboardScreen from './DashboardScreen'


const selectedDay = SelectedDay
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

const trialPush = {
        '2021-12-01': 
          [
            {name:'wasaaaaaaaap', dueDaTE:'THIS WORKS!!'},
            {name:'REALLY???', dueDaTE:'GODDAMN '}
          
          ],
        '2021-12-02': 
          [
            {name:'good work', dueDaTE:'See you next week'},
            {name:'REALLY???', dueDaTE:'GODDAMN'}
          
          ],
        '2021-12-03': 
          [
            {name:'wasaaaaaaaap', dueDaTE:'THIS WORKS!!'},
            {name:'REALLY???', dueDaTE:'GODDAMN'}
          
          ]
        }
    


 const  CalAgenda = ()=> {
    const [items, setItems] = useState(
      {
        '2021-10-25': 
          [
            {name:'Levi Is Awesome', dueDaTE:'He codes a lot'},
            {name:'Levi Is Awesome', dueDaTE:'He codes a lot'},
            {name:'Levi Is Awesome', dueDaTE:'He codes a lot'}
          
          ],

        '2021-10-28': 
          [
            {name:'But he needs some sleep', dueDaTE:'so he can rest'},
            {name:'But he needs some sleep', dueDaTE:'so he can rest'}
          
          ],
        '2021-10-30': 
          [],

        '2021-11-01': 
          [
            {name:'Nick is a whine child', dueDaTE:'due at 7:00pm'},
            {name:'But he is also a good coder', dueDaTE:'meet at whereevr'}
          
          ]
    })

 const  loadItems=(day) =>{
    
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
        }
      }
    }
    
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
                style ={{backgroundColor:'red'}}
       
                items={items}
                loadItemsForMonth={loadItems}
                renderItem={renderItem}
                selected={selectedDay}
                
 />

 <Button 
 title="Add something"
 onPress={()=>{
   setItems( {...items, ...trialPush})
 }} />

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
export default CalAgenda