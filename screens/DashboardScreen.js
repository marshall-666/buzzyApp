// imports from dependancies ==========
import React, { useState, useEffect } from 'react';
import { Button, View, Text,ScrollView, FlatList, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Calendar } from 'react-native-calendars';
import { Agenda } from 'react-native-calendars'
import styled from 'styled-components/native';


// Component imports===============
import TaskBtn from '../comps/taskBtn';
import NavBar from '../comps/NavBar'
import IndividualEventCard from '../comps/IndividualEventCard';
import { ToDate } from '../comps/ToDate';


// Data imports===============
import { SelectedDay } from '../data/test';
import { Configurations } from '../PropConfig/Props'
import { groupsData } from '../data/tasks';
import {coursesData} from '../data/tasks';
import {eventsData} from '../data/tasks'
import {category} from '../data/category'
<<<<<<< .merge_file_a04160
import { Events } from '../data/Events';


=======
import { ToDate } from '../comps/ToDate';
import {GroupEventCard} from '../comps/GroupEventCard';
>>>>>>> .merge_file_a25644


// import {taskCategory} from '../data/category'

const colors = Configurations.colors;
const secCol = colors.secCol;
const accent = colors.butCol;

// const objectTest= {

//   '2021-11-17': {marked: true,dotColor: 'red'},
//   '2021-11-18': {marked: true, dotColor: 'red', activeOpacity: 0},

// }
const something = '2021-11-05';

const Wrapper =styled.ScrollView`

`



