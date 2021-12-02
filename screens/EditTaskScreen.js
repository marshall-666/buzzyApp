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
import { category } from '../data/category'
import { useFonts } from "expo-font";


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
background-color:#94BDD4;
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
const colors = Configurations.colors;
const secCol = colors.secCol;
const accent = colors.butCol;
const EditTaskScreen = ({ navigation, route }) => 
{

    const selectedTask = route.params
    
        const [tasks, setTasks] = useState(taskCategory)
        const [taskName, setTaskName] = useState('');
        const [location, setLocation] = useState('');
        const [Value, setValue] = useState('')
        const { user,users } = useContext(AuthenticatedUserContext);
        const [endTime,setEndTime] = useState('')
        const [startTime,setStartTime] =useState('')
        const [desc,setDesc] =useState('')
        const [dbResult, setDbResult] = useState()
        const [dbResultTask, setDbResultTask] = useState()
        const [category_id,setCategory_id] =useState('')
        const [rectCol, setRectCol] = useState(colors.butCol)
        const [rectText, setRectText] = useState('Update Task')
        const [txtCol, setTxtCol] = useState('black')
        const [grpTasks, setGrpTasks] = useState([])
        const [courseTasks, setCourseTasks] = useState([])
        const [eventTasks, setEventTasks] = useState([])
        const [coursebgc, setCourseBgc] = useState(false)
        const [eventbgc, setEventBgc] = useState(false)
        const [groupbgc, setGroupBgc] = useState(false)
        const [dbResultGrp, setDbResultGrp] = useState()
        const [grpList, setGrpList] = useState([])
        const [grpName, setGrpName]= useState('No Group Selected')
        const [grpId, setGrpId] = useState('0')
        const [grpListDisp, setListDisp] = useState('none')
  const [newDaysObject, setNewDaysObject]= useState({})

        const groups =[]
        let index = 0
        // states to take in the exisisting values of the task





    const UpdateTask = async()=>
    {
      setRectCol(colors.secCol)
      setRectText('Confirm?')
      setTxtCol(colors.lightBg)
      // navigation.navigate('Dashboard')
      if(rectCol == colors.secCol)
      {
        navigation.navigate('Dashboard')
      }
        
        
      
      // if ( Value=== 'Courses')
      // {
      //   setCategory_id('2')
      //   console.log(category_id)

      // }
      
      // else if (Value=== 'Groups')
      // {
      //   setCategory_id('1')
      
      // }
      // else 
      // {
      //   setCategory_id('3')
      // }

        var updateTask = {
            op: 'update_task',
            tk_id: selectedTask,
            tkname: taskName,
            descrip: desc,
            category_id: category_id,
            start_t: startTime,
            end_t: endTime,
            loca: location,
            group_id: grpId,
            user_id: '1',
        }
        
        talktoserver(updateTask).then((rd) => 
            {
                setDbResult(rd)
            }
        )
        // console.log(dbResult)
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
        // console.log(selectedTask)
        // console.log(dbResultTask[0].tname)
    },[])
    useEffect(async ()=>{
        console.log(dbResultTask)
        setTaskName(dbResultTask[0].tname)
        setDesc(dbResultTask[0].tdes)
        setLocation(dbResultTask[0].locat)
        setStartTime(dbResultTask[0].start_t)
        setEndTime(dbResultTask[0].end_t)
        setValue(dbResultTask[0].cname)
        setDesc(dbResultTask[0].tdes)
        // console.log(dbResultTask[0].end_t)
    },[dbResultTask])

    useEffect (()=>{
    
      var loadTaskList = {
        op: 'get_tasks_ls',
        user_id: user.uid, // CONNECT THIS TO LOGGED IN USER(Fire Auth)
    }
    
      talktoserver(loadTaskList).then((rd) => {
        setDbResult(rd)
      })
    
    },[dbResult])


    useEffect(()=>
    {
      const loadGroups = async()=>
      {
  
              var loadGroupList = {
                  op: 'get_group_ls',
                  user_id: user.uid,
              }
  
              talktoserver(loadGroupList).then((rd) => {
                  setDbResultGrp(rd)
              })
  
              for (let i=0 ; i<= dbResultGrp.length; i++)
              {
                  // console.log(dbResultGrp[i].groups)
                  if(groups.length < dbResultGrp.length)
                  {
                      groups.push(dbResultGrp[i].groups)
                  }
  
              }
              // console.log(groups)
              let newObject = groups.map(function(obj){
                return{
                    key: index++,
                    groupId: obj.groupid,
                    label: obj.grpName
                  
                }
  
              })
              newObject.unshift({ key: index++, section: true, label: 'Type', groupId: index })
              // console.log(newObject)
              setGrpList(newObject)
              // console.log(grpList)
            }
            loadGroups()
          },[Value])
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
  // console.log(grpId)
  let [fontsLoaded]= useFonts({
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf')
  })
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
      <Wrapper
        >
        <TaskButtonWrapper>
        <TaskBtn 
    //  textColor={textColorC ? "#ffffff" : "black"} 
     taskBtnColor={coursebgc?"#3D5A80":"#E5E5E5"} 
     taskNum={courseTasks.length} 
     taskCate={category.taskCategory.Course.taskCate}  
    //  onBtnPress={coursePress}
  />
    
  <TaskBtn 
    // textColor={textColorG ? "#ffffff" : "black"} 
    taskBtnColor={groupbgc?"#3D5A80":"#E5E5E5"}  
    taskNum={grpTasks.length} 
    taskCate={category.taskCategory.Group.taskCate}   
    // onBtnPress={groupPress}
  />
  
  <TaskBtn 
    // textColor={textColorE ? "#ffffff" : "black"} 
    taskBtnColor={eventbgc?"#3D5A80":"#E5E5E5"} 
    taskNum={eventTasks.length} 
    taskCate={category.taskCategory.Event.taskCate}  
    // onBtnPress={eventPress}
  />

        </TaskButtonWrapper>
        <TaskTable  
            title='Edit Task'
            setTaskName=        {setTaskName}  
            setLocation=        {setLocation}  
            taskName=           {taskName}   
            location=           {location} 
            Value=              {Value} 
            setValue=           {setValue} 
            startTime=          {startTime} 
            setStartTime=       {setStartTime}
            endTime=            {endTime} 
            setEndTime=         {setEndTime}
            desc=               {desc} 
            setDesc=            {setDesc}
            text=               {rectText}
            onRecBtnPress=      {UpdateTask}
            category_id=        {category_id}
            setCategory_id=     {setCategory_id}
            bgC =               {rectCol}
            txtC=               {txtCol}
            dummyList=          {grpList}
            grpNameVal=         {grpName}
            ff="Poppins-Medium"
            // grpDisp={grpListDisp}
            handleGroups= {(item)=>{
              setGrpName(item.label)
              setGrpId(item.groupId)}}
            // groupList=      {testData}

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


// {{shadowColor: '#5B7797',
//         shadowOffset: {width: 10, height: 8},
//         shadowOpacity: 1,
//         shadowRadius: 7,}}
export default EditTaskScreen