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
import { doc, setDoc,serverTimestamp ,collection,addDoc } from "firebase/firestore";
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
const TaskCreatingScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(taskCategory)
const [taskName, setTaskName] = useState('');
  const [location, setLocation] = useState('');
  const [dbResult, setDbResult] = useState()
const [Value, setValue] = useState('Course')
  const { user,users } = useContext(AuthenticatedUserContext);
const [endTime,setEndTime] =useState('Pick end Time')
  const [startTime,setStartTime] =useState('Pick start Time')
  const [desc,setDesc] =useState('')
  const [category_id,setCategory_id] =useState('')



  const onHandleCreate = async() => {
    
   setDoc(doc(db, "tasks", user.uid), {
        uid: user.uid,
        id: user.uid,
        meeting:{
        taskName: taskName,
        location: location, 
        startTime: startTime,
        endTime:endTime,
        category:Value,
        descrip:desc
        }
      });
      if ( Value=== 'Courses'){
        setCategory_id('2')
     }else if (Value=== 'Groups')
     {    setCategory_id('1')}
     else {
      setCategory_id('3')
     }
 var createTask = {
    op: 'create_task',
    tkname: taskName,
    descrip: desc,
    category_id: category_id,
    start_t: startTime,
    end_t: endTime,
    loca: location,
    group_id: '1',
    user_id: '1',
}


await  talktoserver(createTask).then((rd) => {
    setDbResult(rd) 
   
    console.log(dbResult)
})
console.log(createTask)
      navigation.navigate('Taskboard')
    }
  
    console.log(category_id)


  return (

    <KeyboardAvoidingView   behavior="height" keyboardVerticalOffset={-150}
    style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: Configurations.colors.backCol  }}>
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
            onRecBtnPress={onHandleCreate} 
            setTaskName={setTaskName}  
            setLocation={setLocation} 
            taskName={taskName} 
            location={location} 
            Value={Value} 
            setValue={setValue} 
            startTime={startTime} 
            setStartTime={setStartTime}
            endTime={endTime} 
            setEndTime={setEndTime}
            desc={desc} setDesc={setDesc}
            category_id={ category_id}
            setCategory_id={ setCategory_id}
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