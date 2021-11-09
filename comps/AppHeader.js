
import React,{useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View, Button } from 'react-native';
import Styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons';
import { Configurations } from '../PropConfig/Props'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

const CardCon = Styled.View`
width:${(props) => props.width};
height:${(props) => props.height}px;
background-color:${(props) => props.bgc};
justify-content:space-between;
align-items:flex-end;
display:flex;
flex-direction:row;
padding-left:5%;
padding-right:10%;
padding-bottom:2%
`

const TextInput = Styled.Text`
font-size:${(props) => props.fontSize}px;
width:95%
text-align:${(props) => props.textAlign};
color:#ffffff;
margin-bottom:-5px
`
const IconInut = Styled.Text`
display:${(props) => props.dispaly};
`
const MenuCont = Styled.View`
height:${props => props.Mheight}px;
width:${props => props.Mwidth}px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between
background-color:${props => props.Mbgc};
position:absolute;
zIndex:5
margin-left:76%
margin-top:55px
border-radius:15px
opacity:0.95
`
const FunCont = Styled.View`
height:90%
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between
padding:30%
`

const AppHeader = ({
  text = 'Settings',
  height = 90,
  width = '100%',
  onBackPress = () => { },
  onAccountPress = () => { },
  onAboutPress = () => { },
  onSettingPress = () => { },
  onLogoutPress = () => { },
  fontSize = 36,
  display = 'flex',
  textAlign = 'left',
  Mwidth=100,
  Mheight=0
}) => {
  const [menuOp, setMenuOp] = useState(false)

  
const onMenuPressOp =()=>{

  setMenuOp(true)
  }
  const onMenuPressCl=()=>{
    setMenuOp(false)
  }
  return (
      <View>
      <CardCon bgc={Configurations.colors.secCol} height={height} width={width}>
        <TouchableOpacity onPress={onBackPress}>
          <IconInut dispaly={display}>
            <Entypo name="arrow-with-circle-left" size={24} color="white" />
          </IconInut>
        </TouchableOpacity>
        <TextInput fontSize={fontSize} textAlign={textAlign}>{text}</TextInput>
        <TouchableOpacity onPress={onMenuPressOp}>
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </TouchableOpacity>
      </CardCon>
    < MenuCont Mheight={menuOp ? 400 :0}    Mwidth={Mwidth} Mbgc={Configurations.colors.secCol}>
    <TouchableOpacity onPress={onMenuPressCl}>
    <Entypo name="dots-three-horizontal" size={24} color="white" />
    </TouchableOpacity>
    <FunCont>
    <TouchableOpacity onPress={onAccountPress}>
    <MaterialCommunityIcons name="account" size={30} color="white" />
    </TouchableOpacity>
    <TouchableOpacity onPress={onSettingPress}>
    <AntDesign name="setting" size={30} color="white" />
    </TouchableOpacity>

    <TouchableOpacity onPress={onAboutPress}>
    <FontAwesome name="users" size={24} color="white" />
    </TouchableOpacity>
    <TouchableOpacity onPress={onLogoutPress}>
    <MaterialCommunityIcons name="logout" size={30} color="white" />
    </TouchableOpacity>
    
    </FunCont>
    </MenuCont>
      </View>

  );
};



export default AppHeader;