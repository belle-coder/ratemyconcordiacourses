import React from "react";
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  View,
} from "react-native";
import styles, { DARK_GRAY } from "../assets/styles";
import { Buttons } from "../types";

const buttons: Buttons[] = [
  {
    id: 1,
    name: "Login",
  },
  {
    id: 2,
    name: "Sign Up",
  },
];

const SignIn = () => (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      
    <Text style={styles.signIntitle}>Sign In</Text>
    <FlatList
        numColumns={2}
        data={buttons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
        <TouchableOpacity style={[styles.loginButton, { backgroundColor: index == 0 ? "#D2132A" : "#FFFFFF"}]}>
          <Text style={[styles.loginTextButton, {color: index == 0 ? "#FFFFFF" : "#281111"}]}>
            {item.name}</Text>
        </TouchableOpacity>
        )}
      />
    </ImageBackground>
);

export default SignIn;