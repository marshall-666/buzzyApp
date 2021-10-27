import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppHeader from '../comps/AppHeader';
import TaskBtn from '../comps/taskBtn';
import styled from 'styled-components';
import TaskTable from '../comps/TaskTable';
import NavBar from '../comps/NavBar';

const CardWrapper = styled.View`
margin-left:10px;
margin-top:4%;
margin-bottom:4%;
display:flex;
flex-wrap:nowrap;
flex-direction:row;
`
const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:725px;
height:100%
width:100%
left:18px
`

const fakeDate = [{
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

const TaskboardScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(fakeDate)
  // setTasks()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <AppHeader text="Task" />
      <CardWrapper>
        {
          tasks.map((o, i) => (
            <CardWrapper key={i}>
              <TaskBtn id={o.id} taskNum={o.taskNum} taskCate={o.taskCate} />
            </CardWrapper>
          )
          )
        }
      </CardWrapper>
      <NavBarCon>
      <NavBar  addEventPress={()=>navigation.navigate('TaskCreating') }/>
      </NavBarCon>
      
    </View>
  );
}


export default TaskboardScreen