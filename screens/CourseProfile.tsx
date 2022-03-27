import React from "react";
import {
    ScrollView,
    View,
    Text,
    ImageBackground,
    TouchableOpacity, FlatList,
} from "react-native";
import {CourseInList, Icon, ProfileItem} from "../components";
import DEMO from "../assets/data/demo";
import styles, {WHITE} from "../assets/styles";
import ReviewItem from "../components/ReviewItem";
import reviewsData from "../assets/data/reviewsdata";
import ReviewSection from "../components/ReviewSection";

const CourseProfile = ({route}: any) => {
    const courseID = route.params
    let reviewNum=DEMO[courseID-1].reviews;
    const {
        id,
        match,
        description,
        name,
        image,
        reviews,
    } = DEMO[courseID - 1];

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
                    id={id}
                    image={image}
                    match={match}
                    name={name}
                    description={description}
                    reviews={reviews}
                />



            </ScrollView>
            <ImageBackground source={"../assets/images/bg.png"} style={styles.bg2}>

            <View style={styles.containerReview}>
                <ReviewSection
                    courseid={courseID}/>
            </View>
            </ImageBackground>
        </ImageBackground>

    );
};

export default CourseProfile;
