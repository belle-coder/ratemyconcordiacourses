import React from "react";
import {Text, View, Image, Dimensions, TouchableOpacity} from "react-native";
import Icon from "./Icon";
import {CardItemT} from "../assets/data/types";
import styles, {
    DISLIKE_ACTIONS,
    FLASH_ACTIONS,
    LIKE_ACTIONS,
    STAR_ACTIONS,
    WHITE,
} from "../assets/styles";

const CardItem = ({
                      description,
                      hasActions,
                      hasVariant,
                      image,
                      matches,
                      name,
                      onHeartPress,
                      onXPress
                  }: CardItemT) => {
    // Custom styling
    const fullWidth = Dimensions.get("window").width;

    const imageStyle = [
        {
            borderRadius: 8,
            width: hasVariant ? fullWidth / 2 - 30 : fullWidth - 80,
            height: hasVariant ? 170 : 350,
            margin: hasVariant ? 0 : 20,
            borderColor: "#f3f3f6",
            borderWidth: 1,
        },
    ];

    const nameStyle = [
        {
            paddingTop: hasVariant ? 10 : 15,
            paddingBottom: hasVariant ? 5 : 7,
            color: "#363636",
            fontSize: hasVariant ? 15 : 30,
        },
    ];

    return (
        <View style={styles.containerCardItem}>
            {/* IMAGE */}
            <Image source={image} style={imageStyle}/>

            {/* MATCHES */}
            {matches && (
                <View style={styles.matchesCardItem}>
                    <Text style={styles.matchesTextCardItem}>
                        <Icon name="heart" color={WHITE} size={13}/> {matches}% Match!
                    </Text>
                </View>
            )}

            {/* NAME */}
            <Text style={nameStyle}>{name}</Text>

            {description && (
                <Text style={styles.descriptionCardItem}>{description}</Text>
            )}

            {/* STATUS */}
            {!description && (
                <View style={styles.status}>
                    <Text style={styles.statusText}>
                    </Text>
                </View>
            )}

            {hasActions && (
                <View style={styles.actionsCardItem}>
                    <TouchableOpacity style={styles.button} onPress={onXPress}>
                        <Icon name="close" color={DISLIKE_ACTIONS} size={25}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={onHeartPress}>
                        <Icon name="heart" color="#D2132A" size={25}/>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default CardItem;
