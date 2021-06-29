import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import * as Google from "expo-google-app-auth";

const LoginScreen = ({ navigation }) => {
const signInAsync = async () => {
    console.log("LoginScreen.js 6 | loggin in");
    try {
    const { type, user } = await Google.logInAsync({
        iosClientId: `747145895419-t2kvroidqb8r2fcf0e8uf7no74khr4m9.apps.googleusercontent.com`,
        androidClientId: `747145895419-t4vq6rbo2tkang7vabvf5dqgtlqhrv2s.apps.googleusercontent.com`,
    });

    if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        navigation.navigate("Profile", { user });
       
    }
    } catch (error) {
    console.log("LoginScreen.js 19 | error with login", error);
    }
};

    return (
        <View style={styles.container}>
        <Button title="Login with Google" onPress={signInAsync} />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',      
    }
});