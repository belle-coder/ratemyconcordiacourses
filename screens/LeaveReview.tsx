import React from "react";
import {ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View,} from "react-native";
import {Icon} from "../components";
import styles, { WHITE} from "../assets/styles";
import {RadioButton} from 'react-native-paper';
import {Rating} from 'react-native-ratings';
import {ReviewT} from "../assets/data/types";

const LeaveReview = ({route, navigation}) => {
    const courseID = route.params
    let customData = require('./courses.json');
    let reviews = customData.courses[courseID].reviews;
    const [recommendd, setrecommend] = React.useState();
    const [reviewd, setreview] = React.useState();
    const [ratingd, setrating] = React.useState();
/*
    const [todo, setTodo] = React.useState();
    React.useEffect(() => {
        fetch("https://api.jsonbin.io/v3/b/624100c7061827674380d394/1", {
            method: "GET", headers: {"X-Master-Key": "$2b$10$7/c.W3mpcmJD74pen7tUU.ptj6mFMSDIiKuqx3BW50Dfz/z2.J.pC"}
        }).then(res => res.json()).then((json) => setTodo(json));
    }, []);
    if (!todo) {return "loading..."}
    console.log("JSON1 " + JSON.stringify(todo))
    let revArray: ReviewT[] = todo.record.reviews
    let temp: ReviewT = {courseid:courseID, reviewid:reviews+1, username:'TheBestKaylee123', review:'test', recommend:true, overall:0};
*/

    return (
        <ImageBackground source={require("../assets/images/bg.png")} style={styles.bg}>
            <ImageBackground source={require("../assets/images/bg.png")} style={styles.bg}>
                <ScrollView style={styles.containerProfile}>
                    <View style={styles.top}>
                        <TouchableOpacity>
                            <Icon name="chevron-back" size={20} color={WHITE} style={styles.topIconLeft}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="ellipsis-vertical" size={20} color={WHITE} style={styles.topIconRight}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerProfileItem}>
                        <View style={styles.top2}><Text style={styles.title}>{name}</Text></View>
                        <View style={styles.info}><Text style={styles.infoContent}>{customData.courses[courseID].description}</Text></View>
                    </View>
                    <View style={{marginTop: 30}}>
                        <View style={styles.containerProfileItem}>
                            <View style={styles.top2}><Text style={styles.title}>Review</Text></View>
                            <View style={{marginLeft: 10, marginTop: 10}}>
                                <View style={styles.info}>
                                    <Text style={styles.infoContent}>Rate it</Text>
                                    <Rating type='custom'
                                            ratingCount={10}
                                            imageSize={18} startingValue={10} style={{paddingVertical: 2, marginLeft:20}}
                                            onFinishRating={setrating}
                                    />
                                </View>
                                <View style={styles.info}>
                                    <Text style={styles.infoContent}>Recommend this course?</Text>
                                    <RadioButton value="true" status={recommendd === 'true' ? 'checked' : 'unchecked'} onPress={() => {setrecommend('true')}}/>
                                    <Text style={styles.infoContent}>Yes</Text>
                                    <RadioButton value="false" status={recommendd === 'false' ? 'checked' : 'unchecked'} onPress={() => {setrecommend('false')}}/>
                                    <Text style={styles.infoContent}>No</Text>
                                </View>
                                <View style={styles.info}>
                                    <TextInput value={reviewd} onChangeText={setreview}
                                        style={styles.reviewInput} placeholder={"Write your review here"} keyboardType="default"/>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerSignButton}>
                        <TouchableOpacity style={[styles.loginButton, {backgroundColor: "#d2132a"}]}
                                          onPress={() => {
/*
                              const {id, name, match, description, image, reviews} = customData.courses[courseID];
                              console.log("course number reviews : " + reviews)
                              let temp2:ReviewT = {
                                  "courseid": courseID, "reviewid": reviews + 1,
                                  "username": temp.username, "review": reviewd,
                                  "recommend": recommendd, "overall": ratingd
                              };
                              revArray.push(temp2)
                              const [todo, setTodo] = React.useState();
                              React.useEffect(() => {
                                  fetch("https://api.jsonbin.io/v3/b/624100c7061827674380d394",{
                                      method: "PUT",
                                      headers: {
                                          "Content-Type": "application/json",
                                          "X-Master-Key": "$2b$10$7/c.W3mpcmJD74pen7tUU.ptj6mFMSDIiKuqx3BW50Dfz/z2.J.pC"
                                      },
                                      body: JSON.stringify(revArray)
                                  }).then(res => res.json()).then((json) => setTodo(json));
                              }, []);
                              if (!todo) {
                                  return "loading..."
                              }
*/

                              navigation.navigate('CourseProfile', courseID)}}>
                            <Text style={[styles.loginTextButton, {color: "#FFFFFF"}]}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </ImageBackground>
    );
};

export default LeaveReview;
