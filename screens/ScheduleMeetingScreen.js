import React, { useState, useEffect, useContext } from 'react';
import { Button, View, Text, StyleSheet, FlatList, TouchableOpacity, SectionList, ScrollView, Pressable } from 'react-native';
import TaskBtn from '../comps/taskBtn';
import styled from 'styled-components/native';
import NavBar from '../comps/NavBar';
import TaskCardArea from '../comps/taskCardArea';
import { category } from '../data/category'
import { coursesData } from '../data/tasks'
import { groupsData } from '../data/tasks'
import { eventsData } from '../data/tasks'
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import { Configurations } from '../PropConfig/Props'
import { Available } from '../comps/Available'
import { Days } from '../data/AvailableTime'

const TaskButtonsWrapper = styled.View`
margin-top:10%;
margin-bottom:5%;
display:flex;
flex-wrap:nowrap;
flex-direction:row;
width:90%;
`
const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92%;
height:100%
width:100%
left:5%
`

const TaskCardsWrapper = styled.ScrollView`
position:absolute;
z-index:2;
top:27.5%
height:65%;
width:100%;
padding:5%
`


const Item = ({ item, onPress, backgroundColor, textColor, navigation }) => (
  <Pressable
    onPress={onPress}
    style={[styles.item, backgroundColor]}>
    <Text style={[styles.title2, textColor]}>{item.title}</Text>
  </Pressable>
);
const TaskboardScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(category)
  const [courses, setCourses] = useState(coursesData)
  const [groups, setGroups] = useState(groupsData)
  const [events, setEvents] = useState(eventsData)
  const [showcourses, setShowCourses] = useState(showcourses)
  const [showSchedule, setShowSchedule] = useState(false)
  const [showAll, setShowAll] = useState(true)


  const slotTue = []
  const slotMon = []
  const slotWed = []

 
  var Schedule = [
    {
      title: "businessCom",
      startTime: new Date("2021/12/06 9:30 AM"),
      endTime: new Date("2021/12/06 12:20 PM"),
    },
    {
      title: "Design2",
      startTime: new Date("2021/12/06 01:30 PM"),
      endTime: new Date("2021/12/06 04:20 PM"),
    },
   
    {
      title: "Asset Design and intergration",
      startTime: new Date("2021/12/07 09:30 AM"),
      endTime: new Date("2021/12/07 12:20 PM")
    },
    {
      title: "Advance Photoshop",
      startTime: new Date("2021/12/07 01:30 PM"),
      endTime: new Date("2021/12/07 04:20 PM")
    },
    {
      title: "Accounting",
      startTime: new Date("2021/12/08 08:30 AM"),
      endTime: new Date("2021/12/08 10:20 PM")
    },
    {
      title: "Web dev3",
      startTime: new Date("2021/12/08 12:30 PM"),
      endTime: new Date("2021/12/08 02:20 PM")
    },
  ];
  // var ScheduleLevi = [
  //   {
  //     title: "Communting",
  //     startTime: new Date("2021/12/06 04:30 PM"),
  //     endTime: new Date("2021/12/06 05:20 PM"),
  //   },
  //   {
  //     title: " do assignment",
  //     startTime: new Date("2021/12/06 06:50 PM"),
  //     endTime: new Date("2021/12/06 09:30 PM"),
  //   },
  //   {
  //     title: "Communting",
  //     startTime: new Date("2021/12/07 04:30 PM"),
  //     endTime: new Date("2021/12/07 05:20 PM")
  //   },
  //   {
  //     title: " do assignment",
  //     startTime: new Date("2021/12/07 06:50 PM"),
  //     endTime: new Date("2021/12/07 09:30 PM")
  //   },
  //   {
  //     title: " do assignment2",
  //     startTime: new Date("2021/12/07 10:00 PM"),
  //     endTime: new Date("2021/12/07 11:20 PM")
  //   },
  //   {
  //     title: "Communting",
  //     startTime: new Date("2021/12/08 04:30 PM"),
  //     endTime: new Date("2021/12/08 05:20 PM")
  //   },
  //   {
  //     title: " do assignment",
  //     startTime: new Date("2021/12/08 06:50 PM"),
  //     endTime: new Date("2021/12/08 09:30 PM")
  //   },
  //   {
  //     title: " do assignment2",
  //     startTime: new Date("2021/12/08 10:00 PM"),
  //     endTime: new Date("2021/12/08 11:20 PM")
  //   },

  // ];
  // var Schedule = OldSchedule.concat(ScheduleLevi)
  // let  Schedule = [...OldSchedule, ...ScheduleLevi];
  // console.log(Schedule)
  function slotFitsMon(meeting) {
    if (Schedule.length == 0) return true;
    return Schedule.some(function (s, i) {
      return (i == 0 && meeting.endTime <= s.startTime) || // slot is before all others
        (s.endTime <= meeting.startTime && !Schedule[i + 1]) || // slot is after all others
        (s.endTime <= meeting.startTime && Schedule[i + 1].startTime >= meeting.endTime) // Slot between others
    });
  };
  function slotFitsTue(meeting) {
    if (Schedule.length == 0) return true;
    return Schedule.some(function (s, i) {
      return (i == 0 && meeting.endTime <= s.startTime) || // slot is before all others
        (s.endTime <= meeting.startTime && !Schedule[i + 1]) || // slot is after all others
        (s.endTime <= meeting.startTime && Schedule[i + 1].startTime >= meeting.endTime) // Slot between others
    });
  };
  function slotFitsWed(meeting) {
    if (Schedule.length == 0) return true;
    return Schedule.some(function (s, i) {
      return (i == 0 && meeting.endTime <= s.startTime) || // slot is before all others
        (s.endTime <= meeting.startTime && !Schedule[i + 1]) || // slot is after all others
        (s.endTime <= meeting.startTime && Schedule[i + 1].startTime >= meeting.endTime) // Slot between others
    });
  };
  const meetingMon =
    [{
      id: Date.parse("2021/12/06 8:30 AM"),
      title: "Monday 08:30-09:20",
      startTime: new Date("2021/12/06 8:30 AM"),
      endTime: new Date("2021/12/06 9:20 AM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 9:30 AM"),
      title: "Monday 09:30-10:20",
      startTime: new Date("2021/12/06 9:30 AM"),
      endTime: new Date("2021/12/06 10:20 AM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 10:30 AM"),
      title: "Monday 10:30-11:20",
      startTime: new Date("2021/12/06 10:30 AM"),
      endTime: new Date("2021/12/06 11:20 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 11:30 AM"),
      title: "Monday 11:30-12:20",
      startTime: new Date("2021/12/06 11:30 AM"),
      endTime: new Date("2021/12/06 12:20 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 12:30 PM"),
      title: "Monday 12:30-13:20",
      startTime: new Date("2021/12/06 12:30 PM"),
      endTime: new Date("2021/12/06 01:20 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 01:30 PM"),
      title: "Monday 13:30-14:20",
      startTime: new Date("2021/12/06 01:30 PM"),
      endTime: new Date("2021/12/06 02:20 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 02:30 PM"),
      title: "Monday 14:30-15:20",
      startTime: new Date("2021/12/06 02:30 PM"),
      endTime: new Date("2021/12/06 03:20 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 03:30 PM"),
      title: "Monday 15:30-16:20",
      startTime: new Date("2021/12/06 03:30 PM"),
      endTime: new Date("2021/12/06 04:20 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 04:30 PM"),
      title: "Monday 16:30-17:20",
      startTime: new Date("2021/12/06 04:30 PM"),
      endTime: new Date("2021/12/06 05:20 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 05:30 PM"),
      title: "Monday 17:30-18:20",
      startTime: new Date("2021/12/06 05:30 PM"),
      endTime: new Date("2021/12/06 06:20 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 06:30 PM"),
      title: "Monday 18:30-19:20",
      startTime: new Date("2021/12/06 06:30 PM"),
      endTime: new Date("2021/12/06 07:20 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 07:30 PM"),
      title: "Monday 19:30-20:20",
      startTime: new Date("2021/12/06 07:30 PM"),
      endTime: new Date("2021/12/06 08:20 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 08:30 PM"),
      title: "Monday 20:30-21:20",
      startTime: new Date("2021/12/06 08:30 PM"),
      endTime: new Date("2021/12/06 09:20 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 09:30 PM"),
      title: "Monday 21:30-22:20",
      startTime: new Date("2021/12/06 09:30 PM"),
      endTime: new Date("2021/12/06 10:20 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 10:30 PM"),
      title: "Monday 22:30-23:20",
      startTime: new Date("2021/12/06 10:30 PM"),
      endTime: new Date("2021/12/06 11:20 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },

    ]
  meetingMon.forEach(function (meeting, i) {
    if (slotFitsMon(meeting) == true) {
      // return   meeting.title
      // console.log(meeting.title)
      slotMon.push(meeting)
    }
  });

  const meetingTue =
    [{
      id: Date.parse("2021/12/07 8:30 AM"),
      title: "Tuesday 08:30-09:20",
      startTime: new Date("2021/12/07 8:30 AM"),
      endTime: new Date("2021/12/07 9:20 AM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 9:30 AM"),
      title: "Tuesday 09:30-10:20",
      startTime: new Date("2021/12/07 9:30 AM"),
      endTime: new Date("2021/12/07 10:20 AM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 10:30 AM"),
      title: "Tuesday 10:30-11:20",
      startTime: new Date("2021/12/07 10:30 AM"),
      endTime: new Date("2021/12/07 11:20 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 11:30 AM"),
      title: "Tuesday 11:30-12:20",
      startTime: new Date("2021/12/07 11:30 AM"),
      endTime: new Date("2021/12/07 12:20 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 12:30 PM"),
      title: "Tuesday 12:30-13:20",
      startTime: new Date("2021/12/07 12:30 PM"),
      endTime: new Date("2021/12/07 01:20 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    }, {
      id: Date.parse("2021/12/07 01:30 PM"),
      title: "Tuesday 13:30-14:20",
      startTime: new Date("2021/12/07 01:30 PM"),
      endTime: new Date("2021/12/07 02:20 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 02:30 PM"),
      title: "Tuesday 14:30-15:20",
      startTime: new Date("2021/12/07 02:30 PM"),
      endTime: new Date("2021/12/07 03:20 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 03:30 PM"),
      title: "Tuesday 15:30-16:20",
      startTime: new Date("2021/12/07 03:30 PM"),
      endTime: new Date("2021/12/07 04:20 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 04:30 PM"),
      title: "Tuesday 16:30-17:20",
      startTime: new Date("2021/12/07 04:30 PM"),
      endTime: new Date("2021/12/07 05:20 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 05:30 PM"),
      title: "Tuesday 17:30-18:20",
      startTime: new Date("2021/12/07 05:30 PM"),
      endTime: new Date("2021/12/07 06:20 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 06:30 PM"),
      title: "Tuesday 18:30-19:20",
      startTime: new Date("2021/12/07 06:30 PM"),
      endTime: new Date("2021/12/07 07:20 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 07:30 PM"),
      title: "Tuesday 19:30-20:20",
      startTime: new Date("2021/12/07 07:30 PM"),
      endTime: new Date("2021/12/07 08:20 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 08:30 PM"),
      title: "Tuesday 20:30-21:20",
      startTime: new Date("2021/12/07 08:30 PM"),
      endTime: new Date("2021/12/07 09:20 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 09:30 PM"),
      title: "Tuesday 21:30-22:20",
      startTime: new Date("2021/12/07 09:30 PM"),
      endTime: new Date("2021/12/07 10:20 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 10:30 PM"),
      title: "Tuesday 22:30-23:20",
      startTime: new Date("2021/12/07 10:30 PM"),
      endTime: new Date("2021/12/07 11:20 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },

    ]
  meetingTue.forEach(function (meeting, i) {
    if (slotFitsTue(meeting) == true) {

      slotTue.push(meeting)
      // console.log(slotTue)
    }
  });
  const meetingWed =
    [{
      id: Date.parse("2021/12/08 8:30 AM"),
      title: "Wed 08:30-09:20",
      startTime: new Date("2021/12/08 8:30 AM"),
      endTime: new Date("2021/12/08 9:20 AM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 9:30 AM"),
      title: "Wed 09:30-10:20",
      startTime: new Date("2021/12/08 9:30 AM"),
      endTime: new Date("2021/12/08 10:20 AM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 10:30 AM"),
      title: "Wed 10:30-11:20",
      startTime: new Date("2021/12/08 10:30 AM"),
      endTime: new Date("2021/12/08 11:20 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 11:30 AM"),
      title: "Wed 11:30-12:20",
      startTime: new Date("2021/12/08 11:30 AM"),
      endTime: new Date("2021/12/08 12:20 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 12:30 PM"),
      title: "Wed 12:30-13:20",
      startTime: new Date("2021/12/08 12:30 PM"),
      endTime: new Date("2021/12/08 01:20 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    }, {
      id: Date.parse("2021/12/08 01:30 PM"),
      title: "Wed 13:30-14:20",
      startTime: new Date("2021/12/08 01:30 PM"),
      endTime: new Date("2021/12/08 02:20 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 02:30 PM"),
      title: "Wed 14:30-15:20",
      startTime: new Date("2021/12/08 02:30 PM"),
      endTime: new Date("2021/12/08 03:20 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 03:30 PM"),
      title: "Wed 15:30-16:20",
      startTime: new Date("2021/12/08 03:30 PM"),
      endTime: new Date("2021/12/08 04:20 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 04:30 PM"),
      title: "Wed 16:30-17:20",
      startTime: new Date("2021/12/08 04:30 PM"),
      endTime: new Date("2021/12/08 05:20 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 05:30 PM"),
      title: "Wed 17:30-18:20",
      startTime: new Date("2021/12/08 05:30 PM"),
      endTime: new Date("2021/12/08 06:20 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 06:30 PM"),
      title: "Wed 18:30-19:20",
      startTime: new Date("2021/12/08 06:30 PM"),
      endTime: new Date("2021/12/08 07:20 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 07:30 PM"),
      title: "Wed 19:30-20:20",
      startTime: new Date("2021/12/08 07:30 PM"),
      endTime: new Date("2021/12/08 08:20 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 08:30 PM"),
      title: "Wed 20:30-21:20",
      startTime: new Date("2021/12/08 08:30 PM"),
      endTime: new Date("2021/12/08 09:20 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 09:30 PM"),
      title: "Wed 21:30-22:20",
      startTime: new Date("2021/12/08 09:30 PM"),
      endTime: new Date("2021/12/08 10:20 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 10:30 PM"),
      title: "Wed 22:30-23:20",
      startTime: new Date("2021/12/08 10:30 PM"),
      endTime: new Date("2021/12/08 11:20 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },

    ]
  meetingWed.forEach(function (meeting, i) {
    if (slotFitsWed(meeting) == true) {

      slotWed.push(meeting)
      // console.log(slotTue)
    }
  });
// const showLevi=()=>{
//   var Schedule = [...s, ...arr2];
//   Array.prototype.push.apply(Schedule,ScheduleLevi); 

// }
// console.log(Schedule)
  const slotAvailable = [...slotMon, ...slotTue]
  // console.log(slotAvailable) 


  const { user, users } = useContext(AuthenticatedUserContext);
  var randomColor = require('randomcolor'); // import the script
  var color = randomColor(); // a hex code for an attractive color
  randomColor({
    luminosity: 'bright',
    format: 'rgb' // e.g. 'rgb(225,200,20)'
  });

  const AbbeyPress = () => {
    setShowSchedule(false)
    setShowAll(false)
  
  }
  const NickPress = () => {
    setShowSchedule(false)
    setShowAll(false)
  
  }
  const WarrenPress = () => {
    setShowAll(false)
   
    setShowSchedule(false)
  }
  const GroupPress = () => {
  
    setShowSchedule(false)
    setShowAll(false)
  
  }
  const LeviPress = () => {
    // showLevi()
    setShowSchedule(true)
    setShowAll(false)
    
  }
  const JodyPress = () => {
    setShowSchedule(false)
    setShowAll(false)
 
  }


  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? Configurations.colors.secCol : Configurations.colors.primCol;
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id)
          navigation.navigate("MeetingStep2", {
            id: item.id,
            meetingSlot: item.title,
            startTime: item.startTime,
            endTime: item.endTime,
            mm: item.mm,
            dd: item.dd,
            Wday: item.Wday,
            desc: item.desc,

          })
        }
        }
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: Configurations.colors.backCol
      }}>


      <TaskButtonsWrapper  >
        <ScrollView horizontal={true}>
          <TaskBtn
            displayBtn='none'
            displayImg='flex'
            name='Group'
            onBtnPress={GroupPress}
          />

          <TaskBtn
            displayBtn='none'
            displayImg='flex'
            name='Abbey'
            onBtnPress={AbbeyPress}
          />

          <TaskBtn
            displayBtn='none'
            displayImg='flex'
            name='Nick'
            onBtnPress={NickPress}
          />
          <TaskBtn
            displayBtn='none'
            displayImg='flex'
            name='Warren'
            onBtnPress={WarrenPress}
          />
          <TaskBtn
            displayBtn='none'
            displayImg='flex'
            name='Levi'
            img={users.img}
            onBtnPress={LeviPress}
          />
          <TaskBtn
            displayBtn='none'
            displayImg='flex'
            name='Jody'
            img={users.img}
            onBtnPress={JodyPress}
          />
        </ScrollView >

      </TaskButtonsWrapper>
      <TaskCardArea />
      {showAll ? (<TaskCardsWrapper>
        <Text style={{ textAlign: 'center', fontSize: 28, color: Configurations.colors.secCol }}>Step 1/3</Text>
        {
          <FlatList
            contentContainerStyle={{ maxHeight: 100 }}
            horizontal
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'flex-start' }}
            // alwaysBounceHorizontal={true}
            data={Days}
            renderItem={({ item }) => {
              if (item.day === "Monday") {
                return (
                  <Available
                    monthName={item.month}
                    // day={item.day}
                    date={item.date}
                    weekday={item.day}
                    data=
                    {
                      <FlatList
                        contentContainerStyle={{ width: 300 }}
                        data={slotMon}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                      />
                    }
                  />
                )
              }

              else if (item.day === "Tuesday") {
                return (
                  <Available
                    monthName={item.month}
                    // day={item.day}
                    date={item.date}
                    weekday={item.day}
                    data=
                    {
                      <FlatList
                        contentContainerStyle={{ width: 300 }}
                        data={slotTue}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                      />
                    }
                  />
                )
              }
              else if (item.day === "Wednesday") {
                return (
                  <Available
                    monthName={item.month}
                    // day={item.day}
                    date={item.date}
                    weekday={item.day}
                    data=
                    {
                      <FlatList
                        contentContainerStyle={{ width: 300 }}
                        data={slotWed}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                      />
                    }
                  />
                )
              }
            }

            }
          />
        }

      </TaskCardsWrapper>) : null}

      {/* {welcome ?  <Text style={styles.title}> {newarray}</Text>: null  } */}
      {showSchedule ? (<TaskCardsWrapper>
        <Text style={{ textAlign: 'center', fontSize: 28, color: Configurations.colors.secCol }}>Step 1/3</Text>
        {
          <FlatList
            contentContainerStyle={{ maxHeight: 100 }}
            horizontal
            contentContainerStyle={{ alignItems: 'center', justifyContent: 'flex-start' }}
            // alwaysBounceHorizontal={true}
            data={Days}
            renderItem={({ item }) => {
              if (item.day === "Monday") {
                return (
                  <Available
                    monthName={item.month}
                    // day={item.day}
                    date={item.date}
                    weekday={item.day}
                    data=
                    {
                      <FlatList
                        contentContainerStyle={{ width: 300 }}
                        data={slotMon}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                      />
                    }
                  />
                )
              }

              else if (item.day === "Tuesday") {
                return (
                  <Available
                    monthName={item.month}
                    // day={item.day}
                    date={item.date}
                    weekday={item.day}
                    data=
                    {
                      <FlatList
                        contentContainerStyle={{ width: 300 }}
                        data={slotTue}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                      />
                    }
                  />
                )
              }
              else if (item.day === "Wednesday") {
                return (
                  <Available
                    monthName={item.month}
                    // day={item.day}
                    date={item.date}
                    weekday={item.day}
                    data=
                    {
                      <FlatList
                        contentContainerStyle={{ width: 300 }}
                        data={slotWed}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                      />
                    }
                  />
                )
              }
            }

            }
          />
        }

      </TaskCardsWrapper>) : null}


      <NavBarCon>
        <NavBar />
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
    marginTop: 300,
    width: 250
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#fff'
  },
  header: {
    position: 'absolute',
    zIndex: 10,

  }, item: {
    //   backgroundColor:Configurations.colors.backCol,
    //   padding: 10,
    //   marginVertical: 6,
    //   marginHorizontal: 40,
    //  borderRadius:10
    margin: 15,
    backgroundColor: Configurations.colors.primCol,
    padding: 5,
    // width:'90%',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopWidth: 1.5,
    borderRightWidth: .5,
    borderBottomWidth: 1.5,
    borderLeftWidth: 1.5,
    borderRadius: 15,
    borderTopColor: '#ffffff70',
    borderRightColor: '#ffffff70',
    borderBottomColor: '#ffffff70',
    borderLeftColor: '#ffffff70',
    shadowColor: Configurations.colors.secCol,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  title2: {
    fontSize: 18,
    textAlign: 'center'
  },
});

export default TaskboardScreen