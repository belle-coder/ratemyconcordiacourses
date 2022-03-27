import React from "react";
import {Text, View} from "react-native";
import Icon from "./Icon";
import {DataT} from "../types";
import styles, {DARK_GRAY, WHITE} from "../assets/styles";

const ProfileItem = ({
                         id,
                         match,
                         description,
                         name,
                     }: DataT) => (
    <View style={styles.containerProfileItem}>
        <View style={styles.matchesProfileItem}>
            <Text style={styles.matchesTextProfileItem}>
                <Icon name="heart" size={13} color={WHITE}/> {match}% Match!
            </Text>
        </View>

        <Text style={styles.name}>{name}</Text>

        <Text style={styles.name}>{description}</Text>

    </View>

);

export default ProfileItem;
