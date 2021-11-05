import React, { useState, useEffect } from 'react';
import { Button, View, Text,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppHeader from '../comps/AppHeader';
import TaskBtn from '../comps/taskBtn';
import styled from 'styled-components/native';
import TaskTable from '../comps/TaskTable';
import NavBar from '../comps/NavBar'
// import {taskCategory} from '../data/category'
import  {Configurations} from'../PropConfig/Props'

const taskCategory = [
  {
  id: 1,
  taskNum: "8",
  taskCate: "Courses",
},
{
  id: 2,
  taskNum: "3",
  taskCate: "Events",
},
{
  id: 3,
  taskNum: "10",
  taskCate: "Tasks",
}
]

const Wrapper =styled.ScrollView`
height:30%;
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


const TaskCreatingScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(taskCategory)
 
  
  return (
  
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <AppHeader text="Task"  display="none" />
      <Wrapper> 
      <TaskButtonWrapper>
              {
          tasks.map((o, i) => (
            <TaskButtonWrapper key={i}>
              <TaskBtn id={o.id} taskNum={o.taskNum} taskCate={o.taskCate} />
            </TaskButtonWrapper>
          )
          )
        }
       
      </TaskButtonWrapper>
      <TaskTable onRecBtnPress={()=>navigation.navigate('Taskboard')} />
       
    </Wrapper>
       <NavBarCon>
          <NavBar />
          </NavBarCon>
    </View>
   

  );
}


export default TaskCreatingScreen