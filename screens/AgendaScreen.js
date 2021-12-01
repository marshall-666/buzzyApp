// imports from dependancies ==========
import React, { useState, useEffect,useContext } from 'react';
import { Button, View, Text,ScrollView, FlatList, Pressable } from 'react-native';
import { Timeline} from 'react-native-calendars'
import styled from 'styled-components/native';
import axios from 'axios';
// Component imports===============
import {Task} from '../comps/Task'
import NavBar from '../comps/NavBar'
import IndividualEventCard from '../comps/IndividualEventCard';


// Data imports===============
import talktoserver from "../api/talktoserver"
import { SelectedDay } from '../data/test';
import { Configurations } from '../PropConfig/Props'
import { Events } from '../data/Events';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
// import {taskCategory} from '../data/category'

const colors = Configurations.colors;
const secCol = colors.secCol;
const accent = colors.butCol;

const AgendaWrapper = styled.View`
height:80%;
width:100%;
display:flex;
`
const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92%;
height:100%
width:100%
left:5%
`


// ========================agenda comments===========================
const selectedDay = SelectedDay
const primCol = Configurations.colors.primCol

const HeadTxt = styled.Text``


const timeToString =(time)=> {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
}
// ========================agenda comments============================


// make a function that recieves the data from the databse and returns the formatted data that is recieved by the front-end.
 
const tasks = {
  '2021-11-01':[]
};

const AgendaScreen = ({navigation, route }) => {

  const [selectCol, setSelectCol] = useState('red')
  const[EVENTS, setEVENTS] = useState(tasks[ChosenDay])
  const [movie, setMovie] = useState('')
  const [taskColor, setTaskColor] =useState(colors.butCol)
  const ChosenDay = route.params.day
  const { user,users } = useContext(AuthenticatedUserContext);
  const [dbResult, setDbResult] = useState()

 


if(ChosenDay)
{
  useEffect (()=>{

    var loadTaskList = {
      op: 'get_tasks_ls',
      user_id: user.uid, // CONNECT THIS TO LOGGED IN USER(Fire Auth)
  }
  
    talktoserver(loadTaskList).then((rd) => {
      setDbResult(rd)
    })

},[])

useEffect (()=>{ 
  const GetEvents = async ()=>
  {

    const dayTaskArray = dbResult.filter(function(el)
          {
            return el.day == [ChosenDay]
          })
          console.log('========-XXXXXX======')
          // console.log(dayTaskArray)
          const eventsObject = dbResult
      
        
        // console.log(eventsObject)
        const newArray=[]
        for(let i=0; i<dayTaskArray.length; i++)
        {
          newArray.push(dayTaskArray[i].day)
          console.log(dayTaskArray[i].task_category)
          
        }
        
        // console.log(newObject)
        
        let newObject = newArray.map(function(obj)
        {
            return{
              [obj]:[]
            }
        })
        
        const eventDays = newObject.reduce(((r,c)=>Object.assign(r,c)),{})
        let transformed = dayTaskArray.map(function(obj){
          return {
            
            start: obj.start,
            end: obj.end,
            title: obj.title,
            summary: obj.summary,
            color : taskColor
            
          }
      });
    
      console.log(transformed)
      let dailyEvents = {}
    
      Object.keys(eventDays).forEach((day) => {
        dailyEvents[day] = 
          transformed
      
        ;
      });
      

      setEVENTS(dailyEvents[ChosenDay])
      
 
      console.log(dayTaskArray)
  }      
    GetEvents()
},[dbResult])

  // useEffect (()=>{ 
  //   const GetEvents = async ()=>
  //   {

      
  //         const eventsObject = dbResult
  //         // console.log(eventsObject)
  //         const newArray=[]
  //         for(let i=0; i<eventsObject.length; i++)
  //         {
  //           newArray.push(eventsObject[i].day)
  //         }
          
  //         // console.log(newObject)
          
  //         let newObject = newArray.map(function(obj)
  //         {
  //             return{
  //               [obj]:[]
  //             }
  //         })
          
  //         const eventDays = newObject.reduce(((r,c)=>Object.assign(r,c)),{})
  //         let transformed = eventsObject.map(function(obj){
  //           return {
              
  //             start: obj.start,
  //             end: obj.end,
  //             title: obj.title,
  //             summary: obj.summary
              
  //           }
  //       });
      
  //       let dailyEvents = {}
      
  //       Object.keys(eventDays).forEach((day) => {
  //         dailyEvents[day] = 
  //           transformed
        
  //         ;
  //       });
        

  //       setEVENTS(dailyEvents[ChosenDay])
        
   
  //   }      
  //     GetEvents()
  
  // },[dbResult])
}

  const markedDates = {
    [selected]: {
      selected: true,
      selectedColor: selectCol
    }
  }
  

  // relatable code on line 286-294, 211-230

  const  [selected, setSelected] = useState({})

  const [items, setItems] = useState(Events)

 const  loadItems=(day) =>{
    
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
        }
        
      }
    }
    
  const renderItem = (item)=>
  {
    return (
        <IndividualEventCard
          EventBackgroundColor="#EC8B1A"/>
    )
  }

  const renderEmptyDate = () => {
    return [];
  }

  return (
  
    <View style=
    {{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'flex-start', 
      backgroundColor: primCol
    }}>

 
       
    <AgendaWrapper> 
      <View style ={{flex:1, width:'100%',}}>
                 <Timeline events={EVENTS} 
                  pastScrollRange={10}
                  futureScrollRange={10}
                  // format24h={false}
                  theme={{ 
                    timeLabel:{color:secCol, fontSize:13},
                    contentStyle:{backgroundColor:colors.primCol},
                    eventTimes:{fontSize:14},
                    line:{backgroundColor:colors.lightBg},
                    event:{borderColor:colors.secCol},
                    eventTitle:{fontSize:16},
                    eventSummary:{fontSize:14}

                    }}/>

       
        </View>
      </AgendaWrapper>   
    
       <NavBarCon>
          <NavBar/>
        </NavBarCon>

    </View>
   

  );
}


export default AgendaScreen




 {/* <Agenda 
                items={items}
                loadItemsForMonth={loadItems}
                renderItem={renderItem}
                selected={ChosenDay}
                renderEmptyData={renderEmptyDate}
               
                theme=
                {{ 
                  calendarBackground: colors.primCol,
                  agendaKnobColor: colors.secCol,
                  backgroundColor:colors.primCol,
                  
                  // weekdays colors
                  textSectionTitleColor: 'black',
                  // 
                  
                  
              agendaDayTextColor: colors.secCol, 
              agendaDayNumColor: colors.secCol,
              // agendaTodayColor: 
              // monthTextColor: 
              // textDefaultColor: 
              // todayBackgroundColor: 
              // textSectionTitleColor: 
              selectedDayBackgroundColor: colors.butCol,
              selectedDayTextColor:'black',
              // dayTextColor: 
              dotColor: 'red'
              // tasks indicator
              
                

              // textDisabledColor: 
                }}
                 */}
                 {/* <CalendarList
                 horizontal
                 onDayPress={(day)=>{
                  console.warn(day.dateString)
                  setSelectCol("green")
                  
                  }}
                markedDates={markedDates}
                 
                 /> */}
