import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import AppHeader from '../comps/AppHeader';
import styled from 'styled-components/native';
import TaskCardArea from '../comps/taskCardArea';
import InputField from '../comps/InputField'
import RecBtn from '../comps/RecBtn';
import { Configurations } from '../PropConfig/Props'
import { db } from '../firebase/fireStore';
import { collection, getDocs, addDoc, doc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import ErrorInfo from '../comps/ErrorInfo'
import talktoserver from '../api/talktoserver';


const LogoWrapper = styled.View`
margin-left:10px;
margin-top:8%;
margin-bottom:8%;
display:flex;
flex-wrap:nowrap;
flex-direction:row;
justify-content:space-between;
width:75%;
height:17%
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

const SignUpScreen = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [newName, setnewName] = useState('');
  const [program, setProgram] = useState('');
  const [set, setSet] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [password, setPassword] = useState('');
  const [page1, setPage1] = useState(true)
  const [page2, setPage2] = useState(false)
  const [signupError, setSignupError] = useState('');
  const [dbResult, setDbResult] = useState()
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
    if( newName == ''){
      alert("user name is required")
    }else if  (email == ''){
      alert("email is missed")
    } else if  (password == ''){
      alert("password is missed")
    } 
    
    if (email !== '' && password !== ''&&  newName !== '') {
      
      try {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await setDoc(doc(db, "users", result.user.uid), {
          uid: result.user.uid,
          id: result.user.uid,
          name: newName,
          email: email,
          school: school,
          program: program,
          set: set,
          isOnline: true,
        });
      
        var registerUser = {
          op: 'register_user',
          fb_uid:result.user.uid,
          uname: newName,
          psword: 'psword',
          email: email,
          org: 'school',
          pro: 'program',
          img_url: 'https://firebasestorage.googleapis.com/v0/b/buzzybee-d0af8.appspot.com/o/BuzzyBeeLogo.png?alt=media&token=e3d22cb8-f55f-49f1-a697-2f09f6c798ee',
        }
        console.log(registerUser)
        talktoserver(registerUser).then((rd) => {
          setDbResult(rd)
        })
        console.log(dbResult)
        console.log(registerUser)








      }
      catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setSignupError(errorCode, errorMessage);
      };
    };
   
  }

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };


  return (
    <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={-250}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: Configurations.colors.backCol }}>
      <AppHeader text="Welcome" displayBack="none" textAlign='center' displayR='none' />
      <LogoWrapper>
        <Image source={require("../assets/honeycomb.png")} style={styles.honeycomb} />
        <Image source={require("../assets/BuzzyBeeLogo.png")} style={styles.logo} />
        <Text style={styles.SignUp}>SignUp</Text>
      </LogoWrapper>
      <TaskCardArea style={{ position: 'Iabsolute', zIndex: 3 }} />
      {page1 ? (<View style={styles.inpuTable}>
        <Text style={styles.title2}>Email</Text>
        <InputField
          inputStyle={{
            fontSize: 14
          }}
          containerStyle={{
            backgroundColor: Configurations.colors.primCol,
            marginBottom: '6%',
            borderBottomWidth: 1,
          }}
          leftIcon='email'
          placeholder='username@my.bcit.ca'
          autoCapitalize='none'
          keyboardType='email-address'
          textContentType='emailAddress'
          autoFocus={true}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.title2}>User Name</Text>
        <InputField
          inputStyle={{
            fontSize: 14
          }}
          containerStyle={{
            backgroundColor: Configurations.colors.primCol,
            marginBottom: '8%',
            borderBottomWidth: 1,
          }}
          leftIcon='human-greeting'
          placeholder='Bill Lin'
          autoCapitalize='none'
          autoCorrect={false}
          value={newName}
          onChangeText={text => setnewName(text)}
          handlePasswordVisibility={handlePasswordVisibility}
        />
        <Text style={styles.title2}>Password</Text>
        <InputField
          inputStyle={{
            fontSize: 14
          }}
          containerStyle={{
            backgroundColor: Configurations.colors.primCol,
            marginBottom: '8%',
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
        <Text style={styles.button}>
          <RecBtn text="Continue" height="75" width="200" onRecBtnPress={continuePress} bgC={Configurations.colors.butCol}/>
        </Text>
      </View>) : null}
      {page2 ? (<View style={styles.inpuTable}>
        <Text style={styles.title2}>School</Text>
        <InputField
          inputStyle={{
            fontSize: 14
          }}
          containerStyle={{
            backgroundColor: Configurations.colors.primCol,
            marginBottom: '6%',
            borderBottomWidth: 1,

          }}
          leftIcon='school'
          placeholder='BCIT'
          defaultValue='BCIT'
          autoCapitalize='none'
          autoFocus={true}
          value={school}
          onChangeText={text => setSchool(text)}
        />
        <Text style={styles.title2}>Program</Text>
        <InputField
          inputStyle={{
            fontSize: 14
          }}
          containerStyle={{
            backgroundColor: Configurations.colors.primCol,
            marginBottom: '8%',
            borderBottomWidth: 1,
          }}
          leftIcon='book-open'
          placeholder='MDDD'
          defaultValue='MDDD'
          autoCapitalize='none'
          value={program}
          onChangeText={text => setProgram(text)}
          handlePasswordVisibility={handlePasswordVisibility}
        />
        <Text style={styles.title2}>Set</Text>
        <InputField
          inputStyle={{
            fontSize: 14
          }}
          containerStyle={{
            backgroundColor: Configurations.colors.primCol,
            marginBottom: '8%',
            borderBottomWidth: 1,
          }}
          leftIcon='account-group-outline'
          placeholder='A, B, or C'
          autoCapitalize='none'
          value={set}
          onChangeText={text => setSet(text)}
          handlePasswordVisibility={handlePasswordVisibility}
        />
        {signupError ? <Text> <ErrorInfo error={signupError} visible={true} /></Text> : null}

        <Text style={styles.button}>
          <RecBtn text="Back" height="75" width="120" onRecBtnPress={backPress} bgC={Configurations.colors.butCol}/>
          <RecBtn text="Submit" height="75" width="150" onRecBtnPress={submitPress} bgC={Configurations.colors.butCol} />
        </Text>
      </View>) : null}
      <View style={styles.container3}>
        <Text style={styles.title4}>I have an account.</Text>
        <Text style={styles.title5} onPress={() => navigation.navigate('Login')}>Login</Text>
      </View>
    </KeyboardAvoidingView>
  );
}


export default SignUpScreen

const styles = StyleSheet.create({
  inpuTable: {
    position: 'absolute',
    zIndex: 4,
    fontSize: 55,
    fontWeight: 'bold',
    color: 'yellow',
    marginLeft: -30,
    marginTop: '75%'
  },
  SignUp: {
    position: 'absolute',
    zIndex: 3,
    fontSize: 48,
    fontWeight: 'bold',
    color: Configurations.colors.secCol,
    marginLeft: -30,
    marginTop: 90
  },
  title2: {
    fontSize: 18,
    fontWeight: '600',
    color: Configurations.colors.secCol,
    alignSelf: 'flex-start',
    paddingBottom: 5,
  },
  title3: {
    fontSize: 18,
    fontWeight: '600',
    color: Configurations.colors.secCol,
    alignSelf: 'center',
    paddingBottom: 5,
  },
  button: {
    height: '30%',
    marginTop: '1%',
    alignSelf: 'center'
  },
  logo: {
    position: 'absolute',
    width: 150,
    height: 150,
    zIndex: 3,
    marginLeft: 200,
    // marginTop:0,
  },
  honeycomb: {
    marginLeft: -60,
    marginTop: -35,
    opacity: .4
  },
  D2L: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 740,
    position: 'absolute',
    zIndex: 4,
  },
  container3: {
    position: 'absolute',
    zIndex: 4,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 810,
  },
  title4: {
    fontSize: 18,
    fontWeight: '400',
    color: Configurations.colors.secCol,
    alignSelf: 'center',
    paddingBottom: '-17.5%',

  },
  title5: {
    fontSize: 18,
    fontWeight: '700',
    color: 'orange',
    marginLeft: 10,
    alignSelf: 'center',
    paddingBottom: '-17.5%',

  },

});