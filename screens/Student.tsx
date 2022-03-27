import React from "react";
import {ImageBackground, ScrollView, Text, TouchableOpacity, View,} from "react-native";
import {Icon} from "../components";
import styles, {DARK_GRAY} from "../assets/styles";

const Student = ({navigation}: any) => {
    global.globalusername="TheBestKaylee123"
    return (
    <ImageBackground source={require("../assets/images/bg.png")} style={styles.bg}>
        <ScrollView style={styles.containerProfile}>
            <ImageBackground source={require("../assets/images/student.jpg")} style={styles.photo1}>
                <View style={styles.top}>
                    <TouchableOpacity>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View style={styles.containerProfileItem}>
                <Text style={styles.name}>TheBestKaylee123</Text>
                <View style={styles.info}>
                    <Text style={styles.iconProfile}><Icon name="person" size={12} color={DARK_GRAY}/></Text>
                    <Text style={styles.infoContent}>Computer Science program</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.iconProfile}><Icon name="calendar" size={12} color={DARK_GRAY}/></Text>
                    <Text style={styles.infoContent}>3rd year student</Text>
                </View>
            </View>
            <View style={styles.containerSignButton}>
                <TouchableOpacity style={[styles.loginButton, {backgroundColor: "#D2132A"}]} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={[styles.loginTextButton, {color: "#FFFFFF"}]}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </ImageBackground>
);};

export default Student;
