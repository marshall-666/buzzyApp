
import styled from "@emotion/styled-base";
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import  Styled from "styled-components/native";


const BtnCon = Styled.TouchableOpacity`
width:${(props)=>props.width};
height:${(props)=>props.height};
background-color:${(props)=>props.bgc};
justify-content:center;
align-items:center;
border-radius:${(props)=>props.bradius}px
`
const TextInput =Styled.Text`
font-size:24px;
margin-right:30px
margin-left:30px

`

const RecBtn = ({onRecBtnPress=()=>{},
  text = 'Create Task',
  RecBtnColor='#FCCA12',
  bradius=10,
  height="12%",
  width="100%"
}) => {
  return (
  
    
   <View style={styles.container}>
 <BtnCon bgc={RecBtnColor} bradius={bradius} height={height} width={width}  onPress={onRecBtnPress}>
      
        <TextInput>{text}</TextInput>       
      
    </BtnCon>
   </View>
   
    
  );
};



export default RecBtn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
 
});
