// imports from dependancies ==========
import React, { useState, useEffect } from 'react';
import { Button, View, Text,ScrollView, FlatList, Pressable } from 'react-native';
import { Agenda, ExpandableCalendar, Timeline, CalendarList  } from 'react-native-calendars'
import styled from 'styled-components/native';

// Component imports===============
import {Task} from '../comps/Task'
import NavBar from '../comps/NavBar'
import IndividualEventCard from '../comps/IndividualEventCard';


// Data imports===============
import { SelectedDay } from '../data/test';
import { Configurations } from '../PropConfig/Props'
import { groupsData } from '../data/tasks';
import {coursesData} from '../data/tasks';
import {eventsData} from '../data/tasks'
import {category} from '../data/category'
import { Events } from '../data/Events';
import { EventsMembThree } from '../data/Events';

// import {taskCategory} from '../data/category'

const colors = Configurations.colors;
const secCol = colors.secCol;
const accent = colors.butCol;





const AgendaWrapper = styled.View`
height:80%;
width:100%;
display:flex;
`

const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92%;
height:100%
width:100%
left:5%
`


// ========================agenda comments===========================
const selectedDay = SelectedDay
const primCol = Configurations.colors.primCol

const HeadTxt = styled.Text``


const timeToString =(time)=> {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}


// const EVENTS = [
//   {
//     start: '2021-12-06 01:30:00',
//     end: '2021-12-06 02:30:00',
//     title: 'Dr. Mariana Joseph',
//     summary: '3412 Piedmont Rd NE, GA 3032',
//     color: '#e6add8'
//   },
  // {
  //   start: '2017-09-07 00:30:00',
  //   end: '2017-09-07 01:30:00',
  //   title: 'Visit Grand Mother',
  //   summary: 'Visit Grand Mother and bring some fruits.',
  //   color: '#ade6d8'
  // },
  // {
  //   start: '2017-09-07 02:30:00',
  //   end: '2017-09-07 03:20:00',
  //   title: 'Meeting with Prof. Behjet Zuhaira',
  //   summary: 'Meeting with Prof. Behjet at 130 in her office.',
  //   color: '#e6add8'
  // },
  // {
  //   start: '2017-09-07 04:10:00',
  //   end: '2017-09-07 04:40:00',
  //   title: 'Tea Time with Dr. Hasan',
  //   summary: 'Tea Time with Dr. Hasan, Talk about Project'
  // },
  // {
  //   start: '2017-11-07 01:05:00',
  //   end: '2017-09-07 01:35:00',
  //   title: 'Dr. Mariana Joseph',
  //   summary: '3412 Piedmont Rd NE, GA 3032'
  // },
  // {
  //   start: '2017-09-07 14:30:00',
  //   end: '2017-09-07 16:30:00',
  //   title: 'Meeting Some Friends in ARMED',
  //   summary: 'Arsalan, Hasnaat, Talha, Waleed, Bilal',
  //   color: '#d8ade6'
  // },
  // {
  //   start: '2017-09-08 01:40:00',
  //   end: '2017-09-08 02:25:00',
  //   title: 'Meet Sir Khurram Iqbal',
  //   summary: 'Computer Science Dept. Comsats Islamabad',
  //   color: '#e6bcad'
  // },
  // {
  //   start: '2017-09-08 04:10:00',
  //   end: '2017-09-08 04:40:00',
  //   title: 'Tea Time with Colleagues',
  //   summary: 'WeRplay'
  // },
  // {
  //   start: '2017-09-08 00:45:00',
  //   end: '2017-09-08 01:45:00',
  //   title: 'Lets Play Apex Legends',
  //   summary: 'with Boys at Work'
  // },
  // {
  //   start: '2017-09-08 11:30:00',
  //   end: '2017-09-08 12:30:00',
  //   title: 'Dr. Mariana Joseph',
  //   summary: '3412 Piedmont Rd NE, GA 3032'
  // },
  // {
  //   start: '2017-09-10 12:10:00',
  //   end: '2017-09-10 13:45:00',
  //   title: 'Merge Request to React Native Calendars',
  //   summary: 'Merge Timeline Calendar to React Native Calendars'
  // }
// ];










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

// ========================agenda comments============================


// make a function that recieves the data from the databse and returns the formatted data that is recieved by the front-end.

const tasks = {
  '2021-11-01':[
    {
    start: '2021-11-01 01:30:00',
    end: '2021-11-01 02:30:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    color: '#e6add8'
    },
    {
    start: '2021-11-01 03:30:00',
    end: '2021-11-01 04:30:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    color: '#e6add8'
    },
    {
    start: '2021-11-01 06:30:00',
    end: '2021-11-01 06:30:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    color: '#e6add8'
    },


],
  '2021-11-02':[{
    start: '2021-11-02 01:30:00',
    end: '2021-11-02 02:30:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    color: '#e6add8'
  }],
  // '2021-11-05':[]
  // '2021-11-08',
  // '2021-11-07',
  // '2021-11-18',
  // '2021-11-17',
  // '2021-11-28',
  // '2021-11-29'
};
const AgendaScreen = ({navigation, route }) => {

  const [selectCol, setSelectCol] = useState('red')
  const[EVENTS, setEVENTS] = useState(tasks[ChosenDay])
  const ChosenDay = route.params.day
  
  console.log ("hey you selected", tasks[ChosenDay])

// if(ChosenDay == '2021-11-02')
// {
//   useEffect (()=>{


//     setEVENTS([
//       {
//         start: '2021-12-06 01:30:00',
//         end: '2021-12-06 02:30:00',
//         title: 'Dr. Mariana Joseph',
//         summary: '3412 Piedmont Rd NE, GA 3032',
//         color: '#e6add8'
//       }])

//   },[])
// }


if(ChosenDay)
{
  useEffect (()=>{


    setEVENTS(tasks[ChosenDay])

  },[])
}

  const markedDates = {
    [selected]: {
      selected: true,
      selectedColor: selectCol
    }
  }


  


  

  // relatable code on line 286-294, 211-230

  const  [selected, setSelected] = useState({})

  const [items, setItems] = useState(Events)

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

        
        <IndividualEventCard
          EventBackgroundColor="#EC8B1A"/>
    )
  }

  const renderEmptyDate = () => {
    return [];
  }

  return (
  
    <View style=
    {{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      backgroundColor: primCol
    }}>

 
       
    <AgendaWrapper> 
      <View style ={{flex:1, width:'100%',}}>
        
            

                 <Timeline events={EVENTS} 
                  pastScrollRange={10}
                  futureScrollRange={10}
                  format24h={false}
                  theme={{ 
                    timeLabel:{color:secCol},
                    contentStyle:{backgroundColor:colors.primCol}
                    }}/>
                
            {/* <Button 
            title="Add Task"
            onPress={()=>{
              setItems( {...items, ...trialPush})
            }} /> */}

       
        </View>
      </AgendaWrapper>   
    
       <NavBarCon>
          <NavBar/>
        </NavBarCon>

    </View>
   

  );
}


export default AgendaScreen




 {/* <Agenda 
                items={items}
                loadItemsForMonth={loadItems}
                renderItem={renderItem}
                selected={ChosenDay}
                renderEmptyData={renderEmptyDate}
               
                theme=
                {{ 
                  calendarBackground: colors.primCol,
                  agendaKnobColor: colors.secCol,
                  backgroundColor:colors.primCol,
                  
                  // weekdays colors
                  textSectionTitleColor: 'black',
                  // 
                  
                  
              agendaDayTextColor: colors.secCol, 
              agendaDayNumColor: colors.secCol,
              // agendaTodayColor: 
              // monthTextColor: 
              // textDefaultColor: 
              // todayBackgroundColor: 
              // textSectionTitleColor: 
              selectedDayBackgroundColor: colors.butCol,
              selectedDayTextColor:'black',
              // dayTextColor: 
              dotColor: 'red'
              // tasks indicator
              
                

              // textDisabledColor: 
                }}
                 */}
                 {/* <CalendarList
                 horizontal
                 onDayPress={(day)=>{
                  console.warn(day.dateString)
                  setSelectCol("green")
                  
                  }}
                markedDates={markedDates}
                 
                 /> */}
