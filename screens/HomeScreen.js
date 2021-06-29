import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ route, navigation }) => {
const { user } = route.params;
console.log("user from google", user);
    return (
        <View>
            <Text>Profile Screen</Text>
            <Text>Welcome {user.name} !</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
