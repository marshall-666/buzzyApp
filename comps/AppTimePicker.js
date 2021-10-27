import React, {useState} from 'react';
import {View, Button, Platform, StyleSheet, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';




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
    if (m===0){fm="January";}
        else if (m===1){fm="February";}
        else if (m===2){fm="March";}
        else if (m===3){fm="April";}
        else if (m===4){fm="May";}
        else if (m===5){fm="Jun";}
        else if (m===6){fm="July";}
        else if (m===7){fm="August";}
        else if (m===8){fm="September";}
        else if (m===9){fm="October";}
        else if (m===10){fm="November";}
        else if (m===11){fm="December";}
    let fDate= fm+ '/'+tempDate.getDate()+'/'+tempDate.getFullYear();
    let fTime= tempDate.getHours()+':' +tempDate.getMinutes();
    
    setText( fTime+ " " +fDate)

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
      <Text  style={{color:"#ffffff"}}> {text}  </Text>
      <View style={styles.buttonCon}>
      <View style={{marginRight:20}}> 
        <Button onPress={showDatepicker} title="Set date " />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Set time " />
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
          style={{width: 320, backgroundColor: "white"}}
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
  },
  buttonCon:{
    display:'flex',
    flexDirection:'row',
    marginTop:20
  }
});

export default AppTimePicker