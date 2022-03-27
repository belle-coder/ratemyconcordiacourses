import React from "react";
import {ImageBackground, ScrollView, Text, TouchableOpacity, View,} from "react-native";
import {Icon, ProfileItem} from "../components";
import DEMO from "../assets/data/demo";
import styles, {WHITE} from "../assets/styles";
import ReviewSection from "../components/ReviewSection";

const CourseProfile = ({route, navigation}) => {
    const courseID = route.params
    let reviewNum = DEMO[courseID - 1].reviews;
    const {id, match, description, name, image, reviews,} = DEMO[courseID - 1];
    return (
        <ImageBackground source={require("../assets/images/bg.png")} style={styles.bg}>
            <ImageBackground source={require("../assets/images/bg.png")} style={styles.bg}>
                <ScrollView style={styles.containerProfile}>
                    <ImageBackground source={image} style={styles.photo}>
                        <View style={styles.top}>
                            <TouchableOpacity>
                                <Icon name="chevron-back" size={20} color={WHITE} style={styles.topIconLeft}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name="ellipsis-vertical" size={20} color={WHITE} style={styles.topIconRight}/>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <ProfileItem id={id} image={image} match={match} name={name} description={description} reviews={reviews}/>
                </ScrollView>
            </ImageBackground>
            <ImageBackground
                source={require("../assets/images/bg.png")}
                style={styles.bg}
            >
                <View style={styles.bg2}>
                    <ReviewSection
                        courseid={courseID}/>
                </View>
            </ImageBackground>
            <View style={styles.containerSignButton}>
                <TouchableOpacity style={[styles.loginButton, {backgroundColor: "#D2132A"}]}
                                  onPress={() => navigation.navigate('LeaveReview', courseID)}>
                    <Text style={[styles.loginTextButton, {color: "#FFFFFF"}]}>Leave Review</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default CourseProfile;
