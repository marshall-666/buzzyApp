
import styled from "@emotion/styled-base";
import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import  Styled from "styled-components/native";
import  {Configurations} from'../PropConfig/Props'


const BtnCon = Styled.TouchableOpacity`
width:${(props)=>props.width}px;
height:${(props)=>props.height}px;
background-color:${(props)=>props.bgc};
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
  width=200
}) => {
  return (
  
    
   <View style={styles.container}>
 <BtnCon bgc={Configurations.colors.butCol} bradius={bradius} height={height} width={width}  onPress={onRecBtnPress}>
      
        <TextInput>{text}</TextInput>       
      
    </BtnCon>
   </View>
   
    
  );
};



export default RecBtn;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
 
});
