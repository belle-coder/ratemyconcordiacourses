import React from "react";
import {View, Text, TouchableOpacity, ImageBackground, FlatList,} from "react-native";
import {CardItem, Icon} from "../components";
import DEMO from "../assets/data/demo";
import styles, {DARK_GRAY} from "../assets/styles";

const Matches = ({navigation}: any) => (
    <ImageBackground source={require("../assets/images/bg.png")} style={styles.bg}>
        <View style={styles.containerMatches}>
            <View style={styles.top}>
                <Text style={styles.title}>Matches</Text>
            </View>
            <FlatList numColumns={2} data={DEMO} keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("CourseProfile", item.id)}>
                        <CardItem image={item.image} name={item.name} hasVariant/>
                    </TouchableOpacity>
                )}
            />
        </View>
    </ImageBackground>
);

export default Matches;
