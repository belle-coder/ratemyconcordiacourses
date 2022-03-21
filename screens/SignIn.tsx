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

      <View style={styles.containerMatches}>
        <View style={styles.top}>
          <Text style={styles.signIntitle}>Sign In</Text>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginTextButton}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
);

export default SignIn;