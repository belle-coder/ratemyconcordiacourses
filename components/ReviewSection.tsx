import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Icon from "./Icon";
import { DataT, ReviewT } from "../assets/data/types";
import styles, { DARK_GRAY, WHITE } from "../assets/styles";
import DEMO from "../assets/data/demo";
import { CourseInList } from "./index";
import reviewsData from "../assets/data/reviewsdata";
import ReviewItem from "./ReviewItem";

const ReviewSection = ({ courseid }: ReviewT) => {
  const temp = reviewsData.filter((item) => {
    return item.courseid === courseid;
  });

  return (
    <View style={styles.containerReviewItem}>
      <FlatList
        data={temp}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ReviewItem
            courseid={item.courseid}
            reviewid={item.reviewid}
            username={item.username}
            recommend={item.recommend}
            overall={item.overall}
            review={item.review}
          />
        )}
      />
    </View>
  );
};

export default ReviewSection;
