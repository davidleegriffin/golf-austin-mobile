import React, { useState } from "react";
import { StyleSheet, View, Button, ImageBackground, Image, Text } from "react-native";
import * as Google from "expo-google-app-auth";

function Detail(props) {
    console.log('props', props.route.params.marker.Name__A);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.route.params.marker.Name__A}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        flex: 1,
        color: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 375,
        textAlign: 'center',
        transform: [{ scale: 2 }],
    },
});

export default Detail;