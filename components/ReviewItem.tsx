import React from "react";
import {Text, View} from "react-native";
import Icon from "./Icon";
import {DataT, ReviewT} from "../assets/data/types";
import styles, {DARK_GRAY, WHITE} from "../assets/styles";

const ReviewItem = ({

                        review,
                        recommend,
                        overall,
    username
                    }: ReviewT) => (
    <View style={styles.containerHome}>

        <View style={styles.info}>
            <Icon name="person" size={12} color={DARK_GRAY}/>
            <Text style={styles.iconProfile}>{username}</Text>
        </View>

        <View style={styles.info}>
            <Icon name="star" size={12} color={DARK_GRAY}/>
            <Text style={styles.iconProfile}>Recommend?</Text>
            <Text style={styles.infoContent}>{recommend? "YES": "NO"}</Text>

        </View>
        <View style={styles.info}>
            <Icon name="star" size={12} color={DARK_GRAY}/>
            <Text style={styles.infoContent}> Overall Rating: {overall}/10</Text>
        </View>

        <View style={styles.info}>
            <Text style={styles.infoContent}>{review}</Text>
        </View>

    </View>
);

export default ReviewItem;
