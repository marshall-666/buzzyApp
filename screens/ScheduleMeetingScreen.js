import React, { useState, useEffect, useContext } from 'react';
import { Button, View, Text, StyleSheet,FlatList ,TouchableOpacity,SectionList,ScrollView} from 'react-native';
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
import { compare } from 'semver';
import Comparsion from '../comps/Comparsion';
const TaskButtonsWrapper = styled.View`
margin-top:10%;
margin-bottom:5%;
display:flex;
flex-wrap:nowrap;
flex-direction:row;
width:90%;
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
top:92%;
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

const SECTIONS = [
  {
    title: 'BuzzyBee',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Group',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'Abbey',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        key: '3',
        text: 'Nick',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        text: 'Warren',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Levi',
        uri: 'https://picsum.photos/id/1008/200',
      },{
        key: '6',
        text: 'Jody',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  },
 
];
const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title2, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);
const TaskboardScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(category)
  const [courses, setCourses] = useState(coursesData)
  const [groups, setGroups] = useState(groupsData)
  const [events, setEvents] = useState(eventsData)
  const [showcourses, setShowCourses] = useState(showcourses)
  const [course, setCourse] = useState(false)
  const [Levi, setLevi] = useState(false)
  const [event, setEvent] = useState(false)
  const [coursebgc, setCourseBgc] = useState(false)
  const [eventbgc, setEventBgc] = useState(false)
  const [groupbgc, setGroupBgc] = useState(false)
  const [textColorC, setTextColorC] = useState(false)
  const [textColorG, setTextColorG] = useState(false)
  const [textColorE, setTextColorE] = useState(false)
  const [welcome, setWelcome] = useState(true)
 
const slotAvailable =[]
const slotTue =[]
const slotMon =[]

  var ScheduleMon = [
    {
      title: "businessCom",
      startTime: new Date("2021/11/22 9:30 AM"),
      endTime: new Date("2021/11/22 12:20 PM")
    },
    {
      title: "Design2",
      startTime: new Date("2021/11/22 01:30 PM"),
      endTime: new Date("2021/11/22 04:20 PM")
    },
    {
      title: "Communting",
      startTime: new Date("2021/11/22 04:30 PM"),
      endTime: new Date("2021/11/22 05:20 PM")
    },
    {
      title: " do assignment",
      startTime: new Date("2021/11/22 06:50 PM"),
      endTime: new Date("2021/11/22 09:30 PM")
    },
  ];
  var ScheduleTue = [
    {
      title: "Asset Design and intergration",
      startTime: new Date("2021/11/23 9:30 AM"),
      endTime: new Date("2021/11/23 12:20 PM")
    },
    {
      title: "Advance Photoshop",
      startTime: new Date("2021/11/23 01:30 PM"),
      endTime: new Date("2021/11/23 04:20 PM")
    },
    {
      title: "Communting",
      startTime: new Date("2021/11/23 04:30 PM"),
      endTime: new Date("2021/11/23 05:20 PM")
    },
    {
      title: " do assignment",
      startTime: new Date("2021/11/23 06:50 PM"),
      endTime: new Date("2021/11/23 09:30 PM")
    },
    {
      title: " do assignment2",
      startTime: new Date("2021/11/23 10:00 PM"),
      endTime: new Date("2021/11/23 11:20 PM")
    },
  ];
  function slotFitsMon(meeting) {
    if (ScheduleMon.length == 0) return true;
    return ScheduleMon.some(function (s, i) {
      return (i == 0 && meeting.endTime <= s.startTime) || // slot is before all others
        (s.endTime <= meeting.startTime && !ScheduleMon[i + 1]) || // slot is after all others
        (s.endTime <= meeting.startTime && ScheduleMon[i + 1].startTime >= meeting.endTime) // Slot between others
    });
  };
  function slotFitsTue(meeting) {
    if (ScheduleTue.length == 0) return true;
    return ScheduleTue.some(function (s, i) {
      return (i == 0 && meeting.endTime <= s.startTime) || // slot is before all others
        (s.endTime <= meeting.startTime && !ScheduleTue[i + 1]) || // slot is after all others
        (s.endTime <= meeting.startTime && ScheduleTue[i + 1].startTime >= meeting.endTime) // Slot between others
    });
  };
  const meetingMon = 
  [{  id:1,
      title: "Monday 08:30-09:20",
      startTime: new Date("2021/11/22 8:30 AM"),
      endTime: new Date("2021/11/22 9:20 AM")
    },
    { id:2,
      title: "Monday 09:30-10:20",
      startTime: new Date("2021/11/22 9:30 AM"),
      endTime: new Date("2021/11/22 10:20 AM")
    },
    { id:3,
      title: "Monday 10:30-11:20",
      startTime: new Date("2021/11/22 10:30 AM"),
      endTime: new Date("2021/11/22 11:20 PM")
    },
    { id:4,
      title: "Monday 11:30-12:20",
      startTime: new Date("2021/11/22 11:30 AM"),
      endTime: new Date("2021/11/22 12:20 PM")
    },
    { id:5,
      title: "Monday 12:30-13:20",
      startTime: new Date("2021/11/22 12:30 PM"),
      endTime: new Date("2021/11/22 01:20 PM")
    }, {id:6,
      title: "Monday 13:30-14:20",
      startTime: new Date("2021/11/22 01:30 PM"),
      endTime: new Date("2021/11/22 02:20 PM")
    },
    { id:7,
      title: "Monday 14:30-15:20",
      startTime: new Date("2021/11/22 02:30 PM"),
      endTime: new Date("2021/11/22 03:20 PM")
    },
    { id:8,
      title: "Monday 15:30-16:20",
      startTime: new Date("2021/11/22 03:30 PM"),
      endTime: new Date("2021/11/22 04:20 PM")
    },
    { id:9,
      title: "Monday 16:30-17:20",
      startTime: new Date("2021/11/22 04:30 PM"),
      endTime: new Date("2021/11/22 05:20 PM")
    },
    { id:10,
      title: "Monday 17:30-18:20",
      startTime: new Date("2021/11/22 05:30 PM"),
      endTime: new Date("2021/11/22 06:20 PM")
    },
    { id:11,
      title: "Monday 18:30-19:20",
      startTime: new Date("2021/11/22 06:30 PM"),
      endTime: new Date("2021/11/22 07:20 PM")
    },
    { id:12,
      title: "Monday 19:30-20:20",
      startTime: new Date("2021/11/22 07:30 PM"),
      endTime: new Date("2021/11/22 08:20 PM")
    },
    { id:13,
      title: "Monday 20:30-21:20",
      startTime: new Date("2021/11/22 08:30 PM"),
      endTime: new Date("2021/11/22 09:20 PM")
    },
    { id:14,
      title: "Monday 21:30-22:20",
      startTime: new Date("2021/11/22 09:30 PM"),
      endTime: new Date("2021/11/22 10:20 PM")
    },
    { id:15,
      title: "Monday 22:30-23:20",
      startTime: new Date("2021/11/22 10:30 PM"),
      endTime: new Date("2021/11/22 11:20 PM")
    },
  
    ]
    const comparsionMon = meetingMon.forEach(function (meeting, i) {
      if (slotFitsMon(meeting) == true) {
        // return   meeting.title
        // console.log(meeting.title)
        slotMon.push(meeting)
      }
    });
    const meetingTue = 
  [{  id:1,
      title: "Tuesday 08:30-09:20",
      startTime: new Date("2021/11/23 8:30 AM"),
      endTime: new Date("2021/11/23 9:20 AM")
    },
    { id:2,
      title: "Tuesday 09:30-10:20",
      startTime: new Date("2021/11/23 9:30 AM"),
      endTime: new Date("2021/11/23 10:20 AM")
    },
    { id:3,
      title: "Tuesday 10:30-11:20",
      startTime: new Date("2021/11/23 10:30 AM"),
      endTime: new Date("2021/11/23 11:20 PM")
    },
    { id:4,
      title: "Tuesday 11:30-12:20",
      startTime: new Date("2021/11/23 11:30 AM"),
      endTime: new Date("2021/11/23 12:20 PM")
    },
    { id:5,
      title: "Tuesday 12:30-13:20",
      startTime: new Date("2021/11/23 12:30 PM"),
      endTime: new Date("2021/11/23 01:20 PM")
    }, {id:6,
      title: "Tuesday 13:30-14:20",
      startTime: new Date("2021/11/23 01:30 PM"),
      endTime: new Date("2021/11/23 02:20 PM")
    },
    { id:7,
      title: "Tuesday 14:30-15:20",
      startTime: new Date("2021/11/23 02:30 PM"),
      endTime: new Date("2021/11/23 03:20 PM")
    },
    { id:8,
      title: "Tuesday 15:30-16:20",
      startTime: new Date("2021/11/23 03:30 PM"),
      endTime: new Date("2021/11/23 04:20 PM")
    },
    { id:9,
      title: "Tuesday 16:30-17:20",
      startTime: new Date("2021/11/23 04:30 PM"),
      endTime: new Date("2021/11/23 05:20 PM")
    },
    { id:10,
      title: "Tuesday 17:30-18:20",
      startTime: new Date("2021/11/23 05:30 PM"),
      endTime: new Date("2021/11/23 06:20 PM")
    },
    { id:11,
      title: "Tuesday 18:30-19:20",
      startTime: new Date("2021/11/23 06:30 PM"),
      endTime: new Date("2021/11/23 07:20 PM")
    },
    { id:12,
      title: "Tuesday 19:30-20:20",
      startTime: new Date("2021/11/23 07:30 PM"),
      endTime: new Date("2021/11/23 08:20 PM")
    },
    { id:13,
      title: "Tuesday 20:30-21:20",
      startTime: new Date("2021/11/23 08:30 PM"),
      endTime: new Date("2021/11/23 09:20 PM")
    },
    { id:14,
      title: "Tuesday 21:30-22:20",
      startTime: new Date("2021/11/23 09:30 PM"),
      endTime: new Date("2021/11/23 10:20 PM")
    },
    { id:15,
      title: "Tuesday 22:30-23:20",
      startTime: new Date("2021/11/23 10:30 PM"),
      endTime: new Date("2021/11/23 11:20 PM")
    },
  
    ]
    const comparsionTue = meetingTue.forEach(function (meeting, i) {
      if (slotFitsTue(meeting) == true) {
        // return   meeting.title
        // console.log(meeting.title)
        slotTue.push(meeting)
      }
    });

  const { user,users } = useContext(AuthenticatedUserContext);
  var randomColor = require('randomcolor'); // import the script
  var color = randomColor(); // a hex code for an attractive color
  randomColor({
    luminosity: 'bright',
    format: 'rgb' // e.g. 'rgb(225,200,20)'
  });

  const AbbeyPress = () => {
    setCourse(true)
    setLevi(false)
    setEvent(false)
    setCourseBgc(true)
    setEventBgc(false)
    setGroupBgc(false)
   
    setWelcome(false)
  }
  const NickPress = () => {
    setCourse(true)
    setLevi(false)
    setEvent(false)
    setCourseBgc(true)
    setEventBgc(false)
    setGroupBgc(false)
  
    setWelcome(false)
  }
  const WarrenPress = () => {
    setCourse(true)
    setLevi(false)
    setEvent(false)
    setCourseBgc(true)
    setEventBgc(false)
    setGroupBgc(false)
   
    setWelcome(false)
  }
  const GroupPress = () => {
    setLevi(true)
    setCourse(false)
    setEvent(false)
    setGroupBgc(true)
    setEventBgc(false)
    setCourseBgc(false)
   
    setWelcome(false)
  }
  const LeviPress = () => {
    setEvent(true)
    setCourse(false)
    setLevi(true)
    setCourseBgc(false)
    setEventBgc(true)
    setGroupBgc(false)
   
    setWelcome(false)
  }
  const JodyPress = () => {
    setCourse(true)
    setLevi(false)
    setEvent(false)
    setCourseBgc(true)
    setEventBgc(false)
    setGroupBgc(false)
    
    setWelcome(false)
  }

  // const renderItem = ({ item }) => (
  //   <Item title={item.title} />
  // );
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? Configurations.colors.secCol: Configurations.colors.backCol;
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
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
      backgroundColor: Configurations.colors.backCol  }}>
    
    
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
    onBtnPress={LeviPress}
  />
   <TaskBtn 
    displayBtn='none'
    displayImg='flex'
    name='Jody'
    onBtnPress={JodyPress}
  />
    </ScrollView >

  </TaskButtonsWrapper>
  <TaskCardArea/> 
     
    
  {/* {welcome ?  <Text style={styles.title}> {newarray}</Text>: null  } */}
  { Levi ? (<TaskCardsWrapper>
    {
      <FlatList
      data={slotMon}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
    
    }
     
      </TaskCardsWrapper>) : null}
   
  
      <NavBarCon>
      <NavBar/>
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
    backgroundColor:Configurations.colors.backCol,
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 40,
   borderRadius:10
  },
  title2: {
    fontSize: 24,
    textAlign:'center'
  },
});

export default TaskboardScreen