const TaskButtonWrapper = styled.View`
justify-content:center
margin:3.5%;
margin-top:5%;
margin-bottom:5%;
display:flex;
flex-wrap:nowrap;
flex-direction:row;
`
const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92.5%;
height:100%
width:100%
left:5%
`
const TaskBtnCont = styled.View`
flex-direction:row;
padding:20px;
justify-content:space-evenly;
`

// ========================agenda comments===========================
const selectedDay = SelectedDay
const primCol = Configurations.colors.primCol


const CalCont = styled.View`
background-color:${primCol};
height:400px;
width:100%;
`
const HeadTxt = styled.Text``



// ========================agenda comments============================


const DashboardScreen = ({navigation }) => {
  const nextDays = [
    '2021-11-01',
    '2021-11-05',
    '2021-11-08',
    '2021-11-07',
    '2021-11-18',
    '2021-11-17',
    '2021-11-28',
    '2021-11-29'
  ];
  
  // console.log(nextDays[1])
  // for(let i=0;i<nextDays.length;i++)
  // {
  //   console.log(nextDays[i])
    
  // }
  
  let newDaysObject = {};
  
  nextDays.forEach((day) => {
    newDaysObject[day] = {
       marked: true, 
       dotColor: colors.lightBg, 
       selectedDotColor: 'red',
       
      //  selectedColor: selected,
        
    };
  });

  const [calDisplay, setCalDisplay] = useState('flex');
  // state for switching between courses groups and events
  const [courses, setCourses] = useState(true);
  const [groups, setGroups] = useState(false);
  const [events, setEvents] = useState(false);

  // relatable code on line 286-294, 211-230
  
  const [selected, setSelected] = useState({});
  const [markedDates, setMarkedDates] = useState({});
  const [selectCol, setSelectCol] = useState('#F5F5E1')
  
  
  
  const onDayPress = day => {
    
  
    //  const exportDate = day.dateString
    //  console.log("hey this is the date ", exportDate)

    setSelected(day.dateString);

    console.log(day.dateString)  
    console.log(selected)
    
    if (selected === day.dateString)
    {
      setSelectCol(accent)
      navigation.navigate('Agenda', {day: selected})
    }
    else
    {
      setSelectCol('#F5F5E1')
    }
    

  };


  const coursePress =()=> 
  {
    setCourses(true);
    setGroups(false);
    setEvents(false);
  }
  
  const groupPress =()=> 
  {
    setCourses(false);
    setGroups(true);
    setEvents(false);
  }
  
  const eventPress =()=> 
  {
    setCourses(false);
    setGroups(false);
    setEvents(true);
  }



  return (
  
    <View style=
    {{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      backgroundColor: primCol
    }}>


      {/* <AppHeader 
        text="Task"
        onBackPress={()=>{
          setCalDisplay('flex') 
          setAgendaDisplay('none')}} /> */}
      <Wrapper> 
    
      <ToDate/>
 
          
        <Calendar 

          
          theme=
          {{
            backgroundColor: '#ffffff',
            calendarBackground: '#94bdd4',
            textSectionTitleColor: 'black',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#F5F5E1',
            selectedDayTextColor: 'black',
            todayTextColor: 'white',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: '#ffffff',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: colors.secCol,
            indicatorColor: 'blue',
            // textDayFontFamily: 'monospace',
            // textMonthFontFamily: 'monospace',
            // textDayHeaderFontFamily: 'monospace',
            // textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            // textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}



          enableSwipeMonths={true}
        // onDayLongPress={()=>{setSelectCol('green')}}
          onDayPress={onDayPress}
            style=
              {{
                maxWidth: 400,
                width:400,
                height: 400,
              }}
              // markedDates={{
              //   '2012-05-08': {
              //     selected: true,
              //     dots: [
              //       {key: 'vacation', color: 'blue', selectedDotColor: 'red'},
              //       {key: 'massage', color: 'red', selectedDotColor: 'white'}
              //     ]
              //   },
              //   '2012-05-09': {
              //     disabled: true,
              //     dots: [
              //       {key: 'vacation', color: 'green', selectedDotColor: 'red'},
              //       {key: 'massage', color: 'red', selectedDotColor: 'green'}
              //     ]
              //   }
              // }}
              markedDates= {{
                
            ...newDaysObject,
                
            [selected]: 
              {
                  selected: true,
                  disableTouchEvent: false,
                  selectedColor: selectCol ,
                  selectedTextColor: 'black',
                  
              }

            
            
            }}
          />

          {/* functions on 211-230============= */}
        <TaskBtnCont>
          <TaskBtn 
              taskNum={category.taskCategory.Course.taskNum} 
              taskCate={category.taskCategory.Course.taskCate}
              taskBtnColor={ courses ? colors.secCol : 'white' }
              textColor= {courses ? 'white' : colors.secCol }
              onBtnPress={coursePress}  
          />
          
          <TaskBtn 
               taskNum={category.taskCategory.Group.taskNum} 
               taskCate={category.taskCategory.Group.taskCate}
              taskBtnColor={ groups ? colors.secCol : 'white' }
              textColor= {groups ? 'white' : colors.secCol }

               onBtnPress={groupPress}   
          />

          <TaskBtn 
              taskNum={category.taskCategory.Event.taskNum} 
              taskCate={category.taskCategory.Event.taskCate}
              taskBtnColor={ events ? colors.secCol : 'white' }
              textColor= {events ? 'white' : colors.secCol }
              onBtnPress={eventPress}  

          />
        </TaskBtnCont>

          
      { courses ?
        <FlatList 
          data = {coursesData}
          renderItem={({item})=> 
                <IndividualEventCard 
                  EventBackgroundColor="#EC8B1A"
                  EventTitle={item.EventTitle}
                  EventDescrip = {item.EventDescrip}
                  EventStartTime={item.EventStartTime}
                  EventDueTime = {item.EventDueTime}
                  IconDisplay="none" /> }
        /> : null
      }
      { groups ?
        <FlatList 
          data = {groupsData}
          renderItem={({item})=> 
                <IndividualEventCard 
                  EventTitle={item.EventTitle}
                  EventDescrip = {item.EventDescrip}
                  EventStartTime={item.EventStartTime}
                  EventDueTime = {item.EventDueTime} /> }
        /> : null
      }
      { events ?
        <FlatList 
          data = {eventsData}
          renderItem={({item})=> 
                <IndividualEventCard 
                  EventTitle={item.EventTitle}
                  EventDescrip = {item.EventDescrip}
                  EventStartTime={item.EventStartTime}
                  EventDueTime = {item.EventDueTime}
                  IconDisplay="none" /> }
        /> : null
      }
        {/* <IndividualEventCard EventBackgroundColor={colors.accColOne}/> */}
          
    </Wrapper>
    
      <NavBarCon>
          <NavBar/>
      </NavBarCon>

    </View>
   

  );
}


export default DashboardScreen


// {

                
                  
//   newDaysObject,
//   // '2021-11-18': {marked: true, dotColor: 'red', activeOpacity: 0},
//           [selected]: {
//             selected: true,
//             disableTouchEvent: false,
//             selectedColor: selectCol ,
//             selectedTextColor: 'black'
//           }
//   }