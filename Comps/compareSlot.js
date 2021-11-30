const { merge } = require("lodash");



const LeviSchedule =()=>{
  console.log("Levi available time")
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
      console.log(
        meeting.name + ': ' + "avalible");
    }
  });

}

  const WarrenSchedule= ()=>{
  console.log("Wrran avaliable time")
  var Schedule2 = [
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
      endTime: new Date("11/22/2021 05:40 PM")
    },
    {
      name: " do assignment",
      startTime: new Date("11/22/2021 06:50 PM"),
      endTime: new Date("11/22/2021 08:30 PM")
    },
  ];

 
  function slotFits(meeting) {
    if (Schedule2.length == 0) return true;
    return Schedule2.some(function (s, i) {
      return (i == 0 && meeting.endTime <= s.startTime) || // slot is before all others
        (s.endTime <= meeting.startTime && !Schedule2[i + 1]) || // slot is after all others
        (s.endTime <= meeting.startTime && Schedule2[i + 1].startTime >= meeting.endTime) // Slot between others
    });
  }

  const meeting=
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
    const comparsion =meeting.forEach(function (meeting, i) {
      if (slotFits(meeting) == true) {
        
        console.log(
          meeting.name + ': ' + "avalible");
      }
    });
  }

  LeviSchedule()
WarrenSchedule()

const Groupwith2=()=>{
  console.log("Levi and Warren available time")
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
    endTime: new Date("11/22/2021 05:50 PM")
  },
  {
    name: " do photoshop",
    startTime: new Date("11/22/2021 06:50 PM"),
    endTime: new Date("11/22/2021 07:30 PM")
  },
  {
    name: " do design2",
    startTime: new Date("11/22/2021 07:50 PM"),
    endTime: new Date("11/22/2021 08:50 PM")
  },
  
  
];
var Schedule2 = [
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
    endTime: new Date("11/22/2021 05:50 PM")
  },
  {
    name: " do someting",
    startTime: new Date("11/22/2021 06:50 PM"),
    endTime: new Date("11/22/2021 08:30 PM")
  },
];

let ScheduleCom = Schedule2.concat(Schedule)
console.log(ScheduleCom)

const set = new Set();
const ScheduleAll = ScheduleCom.filter(item => !set.has(item.name) ? set.add(item.name) : false );
// console.log(ScheduleAll)
function slotFits(meeting) {
  if (ScheduleAll.length == 0) return true;
  return ScheduleAll.some(function (s, i) {
    return (i == 0 && meeting.endTime <= s.startTime) || // slot is before all others
      (s.endTime <= meeting.startTime && !ScheduleAll[i + 1]) || // slot is after all others
      (s.endTime <= meeting.startTime && ScheduleAll[i + 1].startTime >= meeting.endTime) // Slot between others
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
      console.log(
        meeting.name + ': ' + "avalible");
    }
  });

}

Groupwith2()

const Groupwith3 =()=>{
  console.log("Levi, Warren, Abbay available time")
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
    endTime: new Date("11/22/2021 05:50 PM")
  },
  {
    name: " do photoshop",
    startTime: new Date("11/22/2021 06:50 PM"),
    endTime: new Date("11/22/2021 07:30 PM")
  },
  {
    name: " do design2",
    startTime: new Date("11/22/2021 07:50 PM"),
    endTime: new Date("11/22/2021 08:20 PM")
  },
  
  
];
var Schedule2 = [
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
    endTime: new Date("11/22/2021 05:50 PM")
  },
  {
    name: " do someting",
    startTime: new Date("11/22/2021 06:50 PM"),
    endTime: new Date("11/22/2021 08:30 PM")
  },
];
var Schedule3 = [
  {
    name: "communting",
    startTime: new Date("11/22/2021 8:40 AM"),
    endTime: new Date("11/22/2021 9:20 AM")
  },
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
    endTime: new Date("11/22/2021 05:50 PM")
  },
  {
    name: " do someting",
    startTime: new Date("11/22/2021 06:50 PM"),
    endTime: new Date("11/22/2021 08:30 PM")
  },
  {
    name: " do design2",
    startTime: new Date("11/22/2021 08:30 PM"),
    endTime: new Date("11/22/2021 09:20 PM")
  },
  
];
const ScheduleCom = Object.assign(Schedule, Schedule2,Schedule3);


