import React, { useState, useEffect, useContext } from 'react';
import { Button, View, Text, ScrollView ,KeyboardAvoidingView,StyleSheet } from 'react-native';
import TaskBtn from '../comps/taskBtn';
import styled from 'styled-components/native';
import TaskTable from '../comps/TaskTable';
import NavBar from '../comps/NavBar'
// import {taskCategory} from '../data/category'
import { Configurations } from '../PropConfig/Props'
import fireAuth from '../firebase/fireAuth';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import fireStore from '../firebase/fireStore';
import { doc, setDoc,serverTimestamp  } from "firebase/firestore";
import { db } from '../firebase/fireStore';
import talktoserver from "../api/talktoserver"


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
margin-top:7.5%;
margin-bottom:4.5%;
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
const TaskCreatingScreen = ({ navigation, route }) => 
{

    const selectedTask = route.params
    
        const [tasks, setTasks] = useState(taskCategory)
        const [taskName, setTaskName] = useState('');
        const [location, setLocation] = useState('');
        const [Value, setValue] = useState('')
        const { user,users } = useContext(AuthenticatedUserContext);
        const [endTime,setEndTime] =useState('')
        const [startTime,setStartTime] =useState('')
        
        const [dbResult, setDbResult] = useState()
        const [dbResultTask, setDbResultTask] = useState()

        // states to take in the exisisting values of the task

        // const [dbResult, setDbResult] = useState()
        const [taskNameCur, setTaskNameCur] = useState('');


    const UpdateTask = async()=>
    {
        var updateTask = {
            op: 'update_task',
            tk_id: '',
            tkname: taskName,
            descrip: '',
            category_id: '',
            start_t: '',
            end_t: '',
            loca: '',
            group_id: '',
            user_id: '',
        }
        
        talktoserver(updateTask).then((rd) => 
            {
                setDbResult(rd)
            }
        )
    }
        
       
    useEffect(()=>{


        var loadTaskDetail = 
        {
            op: 'get_task_detail',
            tk_id: selectedTask,
        }
    
        talktoserver(loadTaskDetail).then((rd) => 
        {
            setDbResultTask(rd)
            // setTaskName(dbResultTask[0].tname)
            // setValue(dbResultTask[0].cname)
            // setLocation(dbResultTask[0].locat)
        })
        console.log(selectedTask)
        // console.log(dbResultTask[0].tname)
    },[])
    useEffect(async ()=>{
        console.log(dbResultTask)
        setTaskName(dbResultTask[0].tname)
    },[dbResultTask])

// console.log(selectedTask)
  return (

    <KeyboardAvoidingView   behavior="height" keyboardVerticalOffset={-150}
    style=
    {{ 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        backgroundColor: Configurations.colors.backCol  
        
    }}>
      <View style={styles.header}>
       
      </View>
      <Wrapper>
        <TaskButtonWrapper>
          {
            tasks.map((o, i) => (
              <TaskButtonWrapper key={i}>
                <TaskBtn id={o.id} taskNum={o.taskNum} taskCate={o.taskCate} margin={0} />
              </TaskButtonWrapper>
            )
            )
          }

        </TaskButtonWrapper>
        <TaskTable  
            setTaskName=    {setTaskName}  
            setLocation=    {setLocation}  
            taskName=       {taskName}   
            location=       {location} 
            Value=          {Value} 
            setValue=       {setValue} 
            startTime=      {startTime} 
            setStartTime=   {setStartTime}
            endTime=        {endTime} 
            setEndTime=     {setEndTime}
            text=           "Update Task"

 />

      </Wrapper>
      <NavBarCon>




        <NavBar />
      </NavBarCon>
    </KeyboardAvoidingView>


  );
}
const styles=StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex: 10,

  }
})

export default TaskCreatingScreen