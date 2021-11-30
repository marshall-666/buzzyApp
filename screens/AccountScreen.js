import React, { useState, useEffect, useContext } from 'react';
import { Button, View, Text, Image, StyleSheet, KeyboardAvoidingView, Platform, Animated } from 'react-native';
import styled from 'styled-components/native';
import TaskCardArea from '../comps/taskCardArea';
import InputField from '../comps/InputField'
import RecBtn from '../comps/RecBtn';
import { Configurations } from '../PropConfig/Props'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import ErrorInfo from '../comps/ErrorInfo'
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, getDownloadURL, uploadBytes,uploadBytesResumable } from "firebase/storage";
// import fstorage from '../firebase/fireStorage';
import { db } from '../firebase/fireStore';
import { doc, setDoc,updateDoc,getDoc } from "firebase/firestore";


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
  const [image, setImage] = useState('');
  // const [url, setUrl] = useState("");


  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);
 
  useEffect(() => {
    const getUser = async () => {const auth = getAuth();
      const user = auth.currentUser;
      const usersDocRef = doc(db, "users", user.uid );
      const data = await getDoc(usersDocRef);
    setImage( data.data().img)
    }
    getUser()
  }, [])

  const updateImg = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: .0001,
    });
    // console.log(JSON.stringify(result));

    if (!result.cancelled) {
      setImage(result.uri);
      Upload(result.uri)
      console.log(result)
    }
  };

  const Upload = async (file_uri) => {
    // console.log(e.target.file[0]);
    // if (e.target.files.length<=0){
    //   alart("no file was selected")
    //   return false
    // }
    const file = await fetch(file_uri)
    const blob = await  file.blob()
    const storage = getStorage();
    const storageRef = ref(storage,"profile/" + users.name)
 
    uploadBytes(storageRef, blob).then((snapshot) => {
      console.log("uploaded!");
      // console.log(file_uri)
    });
    getDownloadURL(ref(storage, "profile/" + users.name))
      .then((url) => {
        // `url` is the download URL for 'images.jpg'
        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open('GET', url);
        xhr.send();
        console.log(url)
        updateDoc(doc(db, "users", user.uid), {
          img: url
        });
      })
      .catch((error) => {
        // Handle any errors
      });
      useEffect(()=>{ setImage(users.img); },[url])
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
  const { user, users } = useContext(AuthenticatedUserContext);
  
  // const image =user.img
  
  return (
    <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={-250}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: Configurations.colors.backCol }}>
      <LogoWrapper>
        <Text style={styles.User}> {users.name}</Text>
        <Image source={{ uri:image }} style={styles.tinyLogo} />
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
          <RecBtn 
              bgC={Configurations.colors.butCol}
              text="updates image" 
              height="75" 
              width="200" 
              onRecBtnPress={updateImg} />
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
    marginTop: "57.5%"
  },
  User: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Configurations.colors.secCol,
    marginTop: '5.5%',
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
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
    height: '30%',
    marginTop: '1%',
    alignSelf: 'center'
  },
  tinyLogo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
    marginTop: 10
  },


});
