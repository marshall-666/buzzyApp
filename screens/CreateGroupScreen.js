import React, {useState, useEffect, useRef, useContext} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';

import AppHeader from '../comps/AppHeader'
import { CreateGroup } from '../comps/CreateGroup'
import NavBar from '../comps/NavBar'
import { Configurations } from '../PropConfig/Props'
import talktoserver from "../api/talktoserver"

const lightBg = Configurations.colors.lightBg

const CreateGroupScreen = ({
    navigation
}) => {
    
    const { user, users } = useContext(AuthenticatedUserContext);
    const [dbResult, setDbResult] = useState()
    const [grpName, setGrpName] = useState("")
    const [grpDiscp, setGrpDiscp] = useState("")
    const [grpMem, setGrpMem] = useState("")
    const [butCol, setButCol]= useState(Configurations.colors.butCol)
    const [txtCol, setTxtCol]= useState('black')
    const [txt, setTxt]= useState('Create Group')
    
    const handlePress = () => {
        
        setButCol(Configurations.colors.secCol)
        setTxt("Confirm?")
        setTxtCol("white")
        
        if (txtCol == 'white')
        {
            navigation.navigate('Dashboard') 

        }

        console.log(grpName)
        console.log(grpDiscp)
        newGroup()
        // createGroup()
    }
         
          const newGroup = async()=>
          {
            var createGroup = 
                {
                    op: 'create_group',
                    gname:grpName,
                    descrip: grpDiscp,
                    member_id: user.uid,
                    is_admin: user.uid,
                    invi_mems: grpMem,

                }

            talktoserver(createGroup).then((rd) => {
                setDbResult(rd)
            })
            
            console.log(dbResult)
        }
            
        
        console.log(grpMem)
        // createGroup  
    
    return (
        // <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'position' : 'height'} style={styles.container}>
        <View style={styles.container}>
            <View style={styles.midDiv}>
                <CreateGroup 
                    bgCol={butCol}
                    txtCol={txtCol}
                    txt={txt}
                    handlePress={handlePress}
                    nameVal={grpName}
                    discpVal={grpDiscp}
                    memVal={grpMem}
                    onGrpVal={(e)=>{setGrpName(e)}}
                    onDiscpVal={(d)=>{ setGrpDiscp(d)}}
                    onMemVal={(m)=>{
                                        setGrpMem(m)
                                        // console.log(grpMem)
                                    }}
                    
                
                />
            </View>
            
            
            <NavBar/>
        </View>
        // </KeyboardAvoidingView>
    )
}

export default CreateGroupScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:lightBg
    },
    midDiv: {
        width: '95%',
        paddingTop: 30,
        alignItems: 'center',
        marginBottom: 50,
    }
})
