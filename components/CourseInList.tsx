import React from "react";
import {Text, View, Image} from "react-native";
import {MessageT} from "../assets/data/types";
import styles from "../assets/styles";

const CourseInList = ({image, description, name}: MessageT) => (
    <View style={styles.containerMessage}>
        <Image source={image} style={styles.avatar}/>
        <View>
            <Text>{name}</Text>
            <Text style={styles.message}>{description}</Text>
        </View>
    </View>
);

export default CourseInList;
