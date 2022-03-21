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
    </ImageBackground>
);

export default SignIn;