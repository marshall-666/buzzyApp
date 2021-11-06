import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import AppHeader from '../comps/AppHeader';
import styled from 'styled-components/native';
import TaskCardArea from '../comps/taskCardArea';
import InputField from '../comps/InputField'
import RecBtn from '../comps/RecBtn';
import { Configurations } from '../PropConfig/Props'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import fapp from '../firebase/firebase';
import { ErrorInfo } from '../comps/ErrorInfo'


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
const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [users, setUsers] = useState('');
  const [program, setProgram] = useState('');
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

    try {
      if (email !== '' && password !== '') {
        await createUserWithEmailAndPassword(auth, email, password);
        navigation.navigate('Login')
      }
    } catch (error) {
      // setSignupError(error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("An error occured: ", errorCode, errorMessage);
    }

    // firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(email, password)
    //     .then(userCredentials => {
    //       const user = userCredentials.user;
    //       console.log('Registered with:', user.email);
    //     })
    //     .catch(error => alert(error.message))
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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: Configurations.colors.backCol }}>
      <AppHeader text="Welcome" display="none" />
      <LogoWrapper>
        <Image source={require("../assets/honeycomb.png")} style={styles.honeycomb} />
        <Image source={require("../assets/BuzzyBeeLogo.png")} style={styles.logo} />
        <Text style={styles.Logoin}>SignUp</Text>
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
          value={users}
          onChangeText={text => setUsers(text)}
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
          <RecBtn text="Continue" height="75" width="200" onRecBtnPress={continuePress} />
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
        <Text style={styles.button}>
          <RecBtn text="Back" height="75" width="120" onRecBtnPress={backPress} />
          <RecBtn text="Submit" height="75" width="150" onRecBtnPress={submitPress} />
        </Text>
      </View>) : null}
      <View style={styles.container3}>
        <Text style={styles.title4}>I have an account.</Text>
        <Text style={styles.title5} onPress={() => navigation.navigate('Login')}>Login</Text>
      </View>
    </View>
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
    marginTop: 350
  },
  Logoin: {
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
    flex: 1,
    textAlign: 'center',
    marginTop: 20,
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