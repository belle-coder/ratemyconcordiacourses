import React from "react";
import {ImageBackground, ScrollView, Text, TouchableOpacity, View,} from "react-native";
import {Icon, ProfileItem} from "../components";
import styles, {BLACK, DARK_GRAY, WHITE} from "../assets/styles";
import DEMO from "../assets/data/demo";

const LeaveReview = ({route, navigation}) => {
    const courseID = route.params
    const {id, match, description, name, image, reviews,} = DEMO[courseID - 1];
    return (
        <ImageBackground source={require("../assets/images/bg.png")} style={styles.bg}>
            <ImageBackground source={require("../assets/images/bg.png")} style={styles.bg}>
                <ScrollView style={styles.containerProfile}>
                        <View style={styles.top}>
                            <TouchableOpacity>
                                <Icon name="chevron-back" size={20} color={WHITE} style={styles.topIconLeft}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name="ellipsis-vertical" size={20} color={WHITE} style={styles.topIconRight}/>
                            </TouchableOpacity>
                        </View>
                    <View style={styles.containerProfileItem}>
                        <Text style={styles.name}>{name}</Text>
                        <View style={styles.info}>
                            <Text style={styles.infoContent}>{description}</Text>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        </ImageBackground>

    );
};

export default LeaveReview;
