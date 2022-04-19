import React from "react";
import styles, { WHITE } from "../assets/styles";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { ScrollView } from "react-native-gesture-handler";
import { Rating } from "react-native-ratings";

const degree = [
  { label: "Bachelor", value: "Bachelor" },
  { label: "Certificate", value: "certificate" },
  { label: "Masters", value: "master" },
  { label: "Minor", value: "minor" },
  { label: "Major", value: "major" },
  { label: "Phd", value: "phd" },
];

const year = [
  { label: "1st year", value: "1" },
  { label: "2nd year", value: "2" },
  { label: "3rd year", value: "3" },
  { label: "4th year", value: "4" },
];

const Questionnaire = ({ navigation }: any) => {
  return (
    <ScrollView>
      <View style={{ marginTop: 60 }}>
        <View>
          <Text style={{ marginBottom: 70, fontSize: 22, marginLeft: 30 }}>
            Questionnaire
          </Text>
        </View>

        <View style={{ height: 10 }}></View>

        <View style={styles.containerProfileItem}>
          <Text style={pickerSelectStyles.question}>
            Please enter what kind of degree are you pursuing
          </Text>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={(value) => value}
              items={degree}
            />
          </View>
          <Text style={pickerSelectStyles.question}>
            Please enter your program of education
          </Text>
          <View style={{ height: 10 }}></View>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 10,
              fontSize: 16,
              marginLeft: 10,
              height: 45,
              paddingVertical: 12,
              paddingHorizontal: 10,
            }}
            placeholder="Enter your program"
          ></TextInput>

          <Text style={pickerSelectStyles.question}>
            What year are you into
          </Text>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={(value) => value}
              items={year}
            />
          </View>
          <Text style={pickerSelectStyles.question}>
            Do you seek other students’ opinions when you select your courses
            for the term?
          </Text>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={(value) => value}
              items={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" },
              ]}
            />
          </View>
          <Text style={pickerSelectStyles.question}>
            Do you think an application like this is useful to your academic
            experience?
          </Text>
          <View style={{ marginLeft: 10, marginTop: 10 }}>
            <RNPickerSelect
              style={pickerSelectStyles}
              onValueChange={(value) => value}
              items={[
                { label: "Yes", value: "yes" },
                { label: "No", value: "no" },
              ]}
            />
          </View>

          {/* <TextInput style = {pickerSelectStyles.input}
     multiline
     placeholder= " Enter Description...">

     </TextInput> */}

          <Text style={pickerSelectStyles.question}>
            On a scale of 1 to 10, how much did you find the application
            intuitive to use?
          </Text>

          <Rating
            type="star"
            ratingCount={10}
            imageSize={30}
            showRating
            fractions={2}
          />
          <Text style={pickerSelectStyles.question}>
            On a scale of 1 to 10, how much did you enjoy using the application?
          </Text>

          <Rating
            type="star"
            ratingCount={10}
            imageSize={30}
            showRating
            fractions={2}
          />

          <Text style={pickerSelectStyles.question}>
            On a scale of 1 to 10, how easy did you find our application to use?
          </Text>

          <Rating
            type="star"
            ratingCount={10}
            imageSize={30}
            showRating
            fractions={2}
          />
          <Text style={pickerSelectStyles.question}>
            What improvements do you think should be applied to the
            RateMyConcordiaCourses?
          </Text>
          <View style={{ height: 10 }}></View>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 10,
              fontSize: 16,
              marginLeft: 10,
              height: 45,
              paddingVertical: 12,
              paddingHorizontal: 10,
            }}
            placeholder="Enter here"
          ></TextInput>

          <Text style={pickerSelectStyles.question}>
            Do you think it's more convenient that the app is portable on phones
            and computers
          </Text>
          <View style={{ height: 10 }}></View>
          <TextInput
            style={{
              borderWidth: 1,
              borderRadius: 10,
              fontSize: 16,
              marginLeft: 10,
              height: 45,
              paddingVertical: 12,
              paddingHorizontal: 10,
            }}
            placeholder="Enter here"
          ></TextInput>

          <View style={styles.containerSignButton}>
            <TouchableOpacity
              style={[styles.loginButton, { backgroundColor: "blue" }]}
              onPress={()=>{
                Alert.alert("submit successfully ")
              }}
            >
              <Text style={[styles.loginTextButton, { color: "#FFFFFF" }]}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Questionnaire;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    borderTopEndRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    borderTopEndRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 20,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  input: {
    height: 100,
    marginTop: 10,
    marginLeft: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    paddingTop: 12,
    fontSize: 16,
  },
  question: {
    marginHorizontal: 10,
    paddingTop: 20,
  },
});
