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
import talktoserver from "../api/talktoserver"


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
const ScheduleMeetingScreen = ({ navigation, route }) => {
  const [tasks, setTasks] = useState(category)
  const [courses, setCourses] = useState(coursesData)
  const [groups, setGroups] = useState(groupsData)
  const [events, setEvents] = useState(eventsData)
  const [showcourses, setShowCourses] = useState(showcourses)
  const [showLevi, setShowLevi] = useState(false)
  const [showWarren, setShowWarren] = useState(false)
  const [showNick, setShowNick] = useState(false)
  const [showJody, setShowJody] = useState(false)
  const [showAbbey, setShowAbbey] = useState(false)
  const [showGroup, setShowGroup] = useState(false)
  const [showAll, setShowAll] = useState(true)
  const [showTest, setShowTest] = useState(false)
  const [dbResult, setDbResult] = useState()
  // const [Schedule, setSchedule] = useState([])

  const { groupId, groupName, memsArray, members } = route.params

  
  const Schedule = [];
  const Courses = [
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
    }
  ];
  const slotTue = []
  const slotMon = []
  const slotWed = []

  var Levi = [
    {
      title: " lunch",
      startTime: new Date("2021/12/06 12:40 PM"),
      endTime: new Date("2021/12/06 01:10 PM"),
    },
    {
      title: "Communting",
      startTime: new Date("2021/12/06 04:30 PM"),
      endTime: new Date("2021/12/06 05:20 PM"),
    },
    {
      title: " do assignment",
      startTime: new Date("2021/12/06 06:50 PM"),
      endTime: new Date("2021/12/06 09:30 PM"),
    },
    {
      title: "Communting",
      startTime: new Date("2021/12/07 04:30 PM"),
      endTime: new Date("2021/12/07 05:20 PM")
    },
    {
      title: " do assignment",
      startTime: new Date("2021/12/07 06:50 PM"),
      endTime: new Date("2021/12/07 09:30 PM")
    },
    {
      title: " do assignment2",
      startTime: new Date("2021/12/07 10:00 PM"),
      endTime: new Date("2021/12/07 11:20 PM")
    },
    {
      title: "Communting",
      startTime: new Date("2021/12/08 04:30 PM"),
      endTime: new Date("2021/12/08 05:20 PM")
    },
    {
      title: " do assignment",
      startTime: new Date("2021/12/08 06:50 PM"),
      endTime: new Date("2021/12/08 09:30 PM")
    },
    {
      title: " do assignment2",
      startTime: new Date("2021/12/08 10:00 PM"),
      endTime: new Date("2021/12/08 11:20 PM")
    },

  ];
  var Warren = [
    {
      title: "Communting",
      startTime: new Date("2021/12/06 08:00 AM"),
      endTime: new Date("2021/12/06 09:00 AM"),
    },
    {
      title: "Communting",
      startTime: new Date("2021/12/06 04:30 PM"),
      endTime: new Date("2021/12/06 05:20 PM"),
    },
    {
      title: " do assignment",
      startTime: new Date("2021/12/06 06:50 PM"),
      endTime: new Date("2021/12/06 09:30 PM"),
    },
    {
      title: "Communting",
      startTime: new Date("2021/12/07 08:00 AM"),
      endTime: new Date("2021/12/07 09:00 AM"),
    },
    {
      title: "Communting",
      startTime: new Date("2021/12/07 04:30 PM"),
      endTime: new Date("2021/12/07 05:20 PM")
    },
    {
      title: " do assignment",
      startTime: new Date("2021/12/07 06:50 PM"),
      endTime: new Date("2021/12/07 09:30 PM")
    },
    {
      title: " do assignment2",
      startTime: new Date("2021/12/07 10:00 PM"),
      endTime: new Date("2021/12/07 11:20 PM")
    },
    {
      title: "Communting",
      startTime: new Date("2021/12/08 04:30 PM"),
      endTime: new Date("2021/12/08 05:20 PM")
    },
    {
      title: " do assignment",
      startTime: new Date("2021/12/08 06:50 PM"),
      endTime: new Date("2021/12/08 09:30 PM")
    },
    {
      title: " do assignment2",
      startTime: new Date("2021/12/08 10:00 PM"),
      endTime: new Date("2021/12/08 11:20 PM")
    },

  ];
  var Nick = [
    {
      title: "Communting",
      startTime: new Date("2021/12/06 08:00 AM"),
      endTime: new Date("2021/12/06 09:00 AM"),
    },
    {
      title: "Communting",
      startTime: new Date("2021/12/06 04:30 PM"),
      endTime: new Date("2021/12/06 05:20 PM"),
    },
    {
      title: " do assignment",
      startTime: new Date("2021/12/06 06:50 PM"),
      endTime: new Date("2021/12/06 09:30 PM"),
    },
    {
      title: "Communting",
      startTime: new Date("2021/12/07 08:00 AM"),
      endTime: new Date("2021/12/07 09:00 AM"),
    },
    {
      title: "Communting",
      startTime: new Date("2021/12/07 04:30 PM"),
      endTime: new Date("2021/12/07 05:20 PM")
    },
    {
      title: " do assignment",
      startTime: new Date("2021/12/07 06:50 PM"),
      endTime: new Date("2021/12/07 09:30 PM")
    },
    {
      title: " do assignment2",
      startTime: new Date("2021/12/07 10:00 PM"),
      endTime: new Date("2021/12/07 11:20 PM")
    },
    {
      title: "Communting",
      startTime: new Date("2021/12/08 04:30 PM"),
      endTime: new Date("2021/12/08 06:20 PM")
    },
    {
      title: " do assignment",
      startTime: new Date("2021/12/08 06:50 PM"),
      endTime: new Date("2021/12/08 09:30 PM")
    },
    {
      title: " do assignment2",
      startTime: new Date("2021/12/08 10:00 PM"),
      endTime: new Date("2021/12/08 11:20 PM")
    },

  ];
  var Abbey = [
    {
      title: "Communting",
      startTime: new Date("2021/12/06 04:30 PM"),
      endTime: new Date("2021/12/06 05:20 PM"),
    },
    {
      title: " do assignment",
      startTime: new Date("2021/12/06 06:50 PM"),
      endTime: new Date("2021/12/06 09:30 PM"),
    },
    {
      title: "Communting",
      startTime: new Date("2021/12/07 08:00 AM"),
      endTime: new Date("2021/12/07 09:00 AM"),
    },
    {
      title: "Communting",
      startTime: new Date("2021/12/07 04:30 PM"),
      endTime: new Date("2021/12/07 05:20 PM")
    },
    {
      title: " do assignment",
      startTime: new Date("2021/12/07 06:50 PM"),
      endTime: new Date("2021/12/07 09:30 PM")
    },
    {
      title: " do assignment2",
      startTime: new Date("2021/12/07 10:00 PM"),
      endTime: new Date("2021/12/07 11:20 PM")
    },
    {
      title: "Communting",
      startTime: new Date("2021/12/08 04:30 PM"),
      endTime: new Date("2021/12/08 06:20 PM")
    },
    {
      title: " do assignment",
      startTime: new Date("2021/12/08 06:50 PM"),
      endTime: new Date("2021/12/08 09:30 PM")
    },

  ];
  var Jody = [
    {
      title: " lunch",
      startTime: new Date("2021/12/07 12:40 PM"),
      endTime: new Date("2021/12/07 01:10 PM"),
    },
    {
      title: "Communting",
      startTime: new Date("2021/12/06 04:30 PM"),
      endTime: new Date("2021/12/06 05:20 PM"),
    },
    {
      title: " do assignment",
      startTime: new Date("2021/12/06 06:50 PM"),
      endTime: new Date("2021/12/06 09:30 PM"),
    },
    {
      title: "Communting",
      startTime: new Date("2021/12/07 08:00 AM"),
      endTime: new Date("2021/12/07 09:00 AM"),
    },
    {
      title: "Communting",
      startTime: new Date("2021/12/07 04:30 PM"),
      endTime: new Date("2021/12/07 05:20 PM")
    },
    {
      title: " do assignment",
      startTime: new Date("2021/12/07 06:50 PM"),
      endTime: new Date("2021/12/07 09:30 PM")
    },

    {
      title: "Communting",
      startTime: new Date("2021/12/08 04:30 PM"),
      endTime: new Date("2021/12/08 06:20 PM")
    },
    {
      title: " do assignment",
      startTime: new Date("2021/12/08 06:50 PM"),
      endTime: new Date("2021/12/08 09:30 PM")
    },

  ];
  if (showLevi == true) {
    const result = Courses.concat(Levi)
    Schedule.push(...result)
  }
  else if (showWarren == true) {
    const result = Courses.concat(Warren)
    Schedule.push(...result)
  }
  else if (showNick == true) {
    const result = Courses.concat(Nick)
    Schedule.push(...result)
  } else if (showAbbey == true) {
    const result = Courses.concat(Abbey)
    Schedule.push(...result)
  } else if (showJody == true) {
    const result = Courses.concat(Jody)
    Schedule.push(...result)
  } else if (showGroup == true&& members.length===5) {
    const result1 = Courses.concat(Levi)
    const result2 = result1.concat(Warren)
    const result3 = result2.concat(Abbey)
    const result4 = result3.concat(Jody)
    const result = result4.concat(Nick)
    Schedule.push(...result)
  }else if (showGroup == true&& members.length===4) {
    const result1 = Courses.concat(Levi)
    const result2 = result1.concat(Warren)
    const result3 = result2.concat(Abbey)
    const result = result3.concat(Nick)
    Schedule.push(...result)
  }else if (showGroup == true&& members.length===3) {
    const result1 = Courses.concat(Levi)
    const result2 = result1.concat(Warren)
    const result = result2.concat(Abbey)
    Schedule.push(...result)
  }else if (showGroup == true&& members.length===2) {
    const result1 = Courses.concat(Levi)
    const result = result1.concat(Warren)
    Schedule.push(...result)
  }
  else if (showGroup == true&& members.length===1) {
    const result = Courses.concat(Levi)
    Schedule.push(...result)
  }
  else if (showTest == true) {

    const result = Courses.concat(dbResult)
    Schedule.push(...result)
  }
  else {
    Schedule.push(...Courses)
  }

  Schedule.sort(function (a, b) {
    return a.startTime - b.startTime;
  });


  // console.log(Schedule.length)
  var loadSlots = {
    op: 'load_slot',
    group_id: groupId,
  }

  talktoserver(loadSlots).then((rd) => {
    setDbResult(rd)
  })

  // console.log(dbResult)
  // console.log(Schedule)
  // var indiSlots = {
  //     op: 'indi_slot',
  //     user_id: '',
  //     subject_id: '',
  // }
  // talktoserver(indiSlots).then((rd) => {
  //     setDbResult(rd)
  // })
  //   console.log(dbResult)
  //   console.log(indiSlots)
  // console.log(result)
  // console.log(Schedule)
  // }


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
      startTime: new Date("2021/12/06 8:30:00 "),
      endTime: new Date("2021/12/06 9:20:00 "),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 9:30 AM"),
      title: "Monday 09:30-10:20",
      startTime: new Date("2021/12/06 9:30:00 AM"),
      endTime: new Date("2021/12/06 10:20:00 AM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 10:30 AM"),
      title: "Monday 10:30-11:20",
      startTime: new Date("2021/12/06 10:30:00 AM"),
      endTime: new Date("2021/12/06 11:20:00 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 11:30 AM"),
      title: "Monday 11:30-12:20",
      startTime: new Date("2021/12/06 11:30:00 AM"),
      endTime: new Date("2021/12/06 12:20:00 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 12:30 PM"),
      title: "Monday 12:30-13:20",
      startTime: new Date("2021/12/06 12:30:00 PM"),
      endTime: new Date("2021/12/06 01:20:00 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 01:30 PM"),
      title: "Monday 13:30-14:20",
      startTime: new Date("2021/12/06 01:30:00 PM"),
      endTime: new Date("2021/12/06 02:20:00 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 02:30 PM"),
      title: "Monday 14:30-15:20",
      startTime: new Date("2021/12/06 02:30:00 PM"),
      endTime: new Date("2021/12/06 03:20:00 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 03:30 PM"),
      title: "Monday 15:30-16:20",
      startTime: new Date("2021/12/06 03:30:00 PM"),
      endTime: new Date("2021/12/06 04:20:00 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 04:30 PM"),
      title: "Monday 16:30-17:20",
      startTime: new Date("2021/12/06 04:30:00 PM"),
      endTime: new Date("2021/12/06 05:20:00 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 05:30 PM"),
      title: "Monday 17:30-18:20",
      startTime: new Date("2021/12/06 05:30:00 PM"),
      endTime: new Date("2021/12/06 06:20:00 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 06:30 PM"),
      title: "Monday 18:30-19:20",
      startTime: new Date("2021/12/06 06:30:00 PM"),
      endTime: new Date("2021/12/06 07:20:00 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 07:30 PM"),
      title: "Monday 19:30-20:20",
      startTime: new Date("2021/12/06 07:30:00 PM"),
      endTime: new Date("2021/12/06 08:20:00 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 08:30 PM"),
      title: "Monday 20:30-21:20",
      startTime: new Date("2021/12/06 08:30:00 PM"),
      endTime: new Date("2021/12/06 09:20:00 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 09:30 PM"),
      title: "Monday 21:30-22:20",
      startTime: new Date("2021/12/06 09:30:00 PM"),
      endTime: new Date("2021/12/06 10:20:00 PM"),
      Wday: 'Monday',
      mm: 'December',
      dd: '06'
    },
    {
      id: Date.parse("2021/12/06 10:30 PM"),
      title: "Monday 22:30-23:20",
      startTime: new Date("2021/12/06 10:30:00 PM"),
      endTime: new Date("2021/12/06 11:20:00 PM"),
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
      startTime: new Date("2021/12/07 8:30:00 AM"),
      endTime: new Date("2021/12/07 9:20:00 AM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 9:30 AM"),
      title: "Tuesday 09:30-10:20",
      startTime: new Date("2021/12/07 9:30:00 AM"),
      endTime: new Date("2021/12/07 10:20:00 AM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 10:30 AM"),
      title: "Tuesday 10:30-11:20",
      startTime: new Date("2021/12/07 10:30:00 AM"),
      endTime: new Date("2021/12/07 11:20:00 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 11:30 AM"),
      title: "Tuesday 11:30-12:20",
      startTime: new Date("2021/12/07 11:30:00 AM"),
      endTime: new Date("2021/12/07 12:20:00 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 12:30 PM"),
      title: "Tuesday 12:30-13:20",
      startTime: new Date("2021/12/07 12:30:00 PM"),
      endTime: new Date("2021/12/07 01:20:00 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    }, {
      id: Date.parse("2021/12/07 01:30 PM"),
      title: "Tuesday 13:30-14:20",
      startTime: new Date("2021/12/07 01:30:00 PM"),
      endTime: new Date("2021/12/07 02:20:00 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 02:30 PM"),
      title: "Tuesday 14:30-15:20",
      startTime: new Date("2021/12/07 02:30:00 PM"),
      endTime: new Date("2021/12/07 03:20:00 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 03:30 PM"),
      title: "Tuesday 15:30-16:20",
      startTime: new Date("2021/12/07 03:30:00 PM"),
      endTime: new Date("2021/12/07 04:20:00 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 04:30 PM"),
      title: "Tuesday 16:30-17:20",
      startTime: new Date("2021/12/07 04:30:00 PM"),
      endTime: new Date("2021/12/07 05:20:00 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 05:30 PM"),
      title: "Tuesday 17:30-18:20",
      startTime: new Date("2021/12/07 05:30:00 PM"),
      endTime: new Date("2021/12/07 06:20:00 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 06:30 PM"),
      title: "Tuesday 18:30-19:20",
      startTime: new Date("2021/12/07 06:30:00 PM"),
      endTime: new Date("2021/12/07 07:20:00 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 07:30 PM"),
      title: "Tuesday 19:30-20:20",
      startTime: new Date("2021/12/07 07:30:00 PM"),
      endTime: new Date("2021/12/07 08:20:00 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 08:30 PM"),
      title: "Tuesday 20:30-21:20",
      startTime: new Date("2021/12/07 08:30:00 PM"),
      endTime: new Date("2021/12/07 09:20:00 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 09:30 PM"),
      title: "Tuesday 21:30-22:20",
      startTime: new Date("2021/12/07 09:30:00 PM"),
      endTime: new Date("2021/12/07 10:20:00 PM"),
      Wday: 'Tuesday',
      mm: 'December',
      dd: '07'
    },
    {
      id: Date.parse("2021/12/07 10:30 PM"),
      title: "Tuesday 22:30-23:20",
      startTime: new Date("2021/12/07 10:30:00 PM"),
      endTime: new Date("2021/12/07 11:20:00 PM"),
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
      startTime: new Date("2021/12/08 8:30:00 AM"),
      endTime: new Date("2021/12/08 9:20:00 AM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 9:30 AM"),
      title: "Wed 09:30-10:20",
      startTime: new Date("2021/12/08 9:30:00 AM"),
      endTime: new Date("2021/12/08 10:20:00 AM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 10:30 AM"),
      title: "Wed 10:30-11:20",
      startTime: new Date("2021/12/08 10:30:00 AM"),
      endTime: new Date("2021/12/08 11:20:00 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 11:30 AM"),
      title: "Wed 11:30-12:20",
      startTime: new Date("2021/12/08 11:30:00 AM"),
      endTime: new Date("2021/12/08 12:20:00 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 12:30 PM"),
      title: "Wed 12:30-13:20",
      startTime: new Date("2021/12/08 12:30:00 PM"),
      endTime: new Date("2021/12/08 01:20:00 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    }, {
      id: Date.parse("2021/12/08 01:30 PM"),
      title: "Wed 13:30-14:20",
      startTime: new Date("2021/12/08 01:30:00 PM"),
      endTime: new Date("2021/12/08 02:20:00 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 02:30 PM"),
      title: "Wed 14:30-15:20",
      startTime: new Date("2021/12/08 02:30:00 PM"),
      endTime: new Date("2021/12/08 03:20:00 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 03:30 PM"),
      title: "Wed 15:30-16:20",
      startTime: new Date("2021/12/08 03:30:00 PM"),
      endTime: new Date("2021/12/08 04:20:00 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 04:30 PM"),
      title: "Wed 16:30-17:20",
      startTime: new Date("2021/12/08 04:30:00 PM"),
      endTime: new Date("2021/12/08 05:20:00 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 05:30 PM"),
      title: "Wed 17:30-18:20",
      startTime: new Date("2021/12/08 05:30:00 PM"),
      endTime: new Date("2021/12/08 06:20:00 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 06:30 PM"),
      title: "Wed 18:30-19:20",
      startTime: new Date("2021/12/08 06:30:00 PM"),
      endTime: new Date("2021/12/08 07:20:00 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 07:30 PM"),
      title: "Wed 19:30-20:20",
      startTime: new Date("2021/12/08 07:30:00 PM"),
      endTime: new Date("2021/12/08 08:20:00 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 08:30 PM"),
      title: "Wed 20:30-21:20",
      startTime: new Date("2021/12/08 08:30:00 PM"),
      endTime: new Date("2021/12/08 09:20:00 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 09:30 PM"),
      title: "Wed 21:30-22:20",
      startTime: new Date("2021/12/08 09:30:00 PM"),
      endTime: new Date("2021/12/08 10:20:00 PM"),
      Wday: 'Wednesday',
      mm: 'December',
      dd: '08'
    },
    {
      id: Date.parse("2021/12/08 10:30 PM"),
      title: "Wed 22:30-23:20",
      startTime: new Date("2021/12/08 10:30:00 PM"),
      endTime: new Date("2021/12/08 11:20:00 PM"),
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




  const { user, users } = useContext(AuthenticatedUserContext);
  var randomColor = require('randomcolor'); // import the script
  var color = randomColor(); // a hex code for an attractive color
  randomColor({
    luminosity: 'bright',
    format: 'rgb' // e.g. 'rgb(225,200,20)'
  });

  const GroupPress = () => {
    setShowGroup(true)
    setShowAbbey(false)
    setShowNick(false)
    setShowWarren(false)
    setShowLevi(false)
    setShowJody(false)
    setShowAll(false)
    setShowTest(false)

  }
  const AbbeyPress = () => {
    setShowGroup(false)
    setShowAbbey(true)
    setShowNick(false)
    setShowWarren(false)
    setShowLevi(false)
    setShowJody(false)
    setShowAll(false)
    setShowTest(false)

  }
  const NickPress = () => {
    setShowGroup(false)
    setShowAbbey(false)
    setShowNick(true)
    setShowWarren(false)
    setShowLevi(false)
    setShowJody(false)
    setShowAll(false)
    setShowTest(false)

  }
  const WarrenPress = () => {
    setShowGroup(false)
    setShowAbbey(false)
    setShowNick(false)
    setShowWarren(true)
    setShowLevi(false)
    setShowJody(false)
    setShowAll(false)
    setShowTest(false)

  }

  const LeviPress = () => {
    setShowGroup(false)
    setShowAbbey(false)
    setShowNick(false)
    setShowWarren(false)
    setShowLevi(true)
    setShowJody(false)
    setShowAll(false)
    setShowTest(false)


  }
  const JodyPress = () => {
    setShowGroup(false)
    setShowAbbey(false)
    setShowNick(false)
    setShowWarren(false)
    setShowLevi(false)
    setShowJody(true)
    setShowAll(false)
    setShowTest(false)

  }
  const TestPress = () => {
    setShowGroup(false)
    setShowAbbey(false)
    setShowNick(false)
    setShowWarren(false)
    setShowLevi(false)
    setShowJody(false)
    setShowAll(false)
    setShowTest(true)

  }


  const [selectedId, setSelectedId] = useState(null);
  // console.log(Schedule)
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
            name={groupName}
            onBtnPress={GroupPress}
          />

          {members[0]  ? <TaskBtn
            displayBtn='none'
            displayImg='flex'
            name={members[0].name}
            onBtnPress={AbbeyPress}
          /> : null}

          {members[1]  ? <TaskBtn
            displayBtn='none'
            displayImg='flex'
            name={members[1].name}
            onBtnPress={NickPress}
          /> : null}
          {members[2]  ? <TaskBtn
            displayBtn='none'
            displayImg='flex'
            name={members[2].name}
            onBtnPress={WarrenPress}
          /> : null}

          {members[3] ? <TaskBtn
            displayBtn='none'
            displayImg='flex'
            name={members[3].name}
            img={users.img}
            onBtnPress={LeviPress}
          /> : null}
          {members[4]  ? <TaskBtn
            displayBtn='none'
            displayImg='flex'
            name={members[4].name}
            img={users.img}
            onBtnPress={JodyPress}
          /> : null}
          {members[5]  ? <TaskBtn
            displayBtn='none'
            displayImg='flex'
            name={members[5].name}
            img={users.img}
            onBtnPress={TestPress}
          /> : null}
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
      {showGroup ? (<TaskCardsWrapper>
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
      {showAbbey ? (<TaskCardsWrapper>
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
      {showNick ? (<TaskCardsWrapper>
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
      {showWarren ? (<TaskCardsWrapper>
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
      {showLevi ? (<TaskCardsWrapper>
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
      {showJody ? (<TaskCardsWrapper>
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
      {showTest ? (<TaskCardsWrapper>
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

export default ScheduleMeetingScreen