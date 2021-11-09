import React, {useState} from 'react';
import {View, Button, Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import  {Configurations} from'../PropConfig/Props'




 const AppTimePicker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text,setText] =useState('Pick a Time')
 
  const onChange = (event, selectedDate) => {  
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    
    let tempDate =new Date(currentDate);
    let m=tempDate.getMonth()
    if (m===0){fm="Jan";}
        else if (m===1){fm="Feb";}
        else if (m===2){fm="Mar";}
        else if (m===3){fm="Apr";}
        else if (m===4){fm="May";}
        else if (m===5){fm="Jun";}
        else if (m===6){fm="Jul";}
        else if (m===7){fm="Aug";}
        else if (m===8){fm="Sep";}
        else if (m===9){fm="Oct";}
        else if (m===10){fm="Nov";}
        else if (m===11){fm="Dec";}
    let fDate= fm+' ' + '/'+' '+tempDate.getDate()+' '+'/'+' '+tempDate.getFullYear();
    let fTime= tempDate.getHours()+':' +tempDate.getMinutes();
    
    setText( fTime+ "   " +fDate)

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
 

  return (
    <View style={styles.container}>
      <Text  style={{color:"#ffffff", fontSize:20, color:Configurations.colors.secCol }}> {text}  </Text>
      <View style={styles.buttonCon}>
      <View style={{marginRight:20}}> 
        <TouchableOpacity style={styles.button} onPress={showDatepicker} >
        <Text>Set Date</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={showTimepicker}  >
        <Text>Set Time</Text>
        </TouchableOpacity>
      </View>
      </View>
     
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
          style={{width: 320, backgroundcolor: "grey"}}
          
        />
      )}
  
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
    backgroundColor: "#DDDDDD",
    padding: 7.5,
    borderRadius:10,
    width: 95
  },
});

export default AppTimePicker