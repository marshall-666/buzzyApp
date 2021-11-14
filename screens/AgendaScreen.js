// imports from dependancies ==========
import React, { useState, useEffect } from 'react';
import { Button, View, Text,ScrollView, FlatList, Pressable } from 'react-native';
import { Agenda } from 'react-native-calendars'
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


// import {taskCategory} from '../data/category'

const colors = Configurations.colors;
const secCol = colors.secCol;
const accent = colors.butCol;



const Wrapper =styled.ScrollView`

display:${props => props.calDisplay}
`

const AgendaWrapper = styled.View`
height:80%;
width:100%;
display:flex;
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

// ========================agenda comments============================


const AgendaScreen = ({navigation, route }) => {


  
  const ChosenDay = route.params.day
  
  console.log ("hey you selected", ChosenDay)


  


  // state for switching between courses groups and events
  const [courses, setCourses] = useState(true);
  const [groups, setGroups] = useState(false);
  const [events, setEvents] = useState(false);

  // relatable code on line 286-294, 211-230


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

        
        <IndividualEventCard/>
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


      {/* <AppHeader 
        text="Task"
        onBackPress={()=>{
          setCalDisplay('flex') 
          setAgendaDisplay('none')}} /> */}
    
 
       
    <AgendaWrapper> 
      <View style ={{flex:1, width:'100%',}}>
        
             <Agenda 
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
                
 />

            <Button 
            title="Add Task"
            onPress={()=>{
              setItems( {...items, ...trialPush})
            }} />

       
        </View>
      </AgendaWrapper>   
    
       <NavBarCon>
          <NavBar/>
        </NavBarCon>

    </View>
   

  );
}


export default AgendaScreen


