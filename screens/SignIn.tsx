import React from "react";
import {Text, TouchableOpacity, ImageBackground, View, TextInput, SafeAreaView} from "react-native";
import styles from "../assets/styles";

function SignIn({navigation}: any) {

    const [values, setValues] = React.useState({email: '', password: ''});
    const [isSecureEntry, setIsSecureEntry] = React.useState(true);

    const handleChange = (name: any, value: any) => {

        setValues({
            ...values,
            [name]: value,
        });
    };

    const validateEmail = (email: any) => {
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexp.test(email);
    };

    return (
        <ImageBackground
            source={require("../assets/images/bg.png")}
            style={styles.bg}
        >

            <View style={[styles.containerHome, styles.containerSignIn]}>
                <Text style={styles.signIntitle}>Sign In</Text>
                <SafeAreaView>
                    <TextInput
                        placeholder="Email"
                        style={[styles.signIninput, {marginTop: 20}]}
                        onChangeText={(text) => {
                            handleChange('email', text), validateEmail(text)
                        }}
                        value={values.email}
                    />
                </SafeAreaView>

                <SafeAreaView>
                    <TextInput
                        placeholder="Password"
                        style={styles.signIninput}
                        onChangeText={(text) => handleChange('password', text)}
                        secureTextEntry={isSecureEntry}
                        value={values.password}
                    />
                </SafeAreaView>

                <View style={styles.containerSignButton}>
                    <TouchableOpacity style={[styles.loginButton, {backgroundColor: "#D2132A"}]}
                                      onPress={() => navigation.navigate('Tab')}>
                        <Text style={[styles.loginTextButton, {color: "#FFFFFF"}]}>Log in</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.containerSignButton, {marginTop: 20, marginBottom: 20}]}>
                    <Text style={{color: "#757E90"}}>Don't have an account ? </Text>
                    <TouchableOpacity style={{marginLeft: 5}} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={[styles.loginTextButton, {color: "#D2132A"}]}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ImageBackground>
    )
};

export default SignIn;