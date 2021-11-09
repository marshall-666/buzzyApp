import React from 'react'
import { useState } from 'react';
import { View, Text,Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee, faCalendarAlt, faLocationArrow, faChalkboardTeacher, faUsers } from '@fortawesome/free-solid-svg-icons'
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
width:100%;
height:10px;
background-color:green;
`


// clickable header container for the card
const TaskHeader = styled.Pressable`
width:100%;
height:80px;
align-items:center;  
background-color:yellow;
border-top-left-radius:10px;
border-top-right-radius:10px;
`

// container carrying the content inside the card when its expanded
const Content = styled.View`
width:90%;
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



export const Task = ({})=> {
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
                <FontAwesomeIcon icon={ faCoffee } />
                <Text>
                something goes here
                </Text>
            </TaskHeader>
            <Divider></Divider>
          
       
            <Content display={display}>
                <ContentCell> 
                    <FontAwesomeIcon icon={ faCalendarAlt } size= {45} />
                    <Text>Whatevr text you add</Text>
                </ContentCell>
                
                <ContentCell> 
                    <FontAwesomeIcon icon={ faLocationArrow } size= {45} />
                    <Text>Whatevr text you add</Text>
                </ContentCell>
                
                <ContentCell> 
                    <FontAwesomeIcon icon={ faChalkboardTeacher} size= {45} />
                    <Text>Whatevr text you add</Text>
                </ContentCell>
                
                <ContentCell> 
                    <FontAwesomeIcon icon={ faUsers} size= {45} />
                    <Text>Whatevr text you add</Text>
                </ContentCell>


            </Content>

        </TaskCont>
        



    )
}
