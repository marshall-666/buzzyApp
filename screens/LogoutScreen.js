import React, { useState, useEffect,useContext } from 'react';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import AppHeader from '../comps/AppHeader';
import styled from 'styled-components/native';
import TaskCardArea from '../comps/taskCardArea';
import InputField from '../comps/InputField'
import RecBtn from '../comps/RecBtn';
import { Configurations } from '../PropConfig/Props'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ErrorInfo } from '../comps/ErrorInfo'
import LottieView from 'lottie-react-native';
import fireAuth from '../firebase/fireAuth';
import { Avatar, Layout } from '@ui-kitten/components';
import { doc, setDoc,updateDoc,getDoc } from "firebase/firestore";
import { db } from '../firebase/fireStore';


const LogoWrapper = styled.View`
margin-left:10px;
margin-top:8%;
margin-bottom:8%;
display:flex;
flex-wrap:nowrap;
flex-direction:row;
justify-content:space-between;
width:75%;
height:150px
`
const TaskButtonWrapper = styled.View`
margin:3%
`
const CourseEventCardWrapper = styled.View`
height:100%;

`
const NavBarCon = styled.View`
position:absolute;
z-index:2;
top:92.5%;
height:100%
width:100%
left:5%
`

const TaskCardsWrapper = styled.ScrollView`
position:absolute;
z-index:2;
top:300px
height:52.5%;
width:100%;
`
const LogoutScreen = ({ navigation }) => {

  const [image, setImage] = useState('');
  
  const { user,users } = useContext(AuthenticatedUserContext);
  useEffect(() => {
    const getUser = async () => {const auth = getAuth();
      const user = auth.currentUser;
      const usersDocRef = doc(db, "users", user.uid );
      const data = await getDoc(usersDocRef);
    setImage( data.data().img)
    }
    getUser()
  }, [user])
  const handleSignOut = async () => {
    try {
      await fireAuth.signOut();
      
    } catch (error) {
      console.log(error);
    }
  };
// const image =users.img
  return (
    <View style={styles.container}>
       <Image source={{uri:image}} style={styles.tinyLogo} />
      <TouchableOpacity onPress={handleSignOut}>
      <Text style={styles.title1}>Hello {users.name}</Text>
        <Text style={styles.title2} >Logout </Text>
      </TouchableOpacity>

    </View>
  )
}



export default LogoutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  title1: {
    width: '100%',
    color: Configurations.colors.secCol,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '400',
    margin:20
  },
  title2: {
    width: '100%',
    backgroundColor: Configurations.colors.primCol,
    color:'white',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '400',
    paddingRight:30,
    paddingLeft:30,
    padding:10,
    borderRadius:10,
    alignSelf:'center'
  },
  tinyLogo: {
    width: 200,
    height: 200,
    borderRadius:100,
    marginBottom:30
  },
});