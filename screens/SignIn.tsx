import React from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList,
} from "react-native";
import { Icon, Message } from "../components";
import DEMO from "../assets/data/demo";
import styles, { DARK_GRAY } from "../assets/styles";

const SignIn = () => (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >

    <Text style={styles.signIntitle}>Sign In</Text>
    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.loginTextButton}>Sign up</Text>
    </TouchableOpacity>
    </ImageBackground>
);

export default SignIn;