import { useNavigation } from "@react-navigation/native";
import React ,{useEffect, useState}from "react";
import { Text, TouchableOpacity, ImageBackground, View, TextInput, SafeAreaView } from "react-native";
import styles from "../assets/styles";
import { auth } from "../backend/firebase";

function SignIn({navigation}: any) {

  const [isSecureEntry, setIsSecureEntry] = React.useState(true);  

  const [ email,setEmail]  = useState('');
  const [ password,setPassword]  = useState('');
  
  const handleSignup=() => {
    auth.signInWithEmailAndPassword(email,password)
    .then((userCredentials: { user: any; }) => {
      const user = userCredentials.user;
      console.log('logged in with ',user.email);
      navigation.navigate('Tab');
    }).catch((error: { message: any; }) => alert(error.message))
  }


  
  
  const validateEmail =  (email: any) => {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  };

 
    return(
        <ImageBackground>
    <View style={[styles.containerHome, styles.containerSignIn]}>
      <Text style={styles.signIntitle}>Sign In</Text>
      <SafeAreaView>
        <TextInput
          placeholder="Email"
          style={[styles.signIninput, {marginTop: 20}]}
          onChangeText = {(text) => {setEmail(text), validateEmail(text)}}
          value={email}
        />
      </SafeAreaView>

      <SafeAreaView>
        <TextInput
            placeholder = "Password"
            style={styles.signIninput}
            onChangeText = {(text) => setPassword(text)}
            secureTextEntry = {isSecureEntry}
            value={password}
          />
      </SafeAreaView>

      <View style={styles.containerSignButton}>
        <TouchableOpacity style={[styles.loginButton, {backgroundColor: "#D2132A"}]} 
        onPress = {handleSignup}>
          <Text style={[styles.loginTextButton, {color: "#FFFFFF"}]}>Log in</Text>
        </TouchableOpacity>
      </View>

                <View style={styles.containerSignButton}>
                    <TouchableOpacity style={[styles.loginButton, {backgroundColor: "#D2132A"}]}
                                      onPress={() => navigation.navigate('Tab')}>
                        <Text style={[styles.loginTextButton, {color: "#FFFFFF"}]}>Log in</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.containerSignButton, {marginTop: 20, marginBottom: 20}]}>
                    <Text style={{color: "#757E90"}}>Don't have an account ? </Text>
                    <TouchableOpacity style={{marginLeft: 5}} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={[styles.loginTextButton, {color: "#D2132A"}]}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ImageBackground>
    )
};

export default SignIn;