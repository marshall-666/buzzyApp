import React from 'react'
import { useState } from 'react';
import { View, Text,Pressable } from 'react-native'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Foundation } from '@expo/vector-icons'; 
import { Configurations } from '../PropConfig/Props';

// main container for the component within with everything resides.
const TaskCont = styled.View`
height:${props => props.height};
border-radius:10px;
align-items:center;
margin-top:10px;
margin-bottom:10px;
width:100%;
`

// divider
const Divider = styled.View`
width:5%;
height:100%;
background-color:#21aab5;

`


// clickable header container for the card
const TaskHeader = styled.Pressable`
flex-direction:row;
width:100%;
height:80px;
align-items:center;  
background-color:white;
border-top-left-radius:10px;
border-top-right-radius:10px;
overflow:hidden;
`

// container carrying the content inside the card when its expanded
const Content = styled.View`
width:100%;
flex-direction:row;
background-color:${Configurations.colors.secCol};
height:80%;
justify-content:space-between;
display:${props=> props.display};
`     


// individual container cell/row for icon and text
const ContentCell = styled.Pressable`
width:85%;
height:15%;
margin-top:10px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
`



export const Task = ({
    title='Title',
    days= "",
    time = "Sometime",
    location="sw14",
    instructor="Henry Leung",
    courseTime=""
})=> {
    // states to change the height of the task card.
    const [height, setHeight] = useState('5%')
    const [card, setCard] = useState(true)

    // state to display the content of the card only when its expanded.
    const [display, setDisplay] = useState('none')



    const taskHeight = ()=>
    {
        if(card)
        {
            setHeight('70%')
            setDisplay('flex')
        }
        else{
            setHeight('5%')
            setDisplay('none')
        }
    }
    
      return (
        <TaskCont height={height} 
        style={{  shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,}}
        >
           
           <TaskHeader onPress={ () =>
            {
               setCard(!card) 
               taskHeight()
            }}
            >
                <Divider/>
                <Text>
                {title}
                </Text>
            </TaskHeader>
          
       
            <Content display={display}
             style={{  shadowColor: '#171717',
             shadowOffset: {width: -2, height: 4},
             shadowOpacity: 0.2,
             shadowRadius: 3,
            }}
            >
                <Divider/>
                <View style={{alignItems:'center', width:'95%', justifyContent:'space-evenly'}}>
                    <ContentCell> 
            
                        <Foundation name="calendar" size={45} color={Configurations.colors.lightBg} />
                        <Text>{days}</Text>
                        <Text  style={{fontSize:16, fontWeight:'bold', color:Configurations.colors.lightBg}}>{time}</Text>
             
                    </ContentCell>

                    <ContentCell> 
            
                        <Ionicons name="time" size={35} color={Configurations.colors.lightBg} />
                        <Text  style={{fontSize:16, fontWeight:'bold', color:Configurations.colors.lightBg}}>{courseTime}</Text>
             
                    </ContentCell>
                
                    <ContentCell> 
                        <Ionicons name="location-sharp" size={35} color={Configurations.colors.lightBg} />
                        <Text style={{fontSize:16, fontWeight:'bold', color:Configurations.colors.lightBg}}>{location}</Text>
                    </ContentCell>
                
                    <ContentCell> 
                        <FontAwesome5 name="chalkboard-teacher" size={35} color={Configurations.colors.lightBg} />
                        <Text style={{fontSize:16, fontWeight:'bold', color:Configurations.colors.lightBg }}>{instructor}</Text>
                    </ContentCell>
                </View>

            </Content>

        </TaskCont>
        



    )
}
