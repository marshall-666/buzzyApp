// imports from dependancies ==========
import React, { useState, useEffect,useContext } from 'react';
import { Button, View, Text,ScrollView, FlatList, Pressable, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styled from 'styled-components/native';
import axios from 'axios';
import { useFonts } from "expo-font";

// Component imports===============
import TaskBtn from '../comps/taskBtn';
import NavBar from '../comps/NavBar'
import IndividualEventCard from '../comps/IndividualEventCard';



// Data imports===============
import talktoserver from "../api/talktoserver"
import { SelectedDay } from '../data/test';
import { Configurations } from '../PropConfig/Props'
import { groupsData } from '../data/tasks';
import {coursesData} from '../data/tasks';
import {eventsData} from '../data/tasks'
import {category} from '../data/category'
import { ToDate } from '../comps/ToDate';
import { Events } from '../data/Events';
import {GroupEventCard} from '../comps/GroupEventCard';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import {diveIn, diveOut} from '../assets/animations/animations'

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
const colors = Configurations.colors;
const secCol = colors.secCol;
const accent = colors.butCol;



const Wrapper = styled.ScrollView`

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
top:92%;
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



// ========================agenda comments============================


const DashboardScreen = ({navigation }) => {
  const [newDaysObject, setNewDaysObject]= useState({})
  const [dbResult, setDbResult] = useState()
  const { user,users } = useContext(AuthenticatedUserContext);
  const [grpTasks, setGrpTasks] = useState([])
  const [courseTasks, setCourseTasks] = useState([])
  const [eventTasks, setEventTasks] = useState([])
  // const courseTasks = []
  const individualTasks =[]
  // console.log('hi')
// use effect function for loading the tasks to the calendar
  useEffect (()=>{
    
      var loadTaskList = {
        op: 'get_tasks_ls',
        user_id: user.uid, // CONNECT THIS TO LOGGED IN USER(Fire Auth)
    }
    
      talktoserver(loadTaskList).then((rd) => {
        setDbResult(rd)
      })

  },[dbResult])


// console.log('hi')
// useEffect to load the tasks for cards and regular tasks


  useEffect (()=>{
  
    
    const GetDays = async ()=>{
    const whatever = {
      
      day:'2021-11-10',
      start:'2021-11-10 11:30',
      end:'2021-11-10 12:30',
      title:'something to test',
      summary:'does it work?' 

    }
        const daysObject = dbResult
        // console.log(daysObject)
        const newArray=[]
        const groupTask = []
        for(let i=0; i<daysObject.length; i++)
        {
          newArray.push(daysObject[i].day)
          
        }      
        
        let newObject = newArray.map(function(obj)
        {
            return{
              [obj]:[]
            }
        })
      
        const eventDays = newObject.reduce(((r,c)=>Object.assign(r,c)),{})
        
        let dailyEvents = {}
  
        Object.keys(eventDays).forEach((day) => 
          {
            dailyEvents[day] =  
                {
                  marked: true, 
                  dotColor: colors.butCol, 
                };
          }
        );
           
        // ================================================================
          const courseTaskArray = daysObject.filter(function(el)
              {
                return el.task_category == 'course'
              })
              setCourseTasks(courseTaskArray)
              
          const groupTaskArray = daysObject.filter(function(el)
              {
                return el.task_category == 'group'
              })
              setGrpTasks(groupTaskArray)
            
          const eventTaskArray = daysObject.filter(function(el)
              {
                return el.task_category == 'personal'
              })
              setEventTasks(eventTaskArray)
        // ================================================================





        var today = new Date();

        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        
        



        setNewDaysObject(dailyEvents)


    
      }
      GetDays()

      
      const taskList = dbResult
      // console.log(dbResultTask[0].cname)
     
  },[dbResult])

  // console.log(dbResult)

  
  let [fontsLoaded]= useFonts({
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf')
  })
  // state for switching between courses groups and events
  const [courses, setCourses] = useState(true);
  const [groups, setGroups] = useState(false);
  const [events, setEvents] = useState(false);

  // relatable code on line 286-294, 211-230
  
  const [selected, setSelected] = useState({});
  const [selectCol, setSelectCol] = useState('#F5F5E1')
  const [anim, setAnim] = useState()
  
  
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

  var today = new Date();

 
// const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
  
    <View style=
    {{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      backgroundColor: primCol,
      
      maxWidth:"100%"
    }}>

      <Wrapper
      contentContainerStyle={{justifyContent:'space-around'}}
          > 
    
      <ToDate
        ff="Poppins-Medium"/>
 
          
        <Calendar 

          
          theme=
          {{
            backgroundColor: '#ffffff',
            calendarBackground: '#94bdd4',
            textSectionTitleColor: 'black',
            textSectionTitleDisabledColor: '#d9e1e8',
            selectedDayBackgroundColor: '#F5F5E1',
            selectedDayTextColor: 'black',
            todayTextColor: 'yellow',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: '#ffffff',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: colors.secCol,
            indicatorColor: 'blue',
            textDayFontFamily: 'Galvji',
            textMonthFontFamily: 'Galvji',
            textDayHeaderFontFamily: 'Galvji',
            // textDayFontWeight: '300',
            
            // textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 13,
            dotStyle:{width:12, height:3}
          }}



          enableSwipeMonths={true}
        // onDayLongPress={()=>{setSelectCol('green')}}
          onDayPress={onDayPress}
            style=
              {{
                maxWidth: '100%',
                width:'100%',
                height: 350,
              }}
            // markingType={'multi-dot'}
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
        <View style={styles.shadows}> 
          <TaskBtn 
              animation={anim}
              delay={1000}
              duration={3000}
              taskNum={courseTasks.length} 
              taskCate={category.taskCategory.Course.taskCate}
              taskBtnColor={ courses ? colors.secCol : 'white' }
              textColor= {courses ? 'white' : colors.secCol }
              onBtnPress={coursePress}  
              fe='Poppins-Medium'
          />
        </View>  


        <View style={styles.shadows}>
          <TaskBtn 
              taskNum={grpTasks.length} 
              taskCate={category.taskCategory.Group.taskCate}
              taskBtnColor={ groups ? colors.secCol : 'white' }
              textColor= {groups ? 'white' : colors.secCol }
              fe='Poppins-Medium'
              
              onBtnPress={groupPress}   
          />
        </View>

        < View style={styles.shadows}>
          <TaskBtn 
              taskNum={eventTasks.length} 
              taskCate={category.taskCategory.Event.taskCate}
              taskBtnColor={ events ? colors.secCol : 'white' }
              textColor= {events ? 'white' : colors.secCol }
              fe='Poppins-Medium'
              onBtnPress={eventPress}  

          />
        </View>
        </TaskBtnCont>

    <View >     
      { courses ?
        
        <FlatList 
        
          // initialNumToRender={3}
          contentContainerStyle={{ maxWidth:'100%', }}
          data = {courseTasks}

          renderItem={({item})=> 
                <IndividualEventCard 
                  EventBackgroundColor="#EC8B1A"
                  EventTitle=    {item.title}
                  EventDescrip = {item.summary}
                  EventStartTime={item.start}
                  EventDueTime = {item.end} 
                  IconDisplay="none" 
                  ff="Poppins-Medium"
                  fe= "Poppins-Regular"
                  // onCardPress=  {()=>{navigation.navigate('CourseInfo')}}
                  onEditPress={()=>{navigation.navigate('EditTask', item.id)}}
                  /> }

        /> : null
      }
      
      { groups ?
        <FlatList 
          contentContainerStyle={{ maxWidth:'100%',}}
          data = {grpTasks}
          renderItem={({item})=> 
                <IndividualEventCard 
                  EventTitle=    {item.title}
                  EventDescrip = {item.summary}
                  EventStartTime={item.start}
                  EventDueTime = {item.end} 
                  ff="Poppins-Medium"
                  fe= "Poppins-Regular"
                  onEditPress={()=>{navigation.navigate('EditTask', item.id)}}
                  IconDisplay='none'
                  /> }
                  
        /> : null
      }

      { events ?
        <FlatList 
          contentContainerStyle={{ maxWidth:'100%'}}
          data = {eventTasks}
          renderItem={({item})=> 
                <IndividualEventCard 
                EventTitle=    {item.title}
                EventDescrip = {item.summary}
                EventStartTime={item.start}
                EventDueTime = {item.end}
                IconDisplay =   'none' 
                ff="Poppins-Medium"
                fe= "Poppins-Regular"
                onEditPress={()=>{navigation.navigate('EditTask', item.id)}}

                   /> }
        /> : null
      }
        {/* <IndividualEventCard EventBackgroundColor={colors.accColOne}/> */}
       </View>   
    </Wrapper>
    
      <View style={{alignItems:'center', marginBottom:10}}>
          <NavBar/>
      </View>

    </View>
   

  );
}

const styles = StyleSheet.create({

  shadows: 
    {
      shadowColor: '#5B7797',
      shadowOffset: {width: 10, height: 8},
      shadowOpacity: 1,
      shadowRadius: 7,
    }
 
});

export default DashboardScreen




{/* <FlatList
  data={data}
  keyExtractor={(item, index) => `key-${index}`}
  ListHeaderComponent={() => (
    <SomeComponents>
      ...Some components those need to be on top of the list
    </SomeComponents>
  )}
  ListFooterComponent={() => (
    <SomeComponents>
      ...Some components those need to be below the list
    </SomeComponents>
  )}
  renderItem={({ item, index}) => (somethings)}
/> */}