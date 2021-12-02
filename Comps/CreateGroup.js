import React from 'react'
import { View, Text, TextInput,Pressable } from 'react-native'
import styled from 'styled-components/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { Configurations } from '../PropConfig/Props'

const primCol = Configurations.colors.primCol
const butCol = Configurations.colors.butCol
const CardCont = styled.View`
border:3px solid #94BDD4;
width:90%;
height:90%;
justify-content:space-around;
border-radius:5px;
align-items:center;
padding:20px;
`

const OptCont = styled.View`

width:85%;
height:70%;
justify-content:space-around;
`

const ButPress = styled.Pressable`
height:55px;
width:150px;
background-color:${butCol};
justify-content:center;
align-items:center;
padding:5px;
border-radius:5px;
`


const HeadCont = styled.View`

width:85%;
`
const HeadTxt = styled.Text`
text-align:left;
color:white;
font-weight:500;
font-size:32px;
`


const SubTxt = styled.Text`
font-size:18px;
margin-left:-5px;
color:white;
`
const InputBox = styled.TextInput`
width:80%;
height:45px;
border-bottom-width:3px;
border-bottom-color:#94BDD4;
color:black;
`
const InputContainer = styled.View`
align-items:flex-start;

`


export const  CreateGroup = ({
    handlePress=()=>{},
    nameVal="",
    discpVal="",
    memVal="",
    onGrpVal = ()=>{},
    onDiscpVal=()=>{},
    onMemVal = ()=>{},
    bgCol= Configurations.colors.butCol,
     txt = "Create Group",
     txtCol = 'black',
     ff ='Galvji',
     fe ='Galvji'

})=> {


    return (
        <CardCont>
            
            <HeadCont>
                <HeadTxt style={{fontFamily:ff,color:Configurations.colors.secCol}} >
                    Create A Group
                </HeadTxt>
            </HeadCont>
                
            
            <OptCont>
            
                <InputContainer>
                    <SubTxt style={{fontFamily:ff,color:Configurations.colors.secCol}}> Group Name </SubTxt>
                    <InputBox 
                        style={{fontFamily:fe, fontSize:16}}
                        placeholder="Name" 
                        placeholderTextColor="grey" 
                        value={nameVal} 
                        onChangeText={onGrpVal}/>
                </InputContainer>
            
                <InputContainer>
                    <SubTxt style={{fontFamily:ff,color:Configurations.colors.secCol}}> Description </SubTxt>
                    <InputBox 
                        style={{fontFamily:fe, fontSize:16}}
                        placeholder="What is This Group For" 
                        placeholderTextColor="grey" 
                        value={discpVal} 
                        onChangeText={onDiscpVal} 
                    
                    />
                </InputContainer>
            
                <InputContainer>
                    <SubTxt style={{fontFamily:ff, color:Configurations.colors.secCol}}>Invite Members </SubTxt>
                    <SubTxt style={{fontFamily:fe, fontSize:13,color:Configurations.colors.secCol}}>
                        (Separate the emails using a , with no space between them)   
                    </SubTxt>
                    <InputBox 
                        style={{fontFamily:fe, fontSize:16}}
                        placeholder="Enter Group Member's Emails" 
                        placeholderTextColor="grey"
                        value={memVal}
                        onChangeText={onMemVal} 
                    />
                </InputContainer>
            
            </OptCont>
            <View>


                <ButPress style={{backgroundColor:bgCol}} onPress={handlePress}>
                    <Text style={{color:txtCol, fontFamily:ff, fontSize:18}}>{txt}</Text>
                </ButPress>
            </View>

        </CardCont>
    )
}
