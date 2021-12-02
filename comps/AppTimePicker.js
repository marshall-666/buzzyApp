import React, {useState} from 'react';
import {View, Button, Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import  {Configurations} from'../PropConfig/Props'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import styled from 'styled-components/native'

const TimeCon =styled.Text`
fontSize:20px;
color:${Configurations.colors.secCol}

`

 const  AppTimePicker1 = ({
  startTime, setStartTime,
  ff='Galvji'
 }
 ) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  // const [startTime,setStartTime] =useState('Pick start Time')


 
  const onChange = (event, selectedDate) => {  
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    
    let tempDate =new Date(currentDate);
    let m=tempDate.getMonth()
    if (m===0){fm="01";}
        else if (m===1){fm="02";}
        else if (m===2){fm="03";}
        else if (m===3){fm="04";}
        else if (m===4){fm="05";}
        else if (m===5){fm="06";}
        else if (m===6){fm="07";}
        else if (m===7){fm="08";}
        else if (m===8){fm="09";}
        else if (m===9){fm="10";}
        else if (m===10){fm="11";}
        else if (m===11){fm="12";}
    let fDate= tempDate.getFullYear()+'-'+fm+'-'+tempDate.getDate();
    let fTime= tempDate.getHours()+':' +tempDate.getMinutes()+':' +tempDate.getSeconds();
    
    setStartTime( fDate+ "  " +fTime )
    

  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    

  };

  const showTimepicker = () => {
    showMode('time');
   
  };
 
  // console.log(startTime)

  return (
    <View style={styles.container}>
      
      <View style={styles.buttonCon}>
      <View style={{marginRight:20}}> 
        <TouchableOpacity style={styles.button} onPress={showDatepicker} >
        <Text style={{fontFamily:ff,fontSize:20 }}><Fontisto name="date" size={30} color={Configurations.colors.secCol} /></Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={showTimepicker}  >
        <Text><Fontisto name="clock" size={30} color={Configurations.colors.secCol} /></Text>
        </TouchableOpacity>
      </View>
      </View>
      <View  style={{width: '50%',height:40, backgroundcolor: "grey", marginTop:10, 
      alignContent:'center',justifyContent:'center',
      overflow:'hidden'}}>
      {show ? (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange} 
          style={{height:40, width:100,alignSelf:'center'}}
        />
      ):null}
       </View>
  
 <TimeCon  > {startTime}   </TimeCon> 
 
    </View>
  );
};





 const AppTimePicker2 = ({
  endTime, setEndTime,
  ff='Galvji'
  
 }
 ) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
// const [endTime,setEndTime] =useState('Pick end Time')
  

 
  const onChange = (event, selectedDate) => {  
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    
    let tempDate =new Date(currentDate);
    let m=tempDate.getMonth()
    if (m===0){fm="01";}
        else if (m===1){fm="02";}
        else if (m===2){fm="03";}
        else if (m===3){fm="04";}
        else if (m===4){fm="05";}
        else if (m===5){fm="06";}
        else if (m===6){fm="07";}
        else if (m===7){fm="08";}
        else if (m===8){fm="09";}
        else if (m===9){fm="10";}
        else if (m===10){fm="11";}
        else if (m===11){fm="12";}
    let fDate= tempDate.getFullYear()+'-'+fm+'-'+tempDate.getDate();
    let fTime= tempDate.getHours()+':' +tempDate.getMinutes()+ ':' +tempDate.getSeconds();
    
    setEndTime( fDate+ "  " +fTime )
    

  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    

  };

  const showTimepicker = () => {
    showMode('time');
   
  };
  // console.log(endTime)

  return (
    <View style={styles.container}>
      
      <View style={styles.buttonCon}>
      <View style={{marginRight:20}}> 
        <TouchableOpacity style={styles.button} onPress={showDatepicker} >
        <Text style={{fontFamily:ff}}><Fontisto name="date" size={30} color={Configurations.colors.secCol} /></Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.button} onPress={showTimepicker}  >
        <Text><Fontisto name="clock" size={30} color={Configurations.colors.secCol} /></Text>
        </TouchableOpacity>
      </View>
      </View>
      <View  style={{width: '50%',height:40, backgroundcolor: "grey", marginTop:10, 
      alignContent:'center',justifyContent:'center',
      overflow:'hidden'}}>
      {show ? (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange} 
          style={{height:40, width:100,alignSelf:'center'}}
        />
      ):null}
       </View>
  
 <TimeCon  > {endTime}   </TimeCon> 
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height:60,
    alignItems: 'center',
    justifyContent: 'center',
    margin:15
  },
  buttonCon:{
    display:'flex',
    flexDirection:'row',
    marginTop:25
  },
  button: {
    alignItems: "center",
    // backgroundColor: "#DDDDDD",
    // padding: 7.5,
    // borderRadius:10,
    width: 95
  },
});

export {AppTimePicker1,AppTimePicker2}