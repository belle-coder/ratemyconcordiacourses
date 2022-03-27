import React from "react";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import Icon from "./Icon";
import {DataT, ReviewT} from "../types";
import styles, {DARK_GRAY, WHITE} from "../assets/styles";
import DEMO from "../assets/data/demo";
import {CourseInList} from "./index";
import reviewsData from "../assets/data/reviewsdata";
import ReviewItem from "./ReviewItem";

const ReviewSection = ({
                        courseid,
                    }: ReviewT) => {
    let reviewNum = DEMO[courseid - 1].reviews;
    let index1 = reviewsData.findIndex(i => i.courseid === courseid);
    let temp: ReviewT[]=[reviewsData[index1]];
    let count =0;
    let j:number=index1+1;
    for(; j<reviewsData.length-1;j++){
        if(reviewsData[j].courseid===courseid){
            temp.push(reviewsData[j])
            count++;
        }
    }

    return(
    <View style={styles.containerReviewItem}>
        <FlatList
            data={temp}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
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