const set = new Set();
const ScheduleAll = ScheduleCom.filter(item => !set.has(item.name) ? set.add(item.name) : false );
console.log(ScheduleAll)
function slotFits(meeting) {
  if (ScheduleAll.length == 0) return true;
  return ScheduleAll.some(function (s, i) {
    return (i == 0 && meeting.endTime <= s.startTime) || // slot is before all others
      (s.endTime <= meeting.startTime && !ScheduleAll[i + 1]) || // slot is after all others
      (s.endTime <= meeting.startTime && ScheduleAll[i + 1].startTime >= meeting.endTime) // Slot between others
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
      console.log(
        meeting.name + ': ' + "avalible");
    }
  });

}
Groupwith3()


const Groupwith4 =()=>{
  console.log("Levi, Warren, Abbay,Nick available time")
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
    endTime: new Date("11/22/2021 05:50 PM")
  },
  {
    name: " do photoshop",
    startTime: new Date("11/22/2021 06:50 PM"),
    endTime: new Date("11/22/2021 07:30 PM")
  },
  {
    name: " do design2",
    startTime: new Date("11/22/2021 07:50 PM"),
    endTime: new Date("11/22/2021 08:20 PM")
  },
  
  
];
var Schedule2 = [
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
    endTime: new Date("11/22/2021 05:50 PM")
  },
  {
    name: " do someting",
    startTime: new Date("11/22/2021 06:50 PM"),
    endTime: new Date("11/22/2021 08:30 PM")
  },
];
var Schedule3 = [
  {
    name: "communting",
    startTime: new Date("11/22/2021 8:40 AM"),
    endTime: new Date("11/22/2021 9:20 AM")
  },
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
    endTime: new Date("11/22/2021 05:50 PM")
  },
  {
    name: " do someting",
    startTime: new Date("11/22/2021 06:50 PM"),
    endTime: new Date("11/22/2021 08:30 PM")
  },
  {
    name: " do design2",
    startTime: new Date("11/22/2021 08:30 PM"),
    endTime: new Date("11/22/2021 09:20 PM")
  },
  
];
var Schedule4 = [
  {
    name: "communting",
    startTime: new Date("11/22/2021 8:40 AM"),
    endTime: new Date("11/22/2021 9:20 AM")
  },
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
    endTime: new Date("11/22/2021 05:50 PM")
  },
  {
    name: " do someting",
    startTime: new Date("11/22/2021 06:50 PM"),
    endTime: new Date("11/22/2021 08:30 PM")
  },
  {
    name: " do design2",
    startTime: new Date("11/22/2021 08:30 PM"),
    endTime: new Date("11/22/2021 10:20 PM")
  },
  {
    name: " do project2",
    startTime: new Date("11/22/2021 09:30 PM"),
    endTime: new Date("11/22/2021 09:20 PM")
  },
  {
    name: " shower",
    startTime: new Date("11/22/2021 09:30 PM"),
    endTime: new Date("11/22/2021 10:20 PM")
  },
];
const ScheduleCom = Object.assign(Schedule, Schedule2,Schedule3, Schedule4);
// let ScheduleCom = mergeArray[Schedule,Schedule2,Schedule3]
// let ScheduleCom2 = ScheduleCom1.concat(Schedule3)

