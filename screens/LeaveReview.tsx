import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import { Icon, ProfileItem } from "../components";
import styles, { BLACK, DARK_GRAY, WHITE } from "../assets/styles";
import DEMO from "../assets/data/demo";
import { Rating } from "react-native-ratings";
import { ReviewT } from "../assets/data/types";
import reviewsData from "../assets/data/reviewsdata";
import { loginInfo } from "../backend/firebase";
import set = Reflect.set;

const LeaveReview = ({ route, navigation }) => {
  const courseID = route.params;

  const [checked, setChecked] = React.useState("first");
  const { id, match, description, name, image, reviews } = DEMO[courseID - 1];
  let temp: ReviewT = {
    courseid: courseID,
    reviewid: reviews + 1,
    username: "TheBestKaylee123",
    review: "test",
    recommend: true,
    overall: 0,
  };
  const [reviewd, setreview] = React.useState({
    courseid: courseID,
    reviewid: reviewsData.length,
    username: loginInfo.email,
    review: "",
    recommend: false,
    overall: 5,
  });

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bg}
    >
      <ImageBackground
        source={require("../assets/images/bg.png")}
        style={styles.bg}
      >
        <ScrollView style={styles.containerProfile}>
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
          <View style={styles.containerProfileItem}>
            <View style={styles.top2}>
              <Text style={styles.title}>{name}</Text>
            </View>
            <View style={styles.info}>
              <Text style={styles.infoContent}>{description}</Text>
            </View>
          </View>
          <View style={{ marginTop: 30 }}>
            <View style={styles.containerProfileItem}>
              <View style={styles.top2}>
                <Text style={styles.title}>Review</Text>
              </View>
              <View style={{ marginLeft: 10, marginTop: 10 }}>
                <View style={styles.info}>
                  <Text style={styles.infoContent}>Rate it</Text>
                  <Rating
                    type="custom"
                    ratingCount={10}
                    imageSize={18}
                    startingValue={reviewd.overall}
                    onFinishRating={(v: any) => {
                      setreview({
                        ...reviewd,
                        overall: v,
                      });
                    }}
                    style={{ paddingVertical: 2, marginLeft: 20 }}
                  />
                </View>
                <View style={styles.info}>
                  <Text style={styles.infoContent}>Recommend this course?</Text>
                  <Text
                    style={{
                      padding: 10,
                      color: reviewd.recommend ? "#F1C40F" : "black",
                      fontWeight: "bold",
                    }}
                    onPress={() => {
                      setreview({
                        ...reviewd,
                        recommend: true,
                      });
                    }}
                  >
                    Yes
                  </Text>
                  <Text
                    style={{
                      padding: 10,
                      color: !reviewd.recommend ? "#F1C40F" : "black",
                      fontWeight: "bold",
                    }}
                    onPress={() => {
                      setreview({
                        ...reviewd,
                        recommend: false,
                      });
                    }}
                  >
                    No
                  </Text>
                </View>
                <View style={styles.info}>
                  <TextInput
                    value={reviewd.review}
                    style={styles.reviewInput}
                    onChangeText={(v) => {
                      setreview({
                        ...reviewd,
                        review: v,
                      });
                    }}
                    placeholder={"Write your review here"}
                    keyboardType="default"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.containerSignButton}>
            <TouchableOpacity
              style={[styles.loginButton, { backgroundColor: "#D2132A" }]}
              onPress={() => {
                reviewsData.push(reviewd);
                alert("submit successfully ")
                navigation.pop();
              }}
            >
              <Text style={[styles.loginTextButton, { color: "#FFFFFF" }]}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </ImageBackground>
  );
};

export default LeaveReview;
