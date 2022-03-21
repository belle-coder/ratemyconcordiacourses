import React from "react";
import {
  Text,
  ImageBackground,
} from "react-native";
import styles from "../assets/styles";

const SignUp = () => (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >

    <Text style={styles.signIntitle}>Sign Up</Text>
    </ImageBackground>
);

export default SignUp;