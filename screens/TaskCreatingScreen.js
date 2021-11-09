import React, { useState, useEffect, useContext } from 'react';
import { Button, View, Text, ScrollView ,KeyboardAvoidingView } from 'react-native';
import AppHeader from '../comps/AppHeader';
import TaskBtn from '../comps/taskBtn';
import styled from 'styled-components/native';
import TaskTable from '../comps/TaskTable';
import NavBar from '../comps/NavBar'
// import {taskCategory} from '../data/category'
import { Configurations } from '../PropConfig/Props'
import fireAuth from '../firebase/fireAuth';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import fireStore from '../firebase/fireStore';
import { doc, setDoc } from "firebase/firestore"; 
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
width:100%
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
      await fireAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  // const [taskName  , SetTaskName] = useState("");
  // const [taskType , settaskType] = useState("");
  // const [location , SetLocatione] = useState("");
  // const [startTime , SetStartTime] = useState("");
  // const [endTime , SetEndTime] = useState("");
  const onHandleCreate = () => {
     
  //   await setDoc(doc(fireStore, "event", "LA"), {
  //     TaskName: taskName,
  //     TaskType: taskType,
  //     Location: location,
  //     StartTime: startTime,
  //     EndTime: endTime,
  //   });
  //   const eventsRef = doc(fireStore, 'events', 'BJ');
  //  setDoc(eventsRef, { capital: true }, { merge: true });
       navigation.navigate('Taskboard')
  }


  return (

    <KeyboardAvoidingView   behavior="height" keyboardVerticalOffset={-150}
    style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: Configurations.colors.backCol }}>
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
        <TaskTable onRecBtnPress={onHandleCreate}  />

      </Wrapper>
      <NavBarCon>
        <NavBar />
      </NavBarCon>
    </KeyboardAvoidingView>


  );
}


export default TaskCreatingScreen