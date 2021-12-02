import styled from "@emotion/styled-base";
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View ,Image} from 'react-native';
import  Styled from "styled-components/native";
import * as Animatable from 'react-native-animatable';

const BtnCon = Styled.View`
width:${(props)=>props.width}px;
height:${(props)=>props.height}px;
background-color:${(props)=>props.bgc};
justify-content:center;
align-items:flex-start;
border-radius:${(props)=>props.bradius}px;
padding:10px
box-shadow: 0 10px 10px rgba(155, 155, 155 , 1)
margin-right:${(props)=>props.margin}px
display:${(props)=>props.displayBtn}
`
const ImgCon = Styled.View`
width:${(props)=>props.width}px;
height:${(props)=>props.height}px;
background-color:${(props)=>props.bgc};
justify-content:center;
align-items:flex-start;
border-radius:${(props)=>props.bradius}px;
box-shadow: 0 3px 5px rgba(0, 0, 0 , 0.3);
margin-right:${(props)=>props.margin}px
display:${(props)=>props.displayImg}

`
const TextInput =Styled.Text`
font-size:32px;
color:${(props)=>props.textColor};
font-family :${(props)=>props.fe};
`
const TaskInput =Styled.Text`
font-size:14px;
color:${(props)=>props.textColor}
font-family :${(props)=>props.fe};

`
const NameInput =Styled.Text`
font-size:18px;
color:${(props)=>props.textColor}
textAlign:center
margin-top:-5px
`
const TaskBtn = ({
  onBtnPress=()=>{},
  taskNum = '3',
  taskBtnColor='#E5E5E5',
  bradius=15,
  height=100,
  width=100,
  taskCate="Course",
  textColor="black",
  margin=10,
  name="",
  img='https://firebasestorage.googleapis.com/v0/b/buzzybee-d0af8.appspot.com/o/BuzzyBeeLogo.png?alt=media&token=e3d22cb8-f55f-49f1-a697-2f09f6c798ee',
  displayBtn='flex',
  displayImg='none',
  fe ="Galvji"
}) => {
  return (
    <Animatable.View>
    <TouchableOpacity
    onPress={onBtnPress}
    >
      
      <ImgCon  
          bgc={taskBtnColor} 
          bradius={bradius} 
          height={height} 
          width={width} 
          margin={margin} 
          displayImg={displayImg} >
       <Image style={styles.tinyLogo} source={{uri:img}}/>
       </ImgCon>
    <BtnCon style={{
    shadowColor: '#CFEEFF',
    shadowOffset: {width: -6, height: -3},
    shadowOpacity: 1,
    shadowRadius: 7,
  }}
        bgc={taskBtnColor} 
        bradius={bradius} 
        height={height} 
        width={width} 
        margin={margin} 
        displayBtn={displayBtn} >
   
        <TextInput fe={fe} textColor={textColor}>{taskNum}</TextInput>
        <TaskInput fe ={fe} textColor={textColor}>{taskCate}</TaskInput>
    </BtnCon>
    <NameInput textColor={textColor}>{name}</NameInput>

    </TouchableOpacity>
    {/* <TaskInput>{taskCate}</TaskInput> */}
     </Animatable.View>
  );
};
const styles = StyleSheet.create({

  tinyLogo: {
    width: 95,
    height: 95,
    resizeMode: 'contain',
    borderRadius:30
  },

});


export default TaskBtn;