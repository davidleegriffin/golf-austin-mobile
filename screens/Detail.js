import React, { useState } from "react";
import { StyleSheet, View, Button, ImageBackground, Image, Text, Dimensions } from "react-native";
import { BlurView } from 'expo-blur';

function Detail(props) {

    console.log('props', props.route.params.marker.Name__A);

    const image = { uri: "https://images.unsplash.com/photo-1592919505780-303950717480?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" };

    return (
        <>
            <ImageBackground source={image} style={styles.image}>
                <BlurView intensity={75} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                    <Image
                    style={styles.courseImage} 
                    source={{
                        uri: `${props.route.params.marker.ImageUrl__D}`,
                    }}
                    />
                    <Text style={styles.text}>{props.route.params.marker.Name__A}</Text>
                    <View style={styles.description}>
                        <Text>{props.route.params.marker.Description__E}</Text>
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
    text: {
        flex: 1,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 150,
        left: 120,     
        backgroundColor: 'rgba(155,155,125,0.75)',
        transform: [{ scale: 2 }],
        textShadowColor: 'white', 
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
    },
    image: {
        flex: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        resizeMode: 'cover',
        justifyContent: 'center',
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
    },
});

export default Detail;