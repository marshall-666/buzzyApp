import React, {useState} from 'react'
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import AppHeader from '../comps/AppHeader'
import { Agenda } from 'react-native-calendars'
import NavBar from '../comps/NavBar'
import MembersInGroupCard from '../comps/MembersInGroupCard'
import InGroupButton from '../comps/InGroupButton'
import GroupEventCard from '../comps/CourseEventCard'
import { Task } from '../comps/Task'
import {ListAvatar} from '../comps/ListAvatar'
import { Members } from '../data/Members'



const MembersScheduleScreen = ({
    navigation,
    route
}) => {
    
    // route is a parameter given by react navigation.
    // I logged route and discovered the architecture of the data being passed over from the list avatar component.
    // id was stored under an object called params.
    // I assigned the variable member to route.params.id
    // Now that that information is acessible on the screen, 
    // I can use that information to dynamically displat different schedules


    let member = route.params.id
    console.warn(member)

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
          '2021-11-30': 
            [],
          '2021-11-01': 
            [
              {name:'Nick is a whine child', dueDaTE:'due at 7:00pm'},
              {name:'But he is also a good coder', dueDaTE:'meet at whereevr'}
            
            ]
      })

      const timeToString =(time)=> {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
      }
      
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
          // <View style ={{backgroundColor:'white', margin:10, alignItems:'center', height: 50 }}>
          //     <Text> {item.name}</Text>
          //     <Text> {item.dueDaTE}</Text>
  
          //   </View>
  
          <Task/>
      )
    }

    // const onPress = ()=>
    // {
    //     console.warn('pressed', Members.name, Members.id)
    //     // navigation.navigate('GroupHome', {id: Members.id})
    // }
    return (
        <ScrollView style={styles.container}>
            <AppHeader text="Schedules"/>

            <FlatList
                horizontal
                data={Members}
                renderItem={({item})=> 
                    <ListAvatar 
                        Members={item}
                        // onPress={console.warn('hey you pressed on')}
                        // onPress={onPress}
                
                />
                
                }
                />

            <Agenda 
                items={items}
                loadItemsForMonth={loadItems}
                renderItem={renderItem}
                // selected={daySelect}
                
                theme=
                {{ 
                  calendarBackground: 'green',
                  agendaKnobColor: 'red',
                  backgroundColor: '#fad',
              // agendaDayTextColor: 
              // agendaDayNumColor: 
              // agendaTodayColor: 
              // monthTextColor: 
              // textDefaultColor: 
              // todayBackgroundColor: 
              // textSectionTitleColor: 
              selectedDayBackgroundColor: 'pink'
              // dayTextColor: 
              // dotColor: 
              // textDisabledColor: 
                }}
                
 />
              
        </ScrollView>
    )
}

export default MembersScheduleScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    midDiv: {
        width: '100%',
        height: 100,
        padding: 30,
    },
    lowerDiv: {
        width: '100%',
        paddingTop: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#94BDD4',
    },
    membersView: {
        width: '100%',
        marginBottom: 40,
    }
})
