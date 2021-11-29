
import styled from "@emotion/styled-base";
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import  Styled from "styled-components/native";
import  {Configurations} from'../PropConfig/Props'


const BtnCon = Styled.TouchableOpacity`
width:${(props)=>props.width}px;
height:${(props)=>props.height}px;

justify-content:center;
align-items:center;
border-radius:${(props)=>props.bradius}px;
margin:10px
`
const TextInput =Styled.Text`
font-size:24px;
margin-right:20px
margin-left:20px

`

const RecBtn = ({
  onRecBtnPress=()=>{},
  text = 'Create Group',
  bradius=10,
  height=85,
  width=200,
  bgC,
  txtC='black'
}) => {
  return (
  
    
   <View style={styles.container}>
 <BtnCon style ={{backgroundColor:bgC}} bradius={bradius} height={height} width={width}  onPress={onRecBtnPress}>
      
        <TextInput style={{color:txtC}} >{text}</TextInput>       
      
    </BtnCon>
   </View>
   
    
  );
};



export default RecBtn;
const styles = StyleSheet.create({
  container: {
  },
 
});
