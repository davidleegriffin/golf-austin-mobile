import React from "react";
import { StyleSheet, Button, Text, View, ImageBackground, Image, TouchableOpacity, Dimensions } from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useQuery } from "@apollo/client";
import { GET_GOLF } from "../queries/getGolf.js";

const HomeScreen = ({ route, navigation }) => {
const { user } = route.params;

const {
    data, 
    loading, 
    error
} = useQuery(GET_GOLF);

const golfCourses = data?.golf;
// console.log('golfCourses', golfCourses[0].Name__A);

if (loading) return <Text>Almost there...</Text>
if (error) return <Text>{error?.message}</Text>

const image = { uri: 'https://images.unsplash.com/photo-1595841055318-943e15fbbe80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgzfHxnb2xmfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60' };

function selectCourse(marker) {
    console.log("the button has been pressed", marker);
    navigation.navigate("Detail", { marker });
};

    return (
        <>
            <ImageBackground source={image} style={styles.image}>
                    <View style={styles.container}>
                        <Text style={styles.banner}>Welcome {user.name}</Text>
                        <MapView
                            style={styles.map}
                            provider={PROVIDER_GOOGLE}
                            initialRegion={{
                                latitude: 30.2972,
                                longitude: -97.8031,
                                latitudeDelta: 0.423922,
                                longitudeDelta: 0.3121,
                            }}
                            >
                            {golfCourses.map((marker, index) => (
                                <Marker
                                    key={index}
                                    style={styles.marker}
                                    coordinate={{ latitude: marker.Latitude__B, longitude: marker.Longitude__C }}
                                    image={require('./App-golf-game-icon.png')}
                                    title={`${marker.Name__A}`}
                                    description={`${marker.Description__E}`}
                                >
                                    <Callout style={styles.tooltip} onPress={() => selectCourse(marker)}>    
                                        <Text style={styles.toolText}>{`${marker.Name__A}`}</Text>
                                    </Callout>
                                </Marker>
                            ))}
                        </MapView>
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
        marginTop: 100,
        transform: [{ scale: 2 }],
    },
    profilePic: {
        flex: 0,
        width: 100,
        height: 100,
        borderRadius: 250,
        marginBottom: 25,
    },
    map: {
        width: 380,
        height: 500,
    },
    toolText: {

    },
    marker: {
        flex: 0,
        width: 100, //Dimensions.get('window').width,
        height: 100, //Dimensions.get('window').height,
    },

    tooltip: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 100, 
        height: 50, 
    },
});
