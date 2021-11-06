import React, { useState, useEffect, useContext } from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import AppHeader from '../comps/AppHeader';
import TaskBtn from '../comps/taskBtn';
import styled from 'styled-components/native';
import TaskTable from '../comps/TaskTable';
import NavBar from '../comps/NavBar'
// import {taskCategory} from '../data/category'
import { Configurations } from '../PropConfig/Props'
import fapp from '../firebase/firebase';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';


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

const Wrapper = styled.ScrollView`
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

  const { user } = useContext(AuthenticatedUserContext);
  const handleSignOut = async () => {
    try {
      await fapp.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: Configurations.colors.backCol }}>
      <AppHeader text="Task" display="none" onLogoutPress={handleSignOut} />
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
        <TaskTable onRecBtnPress={() => navigation.navigate('Taskboard')} />

      </Wrapper>
      <NavBarCon>
        <NavBar />
      </NavBarCon>
    </View>


  );
}


export default TaskCreatingScreen