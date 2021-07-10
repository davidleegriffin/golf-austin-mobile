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

function Calendar({route, navigation}) {
    console.log('route', route.params.marker);

    return (
        <>
            <View style={styles.container}>
                <Text>CALENDAR</Text>
            </View>
        </>
    )
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default Calendar;