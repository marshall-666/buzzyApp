import React, { useState, useEffect,useContext } from 'react';
import { Button, View, Text, Image, StyleSheet,KeyboardAvoidingView } from 'react-native';
import AppHeader from '../comps/AppHeader';
import styled from 'styled-components/native';
import TaskCardArea from '../comps/taskCardArea';
import InputField from '../comps/InputField'
import RecBtn from '../comps/RecBtn';
import { Configurations } from '../PropConfig/Props'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import ErrorInfo from '../comps/ErrorInfo'
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import { Ionicons } from '@expo/vector-icons'; 


const LogoWrapper = styled.View`
margin-bottom:15%;
display:flex;
flex-wrap:wrap;
flex-direction:row;
justify-content:center;
width:75%;
height:20%
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
const AccountScreen = ({ navigation }) => {
  // const [email, setEmail] = useState('');
  // const [school, setSchool] = useState('');
  // const [users, setUsers] = useState('');
  // const [program, setProgram] = useState('');
  const [set, setSet] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [password, setPassword] = useState('');
  const [page1, setPage1] = useState(true)
  const [page2, setPage2] = useState(false)
  const [signupError, setSignupError] = useState('');



  const continuePress = () => {
    setPage1(false)
    setPage2(true)
  }
  const backPress = () => {
    setPage1(true)
    setPage2(false)
  }
  const submitPress = async () => {
    const auth = getAuth();
    if (email !== '' && password !== '') {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setSignupError(errorCode, errorMessage);

        });
    }
  };

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };
  const { user, users} = useContext(AuthenticatedUserContext);
  return (
    <KeyboardAvoidingView   behavior="height" keyboardVerticalOffset={-250}
    style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: Configurations.colors.backCol }}>
      <LogoWrapper>
        
        <Text style={styles.User}> {users.name}</Text> 
        
        <Image source={require("../assets/avatar.jpg")} style={styles.tinyLogo}/>
        
      </LogoWrapper>
      
      <TaskCardArea style={{ position: 'Iabsolute', zIndex: 3 }} />
        <View style={styles.inpuTable}>
        <Text style={styles.title2}>User Name</Text>
        <InputField
          inputStyle={{
            fontSize: 14
          }}
          containerStyle={{
            backgroundColor: Configurations.colors.primCol,
            marginBottom: '2.5%',
            borderBottomWidth: 1,
          }}
          leftIcon='human-greeting'
          placeholder='Bill Lin'
          autoCapitalize='none'
          autoCorrect={false}
          value={users.name}
          // onChangeText={text => setUsers(text)}
          handlePasswordVisibility={handlePasswordVisibility}
        />
        <Text style={styles.title2}>Email</Text>
        <InputField
          inputStyle={{
            fontSize: 14
          }}
          containerStyle={{
            backgroundColor: Configurations.colors.primCol,
            marginBottom: '2.5%',
            borderBottomWidth: 1,
          }}
          leftIcon='email'
          placeholder='username@my.bcit.ca'
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
          autoFocus={true}
          value={user.email}
          // onChangeText={text => setEmail(text)}
        />
        
        <Text style={styles.title2}>Password</Text>
        <InputField
          inputStyle={{
            fontSize: 14
          }}
          containerStyle={{
            backgroundColor: Configurations.colors.primCol,
            marginBottom: '2.5%',
            borderBottomWidth: 1,
          }}
          leftIcon='lock'
          placeholder='*************'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={passwordVisibility}
          textContentType='password'
          rightIcon={rightIcon}
          value={password}
          onChangeText={text => setPassword(text)}
          handlePasswordVisibility={handlePasswordVisibility}
        />
        <Text style={styles.title2}>School</Text>
        <InputField
          inputStyle={{
            fontSize: 14
          }}
          containerStyle={{
            backgroundColor: Configurations.colors.primCol,
            marginBottom: '2.5%',
            borderBottomWidth: 1,
          }}
          leftIcon='school'
          placeholder='MM/DD/YYYY'
          autoCapitalize='none'
          autoCorrect={false}
          value={users.school}
          onChangeText={text => setUsers(text)}
          handlePasswordVisibility={handlePasswordVisibility}
        />
        <Text style={styles.title2}>Program</Text>
        <InputField
          inputStyle={{
            fontSize: 14
          }}
          containerStyle={{
            backgroundColor: Configurations.colors.primCol,
            marginBottom: '2.5%',
            borderBottomWidth: 1,
          }}
          leftIcon='book'
          placeholder='Male/Female'
          autoCapitalize='none'
          autoCorrect={false}
          value={users.program}
          // onChangeText={text => setUsers(text)}
          handlePasswordVisibility={handlePasswordVisibility}
        />
        <Text style={styles.button}>
          <RecBtn text="Save Updates" height="75" width="200" onRecBtnPress={continuePress} />
        </Text>
        
      </View>
     
     
    </KeyboardAvoidingView>
  );
}


export default AccountScreen

const styles = StyleSheet.create({
  inpuTable: {
    position: 'absolute',
    zIndex: 4,
    fontSize: 55,
    fontWeight: 'bold',
    color: 'yellow',
    marginLeft: -30,
    marginTop: 240
  },
  User: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Configurations.colors.secCol,
    marginTop: 20,
    width:200,
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center'
  },
  title2: {
    fontSize: 18,
    fontWeight: '600',
    color: Configurations.colors.secCol,
    alignSelf: 'flex-start',
    
  },
  title3: {
    fontSize: 18,
    fontWeight: '600',
    color: Configurations.colors.secCol,
    alignSelf: 'center',
    paddingBottom: 0,
  },
  button: {
    height:'30%',
     marginTop: '1%',
   alignSelf:'center'
   },
   tinyLogo: {
    width: 150,
    height: 150,
    borderRadius:75,
    marginBottom:30,
    marginTop:10
  },
  

});