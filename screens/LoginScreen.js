import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image, StyleSheet, KeyboardAvoidingView} from 'react-native';
import AppHeader from '../comps/AppHeader';
import styled from 'styled-components/native';
import TaskCardArea from '../comps/taskCardArea';
import InputField from '../comps/InputField'
import RecBtn from '../comps/RecBtn';
import { Configurations } from '../PropConfig/Props'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import  ErrorInfo  from '../comps/ErrorInfo'
import LottieView from 'lottie-react-native';

const LogoWrapper = styled.View`
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
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [load, setLoad] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);

  })

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };
  const onLoginPress = async () => {
    const auth = getAuth();
   
     if  (email == ''){
      alert("email is missed")
    } else if  (password == ''){
      alert("password is missed")
    } 
    if (email !== '' && password !== '') {
      try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        const usersDocRef = doc(db, "users",result.user.uid );
      const data = await getDoc(usersDocRef);
      setUsers(data.data())
     
        
      }
        catch(error)  {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoginError(errorMessage);

        };
      }
    
    // onAuthStateChanged(auth, (user) => {
    //   const user = auth.currentUser;
    //   if (user !== null) {
        
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     const uid = user.uid;
    //     // navigation.navigate('Taskboard')
    //     // ...
    //   } else {
    //     // User is signed out
    //     // ...
    //   }
    // });
  }
  return (
    <KeyboardAvoidingView   behavior="height" keyboardVerticalOffset={-250}
    style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: Configurations.colors.backCol }} >
      <AppHeader text="Welcome" displayBack="none" textAlign='center' displayR='none'/>
      <LogoWrapper>
        <Image source={require("../assets/honeycomb.png")} style={styles.honeycomb} />
        <Image source={require("../assets/BuzzyBeeLogo.png")} style={styles.logo} />
        <Text style={styles.Logoin}>Login</Text>
      </LogoWrapper>
  
      <TaskCardArea style={{ position: 'absolute', zIndex: 3 }} />
      
      <View style={styles.inpuTable}>
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
        <Text style={styles.title2}>Password</Text>
        <InputField
          inputStyle={{
            fontSize: 14
          }}
          containerStyle={{
            backgroundColor: Configurations.colors.primCol,
            marginBottom: '6%',
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
        <Text style={styles.title3}>Forgot Password?
        
        </Text>
        {loginError ? <Text><ErrorInfo error={loginError} visible={true} /></Text> : null}
        <View style={styles.button}>
          <RecBtn text="Login" onRecBtnPress={onLoginPress} bgC={Configurations.colors.butCol}/>
        </View>
        <Text style={styles.title3}>OR</Text>
        <Image source={require("../assets/D2L.png")} style={styles.D2L} />
      <View style={styles.container3}>
      
        <Text style={styles.title4}>Don’t have an account yet?</Text>
        <Text style={styles.title5} onPress={() => navigation.navigate('SignUp')}>Signup</Text>
      </View>
      </View>
      

    </KeyboardAvoidingView>
  );
}


export default LoginScreen

const styles = StyleSheet.create({
  inpuTable: {
    position: 'absolute',
    zIndex: 4,
    fontSize: 48,
    fontWeight: 'bold',
    color: 'yellow',
    marginLeft: -30,
    marginTop: 350
  },
  Logoin: {
    position: 'absolute',
    zIndex: 3,
    fontSize: 55,
    fontWeight: 'bold',
    color: Configurations.colors.secCol,
    marginLeft: -30,
    marginTop: '30%'
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
    marginTop: '-2.5%',
  },
  button: {
   height:'30%',
    marginTop: '1%',
  alignSelf:'center'

  },
  logo: {
    position: 'absolute',
    width: 150,
    height: 150,
    zIndex: 3,
    marginLeft: 200,
  },
  honeycomb: {
    marginLeft: -60,
    marginTop: -35,
    opacity: .4
  },
  D2L: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginTop:'2.5%'
  },
  container3: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  title4: {
    fontSize: 18,
    fontWeight: '400',
    color: Configurations.colors.secCol,
    alignSelf: 'center',
    marginTop: '7.5%',

  },
  title5: {
    fontSize: 18,
    fontWeight: '700',
    color: 'orange',
    marginLeft: 10,
    alignSelf: 'center',
    marginTop: '7.5%',

  },
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
    fontSize: 32,
    fontWeight: '400'
  },
 
});