import React from "react";
import styles, { DARK_GRAY } from "../assets/styles";


import {TouchableOpacity, View,Text,StyleSheet } from "react-native";
import Icon from "../components/Icon";
import RNPickerSelect from 'react-native-picker-select';

import { blue100 } from "react-native-paper/lib/typescript/styles/colors";
import { ScrollView } from "react-native-gesture-handler";



const Questionnaire = ({ navigation } : any) => {
    
  
      
  return (
    <ScrollView>
    <View style={{marginTop :130}}>
    <View style={styles.containerProfileItem}>
        <View style={styles.top}>
        <Text style={styles.title}>Questionnaire</Text>
        </View>
        <Text style={styles.containerHome}>
         [Question 1 will be here]
        </Text>
        <View style = {{marginLeft:10,marginTop: 10}} >
        
        <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => (value)}
        items={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'baseball' },
        ]} />
        </View>
      
        <Text style={styles.containerHome}>
         [Question 1 will be here]
        </Text>
        <View style = {{marginLeft:10,marginTop: 10}} >
        
        <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => (value)}
        items={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'baseball' },
        ]} />
        </View>
    
        <Text style={styles.containerHome}>
         [Question 1 will be he
        </Text>
       <View style = {{marginLeft:10,marginTop: 10}} >
        
        <RNPickerSelect
        style={pickerSelectStyles}
        onValueChange={(value) => (value)}
        items={[
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'baseball' },
        ]} />
        </View>


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
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      borderColor: 'purple',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });
  