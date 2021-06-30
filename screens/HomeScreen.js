import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import MapView from 'react-native-maps';

const HomeScreen = ({ route, navigation }) => {
const { user } = route.params;
const image = { uri: 'https://images.unsplash.com/photo-1538648759472-7251f7cb2c2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGdvbGZ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' };

console.log("user from google", user);

    return (
        <>
            <ImageBackground source={image} style={styles.image}>
                    <View style={styles.container}>
                        <Text style={styles.banner}>Welcome {user.name}</Text>
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: 30.2672,
                                longitude: -97.7431,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        />
                        <Image
                            style={styles.profilePic}
                            source={{
                                uri: `${user.photoUrl}`,
                            }}
                        />
                    </View>
            </ImageBackground>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center',

    },
    banner: {
        // flex: 1,
        marginTop: 80,
        transform: [{ scale: 2 }],
    },
    profilePic: {
        flex: 0,
        width: 100,
        height: 100,
        borderRadius: 250,
        // marginBottom: 25,
    },
    map: {
        width: 300,
        height: 375,
      },
});
