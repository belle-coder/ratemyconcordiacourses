import React from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Icon, ProfileItem } from "../components";
import DEMO from "../assets/data/demo";
import styles, { WHITE } from "../assets/styles";

const CourseProfile = () => {
  const {
    image,
    info1,
    info2,
    info3,
    info4,
    match,
    description,
    name,
  } = DEMO[1];

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
        <ImageBackground source={image} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity>
              <Icon
                name="chevron-back"
                size={20}
                color={WHITE}
                style={styles.topIconLeft}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Icon
                name="ellipsis-vertical"
                size={20}
                color={WHITE}
                style={styles.topIconRight}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <ProfileItem
          match={match}
          name={name}
          description={description}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
        />

    <View style={styles.actionsProfile}>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default CourseProfile;