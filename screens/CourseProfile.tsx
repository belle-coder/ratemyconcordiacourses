import React from "react";
import {ImageBackground, ScrollView, Text, TouchableOpacity, View,} from "react-native";
import {Icon, ProfileItem} from "../components";
import DEMO from "../assets/data/demo";
import styles, {WHITE} from "../assets/styles";
import ReviewSection from "../components/ReviewSection";
import {DataT, ReviewT} from "../assets/data/types";

const CourseProfile = ({route, navigation}) => {
    const courseID = route.params
    const [todo, setTodo] = React.useState();
    React.useEffect(() => {
        fetch("https://api.jsonbin.io/v3/b/6240f9df061827674380c930/", {
            method: "GET",
            headers: {"X-Master-Key": "$2b$10$7/c.W3mpcmJD74pen7tUU.ptj6mFMSDIiKuqx3BW50Dfz/z2.J.pC"}
        }).then(res => res.json())
            .then((json) => setTodo(json));
    }, []);
    if (!todo) {return "loading..."}
    console.log(JSON.stringify(todo))
    let thisCourse: any = todo.record.courses[courseID-1];
    console.log("course number reviews : " + thisCourse.name)
    const temp3: DataT = {
        id: thisCourse.id,
        name: thisCourse.name,
        match: thisCourse.match,
        description: thisCourse.description,
        image: thisCourse.image,
        reviews: thisCourse.reviews

    };
    return (
        <ImageBackground source={require("../assets/images/bg.png")} style={styles.bg}>
            <ImageBackground source={require("../assets/images/bg.png")} style={styles.bg}>
                <ScrollView style={styles.containerProfile}>
                    <ImageBackground source={temp3.image} style={styles.photo}>
                        <View style={styles.top}>
                            <TouchableOpacity>
                                <Icon name="chevron-back" size={20} color={WHITE} style={styles.topIconLeft}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name="ellipsis-vertical" size={20} color={WHITE} style={styles.topIconRight}/>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <ProfileItem id={temp3.id} image={temp3.image} match={temp3.match} name={temp3.name} description={temp3.description} reviews={temp3.reviews}/>
                </ScrollView>
            </ImageBackground>
            <ImageBackground
                source={require("../assets/images/bg.png")}
                style={styles.bg}
            >
                <View style={styles.bg2}>
                    <ReviewSection courseid={courseID}/>
                </View>
            </ImageBackground>
            <View style={styles.containerSignButton}>
                <TouchableOpacity style={[styles.loginButton, {backgroundColor: "#D2132A"}]} onPress={() => navigation.navigate('LeaveReview', courseID)}>
                    <Text style={[styles.loginTextButton, {color: "#FFFFFF"}]}>Leave Review</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default CourseProfile;
