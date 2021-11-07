import React, { useState, useEffect } from 'react';
import { Button, View, Text,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppHeader from '../comps/AppHeader';
import TaskBtn from '../comps/taskBtn';
import {Task} from '../comps/Task'
import styled from 'styled-components/native';
import TaskTable from '../comps/TaskTable';
import NavBar from '../comps/NavBar'
import { HomeCalendar } from '../comps/Calendar';
import { Agenda } from 'react-native-calendars'
import { Configurations } from '../PropConfig/Props'
import { SelectedDay } from '../data/test';
import { Calendar } from 'react-native-calendars';

// import {taskCategory} from '../data/category'

const secCol = Configurations.colors.secCol;

const Wrapper =styled.ScrollView`

display:${props => props.calDisplay}
`

const AgendaWrapper = styled.View`
height:80%;
width:100%;
display:${props => props.agendaDisplay}
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


const DashboardScreen = ({navigation }) => {


  const [calDisplay, setCalDisplay] = useState('flex')
  const [agendaDisplay, setAgendaDisplay] = useState('none')

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
  
  const [selected, setSelected] = useState({});
  const [daySelect, setDaySelect] = useState(undefined)
  const [selectCol, setSelectCol] = useState('blue')
  
  
  
  const onDayPress = day => {
    
  
    //  const exportDate = day.dateString
    //  console.log("hey this is the date ", exportDate)

    setSelected(day.dateString);
    console.log(day.dateString)  
    console.log(selected)
    
    if (selected === day.dateString)
    {
      setSelectCol('red')
      // navigation.navigate('Agenda')
      setCalDisplay('none')
      setAgendaDisplay('flex')
      setDaySelect(day.dateString)
    }
    else
    {
      setSelectCol('blue')
    }
      
  };

  const onEventPress = ()=>
  {
    navigation.navigate('TaskCreating')
  }

  const onCalendarPress = ()=>
  {
    navigation.navigate('Dashboard')
  }

  return (
  
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', }}>
      <AppHeader 
        text="Task"
        onBackPress={()=>{
          setCalDisplay('flex') 
          setAgendaDisplay('none')}} />
      <Wrapper calDisplay={calDisplay}> 

        <Calendar 

theme={{
  backgroundColor: '#ffffff',
  calendarBackground: '#94bdd4',
  textSectionTitleColor: 'black',
  textSectionTitleDisabledColor: '#d9e1e8',
  selectedDayBackgroundColor: '#00adf5',
  selectedDayTextColor: '#ffffff',
  todayTextColor: '#00adf5',
  dayTextColor: '#2d4150',
  textDisabledColor: '#d9e1e8',
  dotColor: '#00adf5',
  selectedDotColor: '#ffffff',
  arrowColor: '#ffffff',
  disabledArrowColor: '#d9e1e8',
  monthTextColor: 'blue',
  indicatorColor: 'blue',
  // textDayFontFamily: 'monospace',
  // textMonthFontFamily: 'monospace',
  // textDayHeaderFontFamily: 'monospace',
  // textDayFontWeight: '300',
  // textMonthFontWeight: 'bold',
  // textDayHeaderFontWeight: '300',
  textDayFontSize: 16,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 16
}}




        // onDayLongPress={()=>{setSelectCol('green')}}
        onDayPress={onDayPress}
                style=
                {{
                    maxWidth: 400,
                    width:400,
                    height: 600
                }}
                markedDates={{
            [selected]: {
              selected: true,
              disableTouchEvent: false,
              selectedColor: selectCol ,
              selectedTextColor: 'white'
            }
          }}
          />
    </Wrapper>

    <AgendaWrapper agendaDisplay = {agendaDisplay} > 
      <View style ={{flex:1, width:'100%',}}>
             <Agenda 

       
                items={items}
                loadItemsForMonth={loadItems}
                renderItem={renderItem}
                selected={daySelect}
theme={{ 
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

            <Button 
            title="Add Task"
            onPress={()=>{
              setItems( {...items, ...trialPush})
            }} />

        </View>
      </AgendaWrapper>   
    
       <NavBarCon>
          <NavBar 
            // addEventPress={onEventPress}
            // onCalendarPress={onCalendarPress}
            />
        </NavBarCon>

    </View>
   

  );
}


export default DashboardScreen


