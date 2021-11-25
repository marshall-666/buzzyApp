import React from 'react'
import { useState } from 'react';
import { View, Text,Pressable } from 'react-native'
import styled from 'styled-components/native'

// main container for the component within with everything resides.
const TaskCont = styled.View`
width:90%;
height:${props => props.height};
border-radius:10px;
align-items:center;
margin-top:10px;
margin-bottom:10px;
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
background-color:#e5e5e5;
height:80%;
justify-content:space-around;
display:${props=> props.display};
`     


// individual container cell/row for icon and text
const ContentCell = styled.Pressable`
width:70%;
height:15%;
margin-top:10px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
`



export const Task = ({
    title='Title',
    days= "Monday",
    time = "Sometime",
    location="sw14",
    instructor="Henry Leung",
    group= "see groups"
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
        <TaskCont height={height} >
           
           <TaskHeader onPress={ () =>
            {
               setCard(!card) 
               taskHeight()
            }}>
                <Divider/>
                <Text>
                {title}
                </Text>
            </TaskHeader>
          
       
            <Content display={display}>
                
                
                <ContentCell> 
                    <View>
                        <Text>{days}</Text>
                        <Text>{time}</Text>
                    </View>
                    
                    
                </ContentCell>
                
                <ContentCell> 
                    <Text>{location}</Text>
                </ContentCell>
                
                <ContentCell> 
                    <Text>{instructor}</Text>
                </ContentCell>
                <ContentCell> 
                    <Text>{group}</Text>
                </ContentCell>


            </Content>

        </TaskCont>
        



    )
}
