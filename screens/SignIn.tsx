import React from "react";
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  TextInput,
  SafeAreaView,
} from "react-native";
import styles from "../assets/styles";

function SignIn() {

  const [values, setValues] = React.useState({email: '', password: ''});
  const [isSecureEntry, setIsSecureEntry] = React.useState(true);  

  const handleChange = (name: any, value: any) => {
    setValues({
      ...values,
      [name]: value,
    });
  };
  
  const validateEmail =  (email: any) => {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  };

  return(
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >

    <Text style={styles.signIntitle}>Sign In</Text>

    <Text style={styles.signInFieldHeaders}>Email</Text>
    <SafeAreaView>
      <TextInput
        placeholder="Please enter your email address"
        style={styles.signIninput}
        onChangeText = {(text) => {handleChange('email', text), validateEmail(text)}}          value={values.email}
      />
    </SafeAreaView>

    <Text style = {styles.signInFieldHeaders}>Password</Text>
    <SafeAreaView>
      <TextInput
          placeholder = "Please enter your password"
          style={styles.signIninput}
          onChangeText = {(text) => handleChange('password', text)}
          secureTextEntry = {isSecureEntry}
          value={values.password}
        />
    </SafeAreaView>

    <View style={styles.containerSignIn}>
      <TouchableOpacity style={[styles.loginButton, {backgroundColor: "#D2132A"}]}>
        <Text style={[styles.loginTextButton, {color: "#FFFFFF"}]}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.loginButton, {backgroundColor: "#FFFFFF"}, {marginLeft: 30}]}>
        <Text style={[styles.loginTextButton, {color: "#363636"}]}>Sign up</Text>
      </TouchableOpacity>
    </View>

    </ImageBackground>
)};

export default SignIn;