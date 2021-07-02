import React, { useState } from "react";
import { StyleSheet, View, Button, ImageBackground, Image, Text, Dimensions } from "react-native";
import { BlurView } from 'expo-blur';

function Detail(props) {

    const image = { uri: "https://images.unsplash.com/photo-1592919505780-303950717480?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" };
    const dress = (props.route.params.marker.DressCode__H) ? props.route.params.marker.DressCode__H : "No Posted Dress Code";

    return (
        <>
            <ImageBackground source={image} style={styles.backgroundImage}>
                <BlurView intensity={75} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                    <Image
                    style={styles.courseImage}
                    source={{
                        uri: `${props.route.params.marker.ImageUrl__D}`,
                    }}
                    />
                    <Text style={styles.nameText}>{props.route.params.marker.Name__A}</Text>
                    <View style={styles.description}>
                        <Text>{props.route.params.marker.Description__E}</Text>
                    </View>
                    <View style={styles.price}>
                        <Text style={styles.priceText}>{props.route.params.marker.Price__F}</Text>
                    </View>
                    <View style={styles.dress}>
                        <Text style={styles.dressText}>{dress}</Text>
                    </View>
                </BlurView>
            </ImageBackground>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: 350,
        // height: 400,
        backgroundColor: 'rgba(255,255,255,0.3)',
        padding: 50,
    },
    backgroundImage: {
        flex: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    nameText: {
        flex: 1,
        color: 'white',
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignSelf: 'center',
        position: 'absolute',
        top: 140,
        left: 120,
        backgroundColor: 'rgba(155,155,125,0.75)',
        transform: [{ scale: 2.5 }],
        textShadowColor: 'black',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 2,
        borderBottomWidth: 4,
        borderBottomColor: 'white',
    },
    courseImage: {
        flex: 0,
        width: 225,
        height: 225,
        position: 'absolute',
        top: 155,
        left: 185,
        borderRadius: 250,
        resizeMode: 'stretch',
    },
    description: {
        flex: 1,
        width: 215,
        position: 'absolute',
        top: 170,
        margin: 10,
        backgroundColor: 'rgba(255,255,255,0.55)',
        borderRadius: 25,
        padding: 15,
        borderRightWidth: 3,
        borderBottomWidth: 3,
    },
    price: {
        flex: 1,
        position: 'absolute',
        top: 375,
        right: 1,
        width: 155,
        backgroundColor: 'rgba(155,155,125,0.85)',
        borderRadius: 15,
        padding: 5,
        borderWidth: 1,
        borderColor: 'white',
    },
    priceText: {
        flex: 1,
        fontSize: 22,
        textShadowColor: 'white',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 8,
        fontWeight: 'bold',
    },
    dress: {
        flex: 1,
        position: 'absolute',
        top: 485,
        right: 1,
        width: 155,
        backgroundColor: 'rgba(45,105,25,0.5)',
        borderRadius: 25,
        padding: 5,
        borderWidth: 1,
    },
    dressText: {
        flex: 1,
        color: 'white',
        alignSelf: 'center',
    },
});

export default Detail;
