import React, {useState, useEffect} from 'react'
import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import AppHeader from '../comps/AppHeader'
import { Agenda } from 'react-native-calendars'
import NavBar from '../comps/NavBar'
import MembersInGroupCard from '../comps/MembersInGroupCard'
import InGroupButton from '../comps/InGroupButton'
import GroupEventCard from '../comps/CourseEventCard'
import { Task } from '../comps/Task'
import {ListAvatar} from '../comps/ListAvatar'
import { Members } from '../data/Members'
import { GroupsData } from '../data/GroupsData'
import { EventsMembTwo } from '../data/Events'
import { Available } from '../comps/Available'
import { Configurations } from '../PropConfig/Props'
import {Days} from '../data/AvailableTime'
import {DaysTwo} from '../data/AvailableTime'
import {DaysThree} from '../data/AvailableTime'
import { set } from 'react-native-reanimated'

const lightBg = Configurations.colors.lightBg
const primCol =  Configurations.colors.primCol
const MembersScheduleScreen = ({
    navigation,
    route,
    GroupsData
}) => {
    
    // route is a parameter provided by react navigation.
    // I logged route and discovered the architecture of the data being passed over from the list avatar component.
    // id was stored under an object called params.
    // I assigned the variable member to route.params.id
    // Now that that information is acessible on the screen, 
    // I can use that information to dynamically displat different schedules

    
    console.warn(route);

    // const members = route.params.info;
    // console.warn(members);
    
    
    // useEffect (()=>{
    //     var member = route.params
    //     console.warn(member)
        
        
    //     // console.warn(member)
    //     if (member == 1)
    //     (
    //         setItems(items)
    //     )
    //     if (member== 2)
    //     {
    //         setItems(EventsMembTwo)
    //     }

    // },[])



    const [memberOne, setMemberOne] = useState(false)
    const [memberTwo, setMemberTwo] = useState(false)

      const timeToString =(time)=> {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
      }
      
      const  loadItems=(day) =>{
    
        for (let i = -15; i < 85; i++) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000;
          const strTime = timeToString(time);
          if (!items[strTime]) {
            items[strTime] = [];
          }
        }
      }
    const renderItem = (item)=>
    {
      return (
          // <View style ={{backgroundColor:'white', margin:10, alignItems:'center', height: 50 }}>
          //     <Text> {item.name}</Text>
          //     <Text> {item.dueDaTE}</Text>
  
          //   </View>
  
          <Task/>
      )
    }

    // const onPress = ()=>
    // {
    //     console.warn('pressed', Members.name, Members.id)
    //     // navigation.navigate('GroupHome', {id: Members.id})
    // }
    return (
        <ScrollView style={styles.container}>
          <View style={{
            backgroundColor:lightBg, height:'25%'}} >
            <FlatList
                horizontal
                data={Members}
                renderItem={({item})=> 
                    <ListAvatar 
                        memberName={item.name}
                        memberUri={item.imageUri}
                       onPress={()=>
                        {
                          if(item.id== 1 )
                          { 
                            setMemberOne(true) 
                            console.warn("Heyy",item.id, memberOne)
                      
                          }
                          if (item.id == 2)
                          {
                            setMemberOne(false)
                            setMemberTwo(true)
                          }
                    
                        }}
                        
                        // onPress={console.warn('hey you pressed on')}
                        // onPress={onPress}
                
                />
                
                }
                />

          </View>

        
            <FlatList
              horizontal
              contentContainerStyle={{alignItems:'center', justifyContent:'flex-start'}}
              alwaysBounceHorizontal={true}
              data={memberOne? DaysTwo : memberTwo? DaysThree : Days }
              renderItem={({item})=> <Available  
                                        monthName={item.month}
                                        day={item.day}
                                        date={item.date}
                                    />}
            />
           
        
        </ScrollView>
    )
}

export default MembersScheduleScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:primCol
    },
    midDiv: {
        width: '100%',
        height: 100,
        padding: 30,
    },
    lowerDiv: {
        width: '100%',
        paddingTop: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#94BDD4',
    },
    membersView: {
        width: '100%',
        marginBottom: 40,
    }
})
