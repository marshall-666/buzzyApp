import React, { useState, useEffect, useContext } from 'react';
import { Button, View, Text, StyleSheet,FlatList } from 'react-native';
import TaskBtn from '../comps/taskBtn';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar';
import TaskCardArea from '../comps/taskCardArea';
import CourseEventCard from '../comps/CourseEventCard';
import GroupEventCard from '../comps/GroupEventCard';
import IndividualEventCard from '../comps/IndividualEventCard';
import { category } from '../data/category'
import { coursesData } from '../data/tasks'
import { groupsData } from '../data/tasks'
import { eventsData } from '../data/tasks'
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import { Configurations } from '../PropConfig/Props'
import { db } from '../firebase/fireStore';
import { fireAuth } from '../firebase/fireAuth';
import { collection, getDoc, addDoc,doc} from "firebase/firestore"; 
import talktoserver from "../api/talktoserver"

const TaskButtonsWrapper = styled.View`
margin-left:10px;
margin-top:14%;
margin-bottom:2.5%;
display:flex;
flex-wrap:nowrap;
flex-direction:row;
justify-content:space-between;
width:80%;
`
const TaskButtonWrapper = styled.View`
margin:3%
`
const CourseEventCardWrapper = styled.View`
height:100%;

`
const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:90%;
height:100%
width:100%
left:5%
`

const TaskCardsWrapper = styled.ScrollView`
position:absolute;
z-index:2;
top:30%
height:52.5%;
width:100%;
`
const colors = Configurations.colors;
const secCol = colors.secCol;
const accent = colors.butCol;
const TaskboardScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(category)
  const [courses, setCourses] = useState(false)
  const [groups, setGroups] = useState(false)
  const [events, setEvents] = useState(false)
  const [showcourses, setShowCourses] = useState(showcourses)
  // const [course, setCourse] = useState(false)
  // const [group, setGroup] = useState(false)
  // const [event, setEvent] = useState(false)
  const [coursebgc, setCourseBgc] = useState(false)
  const [eventbgc, setEventBgc] = useState(false)
  const [groupbgc, setGroupBgc] = useState(false)
  const [textColorC, setTextColorC] = useState(false)
  const [textColorG, setTextColorG] = useState(false)
  const [textColorE, setTextColorE] = useState(false)
  const [welcome, setWelcome] = useState(true)
  const [dbResult, setDbResult] = useState()
  const [grpTasks, setGrpTasks] = useState([])
  const [courseTasks, setCourseTasks] = useState([])
  const [eventTasks, setEventTasks] = useState([])
  const [newDaysObject, setNewDaysObject]= useState({})
    
useEffect(()=>{

      
      var loadTaskDetail = {
          op: 'get_task_detail',
          tk_id: '1',
      }
      
      talktoserver(loadTaskDetail).then((rd) => {
          setDbResult(rd)
          console.log(dbResult)
      })


},[])




  const { user,users } = useContext(AuthenticatedUserContext);

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
  
  useEffect (()=>{
    
    var loadTaskList = {
      op: 'get_tasks_ls',
      user_id: user.uid, // CONNECT THIS TO LOGGED IN USER(Fire Auth)
  }
  
    talktoserver(loadTaskList).then((rd) => {
      setDbResult(rd)
    })

},[dbResult])

  
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

  const coursePress = () => {
    setCourses(true)
    setGroups(false)
    setEvents(false)
    setCourseBgc(true)
    setEventBgc(false)
    setGroupBgc(false)
    setTextColorC(true)
    setTextColorG(false)
    setTextColorE(false)
    setWelcome(false)


  }
  const groupPress = () => {
    setGroups(true)
    setCourses(false)
    setEvents(false)
    setGroupBgc(true)
    setEventBgc(false)
    setCourseBgc(false)
    setTextColorC(false)
    setTextColorE(false)
    setTextColorG(true)
    setWelcome(false)
  }
  const eventPress = () => {
    setEvents(true)
    setCourses(false)
    setGroups(false)
    setCourseBgc(false)
    setEventBgc(true)
    setGroupBgc(false)
    setTextColorC(false)
    setTextColorE(true)
    setTextColorG(false)
    setWelcome(false)

  }
 
  return (
    <View  
      style={{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'flex-start',
      backgroundColor: Configurations.colors.primCol  }}>
    
    
    <TaskButtonsWrapper>

  <TaskBtn 
     textColor={textColorC ? "#ffffff" : "black"} 
     taskBtnColor={coursebgc?"#3D5A80":"#E5E5E5"} 
     taskNum={courseTasks.length} 
     taskCate={category.taskCategory.Course.taskCate}  
     onBtnPress={coursePress}
  />
    
  <TaskBtn 
    textColor={textColorG ? "#ffffff" : "black"} 
    taskBtnColor={groupbgc?"#3D5A80":"#E5E5E5"}  
    taskNum={grpTasks.length} 
    taskCate={category.taskCategory.Group.taskCate}   
    onBtnPress={groupPress}
  />
  
  <TaskBtn 
    textColor={textColorE ? "#ffffff" : "black"} 
    taskBtnColor={eventbgc?"#3D5A80":"#E5E5E5"} 
    taskNum={eventTasks.length} 
    taskCate={category.taskCategory.Event.taskCate}  
    onBtnPress={eventPress}
  />
  </TaskButtonsWrapper>
  <TaskCardArea/> 
     
    
  {welcome ? <Text style={styles.title}>Welcome {users.name} !</Text>: null  }
   

     
  { courses ? (<TaskCardsWrapper>
    {
      courseTasks.map((o, i) => 
      (
        <CourseEventCard  
          key={i} id={o.id} 
          EventTitle={o.title} 
          EventDescrip={o.summary} 
          EventStartTime={o.start} 
          EventDueTime={o.end} 
          IconDisplay='none'
          // EventBackgroundColor= {randomColor()} 
          />

      ))
    }
      </TaskCardsWrapper>) : null}


  { groups ? (<TaskCardsWrapper>
    {
      grpTasks.map((o, i) => 
      ( 
     
        <IndividualEventCard  
          key={i} id={o.id} 
          EventTitle={o.title} 
          EventDescrip={o.summary} 
          EventStartTime={o.start} 
          EventDueTime={o.end} 
          IconDisplay='none'
          // EventBackgroundColor= {randomColor()}
        />

      ))
    }
      </TaskCardsWrapper>) : null}


      { events ? (<TaskCardsWrapper>
      {
        eventTasks.map((o, i) => 
        (
      
          <IndividualEventCard  
          key={i} id={o.id} 
          EventTitle={o.title} 
          EventDescrip={o.summary} 
          EventStartTime={o.start} 
          EventDueTime={o.end}  
          IconDisplay='none'
          // EventBackgroundColor= {randomColor()}
          />

        ))
      }
      </TaskCardsWrapper>) : null}
     
      <NavBarCon>
      <NavBar  
          addEventPress={()=>navigation.navigate('TaskCreating')}
          
      
      />
      </NavBarCon>

    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    zIndex: 3,
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    marginTop: 300
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff'
  },
  header: {
    position: 'absolute',
    zIndex: 10,

  }
});

export default TaskboardScreen