const set = new Set();
const ScheduleAll = ScheduleCom.filter(item => !set.has(item.name) ? set.add(item.name) : false );
// console.log(Schedule4)
function slotFits(meeting) {
  if (ScheduleAll.length == 0) return true;
  return ScheduleAll.some(function (s, i) {
    return (i == 0 && meeting.endTime <= s.startTime) || // slot is before all others
      (s.endTime <= meeting.startTime && !ScheduleAll[i + 1]) || // slot is after all others
      (s.endTime <= meeting.startTime && ScheduleAll[i + 1].startTime >= meeting.endTime) // Slot between others
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
      console.log(
        meeting.name + ': ' + "avalible");
    }
  });

}
Groupwith4()
const Groupwith5 =()=>{
  console.log("Levi, Warren, Abbay,Nick, POD available time")
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
    endTime: new Date("11/22/2021 05:50 PM")
  },
  {
    name: " do photoshop",
    startTime: new Date("11/22/2021 06:50 PM"),
    endTime: new Date("11/22/2021 07:30 PM")
  },
  {
    name: " do design2",
    startTime: new Date("11/22/2021 07:50 PM"),
    endTime: new Date("11/22/2021 08:20 PM")
  },
  
  
];
var Schedule2 = [
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
    endTime: new Date("11/22/2021 05:50 PM")
  },
  {
    name: " do someting",
    startTime: new Date("11/22/2021 06:50 PM"),
    endTime: new Date("11/22/2021 08:30 PM")
  },
];
var Schedule3 = [
  {
    name: "skytrain",
    startTime: new Date("11/22/2021 8:30 AM"),
    endTime: new Date("11/22/2021 9:20 AM")
  },
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
    endTime: new Date("11/22/2021 05:50 PM")
  },
  {
    name: " do someting",
    startTime: new Date("11/22/2021 06:50 PM"),
    endTime: new Date("11/22/2021 08:30 PM")
  },
  {
    name: " do design2",
    startTime: new Date("11/22/2021 08:30 PM"),
    endTime: new Date("11/22/2021 09:20 PM")
  },
  
];
var Schedule4 = [
  {
    name: "bus",
    startTime: new Date("11/22/2021 8:30AM"),
    endTime: new Date("11/22/2021 9:20 AM")
  },
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
    endTime: new Date("11/22/2021 05:50 PM")
  },
  {
    name: " do someting",
    startTime: new Date("11/22/2021 06:50 PM"),
    endTime: new Date("11/22/2021 08:30 PM")
  },
  {
    name: " do design2",
    startTime: new Date("11/22/2021 08:30 PM"),
    endTime: new Date("11/22/2021 10:20 PM")
  },
  {
    name: " do project2",
    startTime: new Date("11/22/2021 09:30 PM"),
    endTime: new Date("11/22/2021 09:20 PM")
  },
  {
    name: " shower",
    startTime: new Date("11/22/2021 09:30 PM"),
    endTime: new Date("11/22/2021 10:20 PM")
  },
  
];
var Schedule5 = [
  {
    name: "bus",
    startTime: new Date("11/22/2021 8:30AM"),
    endTime: new Date("11/22/2021 9:20 AM")
  },
  {
    name: "businessCom",
    startTime: new Date("11/22/2021 9:30 AM"),
    endTime: new Date("11/22/2021 12:20 PM")
  },
  {
    name: "Lunch",
    startTime: new Date("11/22/2021 12:40 PM"),
    endTime: new Date("11/22/2021 13:20 PM")
  },
  {
    name: "Design2",
    startTime: new Date("11/22/2021 01:30 PM"),
    endTime: new Date("11/22/2021 04:20 PM")
  },
  {
    name: "Communting",
    startTime: new Date("11/22/2021 04:30 PM"),
    endTime: new Date("11/22/2021 05:50 PM")
  },
  {
    name: " do someting",
    startTime: new Date("11/22/2021 06:50 PM"),
    endTime: new Date("11/22/2021 08:30 PM")
  },
  {
    name: " do design2",
    startTime: new Date("11/22/2021 08:30 PM"),
    endTime: new Date("11/22/2021 10:20 PM")
  },
  {
    name: " do project2",
    startTime: new Date("11/22/2021 09:30 PM"),
    endTime: new Date("11/22/2021 09:20 PM")
  },
  {
    name: " shower",
    startTime: new Date("11/22/2021 09:30 PM"),
    endTime: new Date("11/22/2021 10:20 PM")
  },
  
];
const ScheduleCom = Object.assign(Schedule, Schedule2,Schedule3, Schedule4,Schedule5);
// let ScheduleCom = mergeArray[Schedule,Schedule2,Schedule3]
// let ScheduleCom2 = ScheduleCom1.concat(Schedule3)

const set = new Set();
const ScheduleAll = ScheduleCom.filter(item => !set.has(item.name) ? set.add(item.name) : false );
// console.log(ScheduleAll)
function slotFits(meeting) {
  if (ScheduleAll.length == 0) return true;
  return ScheduleAll.some(function (s, i) {
    return (i == 0 && meeting.endTime <= s.startTime) || // slot is before all others
      (s.endTime <= meeting.startTime && !ScheduleAll[i + 1]) || // slot is after all others
      (s.endTime <= meeting.startTime && ScheduleAll[i + 1].startTime >= meeting.endTime) // Slot between others
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
      console.log(
        meeting.name + ': ' + "avalible");
    }
  });

}
Groupwith5()