import React, { useState, useEffect } from "react";
import { 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    ImageBackground, 
    Image, 
    Text, 
    Dimensions,
    Linking,
    ScrollView,
    StatusBar 
    } from "react-native";
import * as Location from 'expo-location';

function Direction(props) {
    const {location, marker} = props.route.params;
    console.log("location", location);
    console.log("marker", marker);

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>DIRECTION</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        top: 100,
    },
    mainText: {
        flex: 1,
    },
})


export default Direction;