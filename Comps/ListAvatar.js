import React from 'react'
import { Text, Image, View, Pressable, ActivityIndicator } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/core';



 export const ListAvatar = ({
    memberName= "Member One",
    memberUri = "http://placekitten.com/150/150",
    onPress=()=>{}
    })=>
 {

    const navigation = useNavigation();
    
     

    //  console.warn(GroupsData.groups.name)
    return(
            <Pressable 
                onPress={onPress}
                style={{margin:10,}}>
                
                <Image
                    style={{height:100, width:100, borderRadius: 100}} 
                    source={{uri:memberUri}}/>
                    <View style=
                    {{
                        alignItems:'center', 
                        marginTop:5
                    
                    }}>
                        <Text> {memberName} </Text>
                    </View>
                    
                



            </Pressable>

    )
 }



// export const ListAvatar = ({groupsData})=>
//  {

//     const navigation = useNavigation();
//     const onPress = ()=>
//     {
//         console.warn('pressed', Members.name, Members.id)
//         navigation.navigate('MembersSchedule', {id: Members.id})
//     }
     

//     //  console.warn(GroupsData.groups.name)
//     return(
//             <Pressable 
//                 onPress={onPress}
//                 style={{margin:10,}}>
                
//                 <Text> {groupsData.members.name} </Text>
                    
                



//             </Pressable>

//     )
//  }