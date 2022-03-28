import React from "react";
import {FlatList, View, Text} from "react-native";
import {DataT, ReviewT} from "../assets/data/types";
import styles from "../assets/styles";
import ReviewItem from "./ReviewItem";

const ReviewSection = ({courseid,}: ReviewT) => {
    const customData = require('../screens/courses.json');
    let temp:ReviewT[] = customData.courses[courseid].coursereviews;
    const [todo, setTodo] = React.useState();
    React.useEffect(() => {
        fetch("https://api.jsonbin.io/v3/b/624100c7061827674380d394/1", {
            method: "GET", headers: {"X-Master-Key": "$2b$10$7/c.W3mpcmJD74pen7tUU.ptj6mFMSDIiKuqx3BW50Dfz/z2.J.pC"}
        }).then(res => res.json()).then((json) => setTodo(json));
    }, []);
    if (!todo) {
        return <View><Text>"loading..."</Text></View>
    }
    if (!todo)
    console.log("hellloo "+JSON.stringify(todo.record.reviews))
    let revArray:any[] = todo.record.reviews;
    let j = 0
    let temp1: any[]
    for (let i = 0; i < 19; i++) {
        if (revArray[i].courseid == courseid) {
            temp1[i] = revArray[i];
            console.log(temp1[i].review);
            j++;
        }
    }

    /*

        if (!todo1) {return <View><Text>"loading..."</Text></View>}
        let temp1: any[]
        let revArray:ReviewT[] = todo1.record.reviews;
        let j=0
        for (let i = 0; i < todo1.record.reviews.length; i++) {
            if (todo1.record.reviews[i].courseid == courseid) {
                temp1[i]= todo1.record.reviews[i];
                console.log(temp1[i].review);
                j++;
            }
        }
    */

    return(
        <View style={styles.containerReviewItem}>
            <FlatList
                data={temp}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item})=> (
                    <ReviewItem courseid={item.courseid} reviewid={item.reviewid} username={item.username}
                                recommend={item.recommend} overall={item.overall} review={item.review}/>
                )}
            />
        </View>
    );
};

export default ReviewSection;


