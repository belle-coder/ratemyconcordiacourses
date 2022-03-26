import React from "react";
import styles, { WHITE } from "../assets/styles";
import {TouchableOpacity, View,Text,StyleSheet,TextInput } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView, } from "react-native-gesture-handler";
import { Rating } from 'react-native-ratings';
import { Colors } from "react-native-paper";


const Questionnaire = ({ navigation } : any) => {
    
  return (
    <ScrollView>
    <View style={{marginTop :60}}>
    <View>
        <Text style = {{marginBottom : 70,fontSize : 22, marginLeft : 30,}}>
            Questionnaire
        </Text>
    </View>

    <View style = {{height : 10}}></View>
    
    <View style={styles.containerProfileItem}>
        
        <Text style={pickerSelectStyles.question}>
         Question 1 will be here
        </Text>
        <View style = {{marginLeft:10,marginTop: 10}} >
        
        <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => (value)}
        items={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
        ]} />
        </View>
      
        <Text style={pickerSelectStyles.question}>
         Question 2 will be here
        </Text>
        <View style = {{marginLeft:10,marginTop: 10}} >
        
        <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => (value)}
        items={[
            { label: 'Yes', value: 'yes'},
            { label: 'No', value: 'no'  },
        ]} />
        </View>
    
        <Text style={pickerSelectStyles.question}>
         Question 3 will be 
        </Text>
       <View style = {{marginLeft:10,marginTop: 10}} >
        
        <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => (value)}
        items={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
        ]} />
        </View>
        <Text style={pickerSelectStyles.question}>
         Question 2 will be here
        </Text>
     <TextInput style = {pickerSelectStyles.input}
     multiline
     placeholder= " Enter Description...">

     </TextInput>
     <Rating
  type='heart'
  ratingCount={5}
  imageSize={50}
  showRating
  fractions={2}

/>
      <View style={styles.containerSignButton}>
        <TouchableOpacity style={[styles.loginButton, {backgroundColor: "blue"}]}>
          <Text style={[styles.loginTextButton, {color: "#FFFFFF"}]}>Submit</Text>
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
      borderTopEndRadius : 10,
      borderBottomRightRadius:10,
      borderBottomLeftRadius : 10,
      borderTopLeftRadius:10,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      borderTopEndRadius : 10,
      borderBottomRightRadius:10,
      borderBottomLeftRadius : 10,
      borderTopLeftRadius:10,
      paddingHorizontal: 8,
      paddingVertical: 20,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    input: {
          height: 100,
          marginTop: 10,
          marginLeft : 10,
          borderWidth: 1,
          padding: 10,
          borderRadius : 10,
          paddingTop: 12,
          fontSize: 16,
        },
     question : {
        marginHorizontal: 10,
        paddingTop: 20,
     }
  });
  