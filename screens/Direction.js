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
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

function Direction(props) {
    const {location, marker} = props.route.params;
    console.log("location", location.coords);
    console.log("marker", marker);

    const origin = {latitude: `${location.coords.latitude}`, longitude: `${location.coords.longitude}`};
    const destination = {latitude: `${marker.Latitude__B}`, longitude: `${marker.Longitude__C}`};
    const GOOGLE_MAPS_APIKEY = "AIzaSyCgMsmzBeaD7XLhq-YcKtJKR3mqfIbq3SQ";

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>DIRECTION</Text>
            <View>
                    <MapView 
                        style={styles.directionMap}
                        provider={PROVIDER_GOOGLE}
                        initialRegion={{
                        latitude: 30.2972,
                        longitude: -97.8031,
                        latitudeDelta: 0.723922,
                        longitudeDelta: 0.6121,
                        }}
                    >
                        <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={3}
                            strokeColor="blue"
                        />
                    </MapView>
                </View>
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
    directionMap: {
        flex: 1,
        width: 400,
        height: 600,
    },
})


export default Direction;