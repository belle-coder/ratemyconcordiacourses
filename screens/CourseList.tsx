import React from "react";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    ImageBackground,
    View,
    FlatList,
} from "react-native";
import {Icon, CourseInList} from "../components";
import DEMO from "../assets/data/demo";
import styles, {DARK_GRAY} from "../assets/styles";


const CourseList = ({navigation}: any) => (
    <ImageBackground
        source={require("../assets/images/bg.png")}
        style={styles.bg}
    >
        <View style={styles.containerMessages}>
            <View style={styles.top}>
                <Text style={styles.title}>Course List</Text>
                <TouchableOpacity>
                    <Icon name="ellipsis-vertical" color={DARK_GRAY} size={20}/>
                </TouchableOpacity>
            </View>

            <FlatList
                data={DEMO}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate("CourseProfile", item.id)}>
                        <CourseInList
                            image={item.image}
                            name={item.name}
                            description={item.description}
                        />

                    </TouchableOpacity>
                )}
            />
        </View>
    </ImageBackground>
);

export default CourseList;
