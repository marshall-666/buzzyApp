// imports from dependancies ==========
import React, { useState, useEffect,useContext } from 'react';
import { Button, View, Text,ScrollView, FlatList, Pressable, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styled from 'styled-components/native';
import axios from 'axios';

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

  
  
  // state for switching between courses groups and events
  const [courses, setCourses] = useState(true);
  const [groups, setGroups] = useState(false);
  const [events, setEvents] = useState(false);

  // relatable code on line 286-294, 211-230
  
  const [selected, setSelected] = useState({});
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

  var today = new Date();

 
// const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
  
    <View style=
    {{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      backgroundColor: primCol,
    }}>

      <Wrapper
          > 


          {/* functions on 211-230============= */}
        <TaskBtnCont>
        <View style={styles.shadows}> 
          <TaskBtn 
              taskNum={courseTasks.length} 
              taskCate={category.taskCategory.Course.taskCate}
              taskBtnColor={ courses ? colors.secCol : 'white' }
              textColor= {courses ? 'white' : colors.secCol }
              onBtnPress={coursePress}  
          />
        </View>  


        <View style={styles.shadows}>
          <TaskBtn 
              taskNum={grpTasks.length} 
              taskCate={category.taskCategory.Group.taskCate}
              taskBtnColor={ groups ? colors.secCol : 'white' }
              textColor= {groups ? 'white' : colors.secCol }

              onBtnPress={groupPress}   
          />
        </View>

        < View style={styles.shadows}>
          <TaskBtn 
              taskNum={eventTasks.length} 
              taskCate={category.taskCategory.Event.taskCate}
              taskBtnColor={ events ? colors.secCol : 'white' }
              textColor= {events ? 'white' : colors.secCol }
              onBtnPress={eventPress}  

          />
        </View>
        </TaskBtnCont>

         
      { courses ?
        <FlatList 
        
        
          // initialNumToRender={3}
          contentContainerStyle={{ maxWidth:'100%',}}
          data = {courseTasks}

          renderItem={({item})=> 
                <IndividualEventCard 
                  EventBackgroundColor="#EC8B1A"
                  EventTitle=    {item.title}
                  EventDescrip = {item.summary}
                  EventStartTime={item.start}
                  EventDueTime = {item.end} 
                  IconDisplay="none" 
                  onCardPress=  {()=>{navigation.navigate('CourseInfo')}}
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
                onEditPress={()=>{navigation.navigate('EditTask', item.id)}}

                   /> }
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