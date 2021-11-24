import React ,{useState,createContext} from "react";
import {View, TouchableOpacity, Dimensions,Text} from 'react-native';
import Styled from "styled-components/native";

// const newarray =[]


const Comparsion =({
props
})=>{
const newarray =[]
  
  const [array, setArray]=useState([]);

 var Schedule = [
    {
      name: "businessCom",
      startTime: new Date("11/22/2021 9:30 AM"),
      endTime: new Date("11/22/2021 12:20 PM")
    },
    {
      name: "Design2",
      startTime: new Date("11/22/2021 01:30 PM"),
      endTime: new Date("11/22/2021 04:20 PM")
    },
    {
      name: "Communting",
      startTime: new Date("11/22/2021 04:30 PM"),
      endTime: new Date("11/22/2021 05:20 PM")
    },
    {
      name: " do assignment",
      startTime: new Date("11/22/2021 06:50 PM"),
      endTime: new Date("11/22/2021 09:30 PM")
    },
  ];

  function slotFits(meeting) {
    if (Schedule.length == 0) return true;
    return Schedule.some(function (s, i) {
      return (i == 0 && meeting.endTime <= s.startTime) || // slot is before all others
        (s.endTime <= meeting.startTime && !Schedule[i + 1]) || // slot is after all others
        (s.endTime <= meeting.startTime && Schedule[i + 1].startTime >= meeting.endTime) // Slot between others
    });
  };
  
  const meeting = 
  [{
      name: "meeting 08:30-09:20",
      startTime: new Date("11/22/2021 8:30 AM"),
      endTime: new Date("11/22/2021 9:20 AM")
    },
    {
      name: "meeting 09:30-10:20",
      startTime: new Date("11/22/2021 9:30 AM"),
      endTime: new Date("11/22/2021 10:20 AM")
    },
    {
      name: "meeting 10:30-11:20",
      startTime: new Date("11/22/2021 10:30 AM"),
      endTime: new Date("11/22/2021 11:20 PM")
    },
    {
      name: "meeting 11:30-12:20",
      startTime: new Date("11/22/2021 11:30 AM"),
      endTime: new Date("11/22/2021 12:20 PM")
    },
    {
      name: "meeting 12:30-13:20",
      startTime: new Date("11/22/2021 12:30 PM"),
      endTime: new Date("11/22/2021 01:20 PM")
    }, {
      name: "meeting 13:30-14:20",
      startTime: new Date("11/22/2021 01:30 PM"),
      endTime: new Date("11/22/2021 02:20 PM")
    },
    {
      name: "meeting 14:30-15:20",
      startTime: new Date("11/22/2021 02:30 PM"),
      endTime: new Date("11/22/2021 03:20 PM")
    },
    {
      name: "meeting 15:30-16:20",
      startTime: new Date("11/22/2021 03:30 PM"),
      endTime: new Date("11/22/2021 04:20 PM")
    },
    {
      name: "meeting 16:30-17:20",
      startTime: new Date("11/22/2021 04:30 PM"),
      endTime: new Date("11/22/2021 05:20 PM")
    },
    {
      name: "meeting 17:30-18:20",
      startTime: new Date("11/22/2021 05:30 PM"),
      endTime: new Date("11/22/2021 06:20 PM")
    },
    {
      name: "meeting 18:30-19:20",
      startTime: new Date("11/22/2021 06:30 PM"),
      endTime: new Date("11/22/2021 07:20 PM")
    },
    {
      name: "meeting 19:30-20:20",
      startTime: new Date("11/22/2021 07:30 PM"),
      endTime: new Date("11/22/2021 08:20 PM")
    },
    {
      name: "meeting 20:30-21:20",
      startTime: new Date("11/22/2021 08:30 PM"),
      endTime: new Date("11/22/2021 09:20 PM")
    },
    {
      name: "meeting 21:30-22:20",
      startTime: new Date("11/22/2021 09:30 PM"),
      endTime: new Date("11/22/2021 10:20 PM")
    },
    {
      name: "meeting 22:30-23:20",
      startTime: new Date("11/22/2021 10:30 PM"),
      endTime: new Date("11/22/2021 11:20 PM")
    },
  
    ]
    const comparsion = meeting.forEach(function (meeting, i) {
      if (slotFits(meeting) == true) {
        // return   meeting.name
        // console.log(meeting.name)
        // newarray.push(meeting.name)
        setArray(meeting.name)
      }
    });
                                                                              
    console.log(newarray[2]) 
return (
<Text>  {array}   </Text>
 )


}



export default Comparsion