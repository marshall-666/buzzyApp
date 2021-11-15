
import React, { useState } from "react";
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
justify-content:space-evenly;
align-items:flex-end;
display:flex;
flex-direction:row;
padding-left:5%;
padding-right:10%;
padding-bottom:2%
`

const TextInput = Styled.Text`
font-size:${(props) => props.fontSize}px;
width:90%
text-align:${(props) => props.textAlign};
color:#ffffff;
margin-bottom:-5px

`
const IconInut = Styled.Text`
display:${(props) => props.dispaly};
width:30px
height:30px
`
const IconInut2 = Styled.Text`
display:${(props) => props.dispalyR};
width:30px
height:30px
`

const MenuCont = Styled.View`
height:${props => props.Mheight}px;
width:${props => props.Mwidth}px;
display:${props => props.menuDisplay};
flex-direction:column;
align-items:center;
justify-content:space-between
background-color:${props => props.Mbgc};
position:absolute;
zIndex:5
margin-left:70%
margin-top:12.5%
border-radius:15px
opacity:1
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
  height = 85,
  width = '100%',
  onBackPress = () => { },
  onAccountPress = () => { },
  onAboutPress = () => { },
  onSettingPress = () => { },
  onLogoutPress = () => { },
  fontSize = 36,
  displayBack = 'flex',
  textAlign = 'left',
  Mwidth = 100,
  Mheight = 0,
  displayR = 'flex'
}) => {
  const [menuOp, setMenuOp] = useState(false)


  const onMenuPressOp = () => {

    setMenuOp(true)
  }
  const onMenuPressCl = () => {
    setMenuOp(false)
  }
  return (
    <View>
      <CardCon bgc={Configurations.colors.secCol} height={height} width={width}>
        <TouchableOpacity onPress={onBackPress} >
          <IconInut dispaly={displayBack} >
            <Entypo name="arrow-with-circle-left" size={30} color="white" />
          </IconInut>
        </TouchableOpacity>
        <TextInput fontSize={fontSize} textAlign={textAlign}>{text}
        </TextInput>

        <TouchableOpacity onPress={onMenuPressOp} >
          <IconInut2 dispalyR={displayR}>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </IconInut2>


        </TouchableOpacity>
      </CardCon>
      < MenuCont Mheight={menuOp ? 400 : 0} menuDisplay={menuOp ? 'flex' : 'none'} Mwidth={Mwidth} Mbgc={Configurations.colors.secCol}>
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