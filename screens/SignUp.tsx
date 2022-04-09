import React, { useState } from "react";

import {
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  TextInput,
  SafeAreaView,
} from "react-native";
import styles from "../assets/styles";
import { auth } from "../backend/firebase";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);

function SignUp({ navigation }: any) {
  // const [values, setValues] = React.useState({email: '', password: '', password2: ''});
  const [isSecureEntry, setIsSecureEntry] = React.useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(email.trim(), password)
      .then((userCredentials: { user: any }) => {
        const user = userCredentials.user;
        console.log(user.email);
        navigation.navigate("Tab");
      })
      .catch((error: { message: any }) => alert(error.message));
  };

  const validateEmail = (email: any) => {
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  };

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <View style={[styles.containerHome, styles.containerSignIn]}>
        <Text style={styles.signIntitle}>Create an Account</Text>
        <SafeAreaView>
          <TextInput
            placeholder="Email"
            style={[styles.signIninput, { marginTop: 20 }]}
            onChangeText={(text) => {
              setEmail(text), validateEmail(text);
            }}
            value={email}
          />
        </SafeAreaView>

        <SafeAreaView>
          <TextInput
            placeholder="Password"
            style={styles.signIninput}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={isSecureEntry}
            value={password}
          />
          <Text style={{ marginStart: 20 }}>
            Password must be at least 8 characters
          </Text>
        </SafeAreaView>

        {/* <SafeAreaView>
        <TextInput
            placeholder = "Re-enter password"
            style={styles.signIninput}
            onChangeText = {(text) => handleChange('password2', text)}
            secureTextEntry = {isSecureEntry}
            value={values.password2}
          />
        {values.password !== values.password2 && values.password2 !== '' && <Text style={{color: "red", marginLeft: 20}}>Passwords don't match. Try again.</Text>}
      </SafeAreaView> */}

        <View style={styles.containerSignButton}>
          <TouchableOpacity
            style={[styles.loginButton, { backgroundColor: "#D2132A" }]}
            onPress={handleSignup}
          >
            <Text style={[styles.loginTextButton, { color: "#FFFFFF" }]}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.containerSignButton,
            { marginTop: 20, marginBottom: 20 },
          ]}
        >
          <Text style={[{ color: "#757E90" }]}>Already have an account ? </Text>
          <TouchableOpacity
            style={[{ marginLeft: 5 }]}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={[styles.loginTextButton, { color: "#D2132A" }]}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

export default SignUp;
