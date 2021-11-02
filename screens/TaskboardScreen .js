import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppHeader from '../comps/AppHeader';
import TaskBtn from '../comps/taskBtn';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar';
import TaskCardArea from '../comps/taskCardArea';
import CourseEventCard from '../comps/CourseEventCard';
import GroupEventCard from '../comps/GroupEventCard';

const TaskButtonsWrapper = styled.View`
margin-left:10px;
margin-top:4%;
margin-bottom:4%;
display:flex;
flex-wrap:nowrap;
flex-direction:row;
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
top:280px
height:52.5%;
width:100%;
`


const taskCategory = {
  Course: {
    id: 1,
    taskNum: "8",
    taskCate: "Courses",
  },
  Group: {
    id: 2,
    taskNum: "3",
    taskCate: "Events",
  },
  Event: {
    id: 3,
    taskNum: "10",
    taskCate: "Tasks",
  }
}
const groupsData=[
  {
    id: 1,
    EventTitle: "Workshop",
    EventDescrip: "project 2 meeting",
    EventDueDate:"Nov 05st"
},
{
  id: 2,
  EventTitle: "Coaching lesson",
  EventDescrip: "PHP && Database",
  EventDueDate:"Nov 3st"
},
{
  id: 3,
  EventTitle: "Meeting",
  EventDescrip: "Asset Design & Intergration",
  EventDueDate:"Oct 31st"
},
{
  id: 4,
  EventTitle: "Meeting",
  EventDescrip: "Asset Design & Intergration",
  EventDueDate:"Oct 31st"
},

]

const coursesData=[
  {
    id: 1,
    EventTitle: "MDIA 3109",
    EventDescrip: "Advance Phoshop",
    EventDueDate:"Oct 31st"
},
{
  id: 2,
  EventTitle: "FMGT 1152",
  EventDescrip: "Accounting for th Manager",
  EventDueDate:"Oct 31st"
},
{
  id: 3,
  EventTitle: "MDIA 3126",
  EventDescrip: "Asset Design & Intergration",
  EventDueDate:"Oct 31st"
},
{
  id:4,
  EventTitle: "MKTG 1219",
  EventDescrip: "Professional Sles Skills",
  EventDueDate:"Oct 31st"
},
{
  id: 5,
  EventTitle: "COMP 3130",
  EventDescrip: "Web Development 3",
  EventDueDate:"Oct 31st"
},
{
  id: 6,
  EventTitle: "MDIA 3106",
  EventDescrip: "Design 2",
  EventDueDate:"Oct 31st"
},
{
  id: 7,
  EventTitle: "MDIA 3103",
  EventDescrip: "Project 2",
  EventDueDate:"Oct 31st"
},
{
  id: 8,
  EventTitle: "COMP 2200",
  EventDescrip: "Business communication",
  EventDueDate:"Oct 31st"
}
]
const TaskboardScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(taskCategory)
  const [courses, setCourses] = useState(coursesData)
  const [groups, setGroups] = useState(groupsData)
  const [showcourses, setShowCourses] = useState(showcourses)
  const [course, setCourse] = useState(false)
  const [group, setGroup] = useState(false)
  const [event, setEvent] = useState(false)

  const coursePress =()=>{
    setCourse(true)
    setGroup(false)
    setEvent(false)
  }
  const groupPress =()=>{
    setGroup(true)
    setCourse(false)
    setEvent(false)
  }
  const eventPress =()=>{
    setEvent(true)
    setCourse(false)
    setGroup(false)
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <AppHeader text="Task" />
      <TaskButtonsWrapper>

      <TaskBtn  taskNum={taskCategory.Course.taskNum} taskCate={taskCategory.Course.taskCate}  onBtnPress={coursePress}/>
      <TaskBtn taskNum={taskCategory.Group.taskNum} taskCate={taskCategory.Group.taskCate}   onBtnPress={groupPress}/>
      <TaskBtn taskNum={taskCategory.Event.taskNum} taskCate={taskCategory.Event.taskCate}  onBtnPress={eventPress}/>
      
      </TaskButtonsWrapper>
      <TaskCardArea/>   
     { course ? (<TaskCardsWrapper>
      {
      courses.map((o, i) => (
     
<CourseEventCard  key={i} id={o.id} EventTitle={o.EventTitle} EventDescrip={o.EventDescrip} EventDueDate={o.EventDueDate}/>

      )
      )
      }
      </TaskCardsWrapper>) : null}
      { group ? (<TaskCardsWrapper>
      {
      groups.map((o, i) => (
     
<GroupEventCard  key={i} id={o.id} EventTitle={o.EventTitle} EventDescrip={o.EventDescrip} EventDueDate={o.EventDueDate}/>

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