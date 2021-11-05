import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import AppHeader from '../comps/AppHeader';
import TaskBtn from '../comps/taskBtn';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar';
import TaskCardArea from '../comps/taskCardArea';
import CourseEventCard from '../comps/CourseEventCard';
import GroupEventCard from '../comps/GroupEventCard';
import IndividualEventCard from '../comps/IndividualEventCard';
import {category} from '../data/category'
import {coursesData} from '../data/tasks'
import {groupsData} from '../data/tasks'
import {eventsData} from '../data/tasks'



const TaskButtonsWrapper = styled.View`
margin-left:10px;
margin-top:8%;
margin-bottom:8%;
display:flex;
flex-wrap:nowrap;
flex-direction:row;
justify-content:space-between;
width:80%;
`
const TaskButtonWrapper = styled.View`
margin:3%
`
const CourseEventCardWrapper =styled.View`
height:100%;

`
const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92.5%;
height:100%
width:100%
left:5%
`

const TaskCardsWrapper = styled.ScrollView`
position:absolute;
z-index:2;
top:300px
height:52.5%;
width:100%;
`



const TaskboardScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(category)
  const [courses, setCourses] = useState(coursesData)
  const [groups, setGroups] = useState(groupsData)
  const [events, setEvents] = useState(eventsData)
  const [showcourses, setShowCourses] = useState(showcourses)
  const [course, setCourse] = useState(false)
  const [group, setGroup] = useState(false)
  const [event, setEvent] = useState(false)
  const [coursebgc, setCourseBgc] = useState(false)
  const [eventbgc, setEventBgc] = useState(false)
  const [groupbgc, setGroupBgc] = useState(false)
  const [textColorC, setTextColorC] = useState(false)
  const [textColorG, setTextColorG] = useState(false)
  const [textColorE, setTextColorE] = useState(false)
  
  // const randomColors = () => {
  //   const randomColor = Math.floor(Math.random() * 16777215)
  //     .toString(16)
  //     .padStart(6, '0');
  //   return `#${randomColor}`;
  // };
  var randomColor = require('randomcolor'); // import the script
  var color = randomColor(); // a hex code for an attractive color
  randomColor({
    luminosity: 'bright',
    format: 'rgb' // e.g. 'rgb(225,200,20)'
 });

  const coursePress =()=>{
    setCourse(true)
    setGroup(false)
    setEvent(false)
    setCourseBgc(true)
    setEventBgc(false)
    setGroupBgc(false)
    setTextColorC(true)
    setTextColorG(false)
    setTextColorE(false)


  }
  const groupPress =()=>{
    setGroup(true)
    setCourse(false)
    setEvent(false)
    setGroupBgc(true)
    setEventBgc(false)
    setCourseBgc(false)
    setTextColorC(false)
    setTextColorE(false)
    setTextColorG(true)

  }
  const eventPress =()=>{
    setEvent(true)
    setCourse(false)
    setGroup(false)
    setCourseBgc(false)
    setEventBgc(true)
    setGroupBgc(false)
    setTextColorC(false)
    setTextColorE(true)
    setTextColorG(false)

  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <AppHeader text="Task" display="none" />
      <TaskButtonsWrapper>

  <TaskBtn textColor={textColorC ? "#ffffff" : "black"} taskBtnColor={coursebgc?"#3D5A80":"#E5E5E5"} taskNum={category.taskCategory.Course.taskNum} taskCate={category.taskCategory.Course.taskCate}  onBtnPress={coursePress}/>
      <TaskBtn textColor={textColorG ? "#ffffff" : "black"} taskBtnColor={groupbgc?"#3D5A80":"#E5E5E5"}  taskNum={category.taskCategory.Group.taskNum} taskCate={category.taskCategory.Group.taskCate}   onBtnPress={groupPress}/>
      <TaskBtn textColor={textColorE ? "#ffffff" : "black"} taskBtnColor={eventbgc?"#3D5A80":"#E5E5E5"} taskNum={category.taskCategory.Event.taskNum} taskCate={category.taskCategory.Event.taskCate}  onBtnPress={eventPress}/>
      
      </TaskButtonsWrapper>
      <TaskCardArea/>   
     { course ? (<TaskCardsWrapper>
      {
      courses.map((o, i) => (
     
<CourseEventCard  key={i} id={o.id} EventTitle={o.EventTitle} EventDescrip={o.EventDescrip} EventStartTime={o.EventStartTime} EventDueTime={o.EventDueTime} EventBackgroundColor= {randomColor()}/>

      )
      )
      }
      </TaskCardsWrapper>) : null}
      { group ? (<TaskCardsWrapper>
      {
      groups.map((o, i) => (
     
<GroupEventCard  key={i} id={o.id} EventTitle={o.EventTitle} EventDescrip={o.EventDescrip} EventStartTime={o.EventStartTime} EventDueTime={o.EventDueTime} EventBackgroundColor= {randomColor()}/>

      )
      )
      }
      </TaskCardsWrapper>) : null}
      { event ? (<TaskCardsWrapper>
      {
      events.map((o, i) => (
     
<IndividualEventCard  key={i} id={o.id} EventTitle={o.EventTitle} EventDescrip={o.EventDescrip} EventStartTime={o.EventStartTime} EventDueTime={o.EventDueTime} EventBackgroundColor= {randomColor()}/>

      )
      )
      }
      </TaskCardsWrapper>) : null}
      <NavBarCon>
      <NavBar  addEventPress={()=>navigation.navigate('TaskCreating') }/>
      </NavBarCon>
      
    </View>
  );
}


export default TaskboardScreen