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

    const origin = {latitude: 30.5122, longitude: -97.8201};
    // const origin = {latitude: location.coords?.latitude, longitude: location.coords?.longitude};
    const destination = {latitude: marker.Latitude__B, longitude: marker.Longitude__C};
    const GOOGLE_MAPS_APIKEY = "AIzaSyCgMsmzBeaD7XLhq-YcKtJKR3mqfIbq3SQ";
    const deltaLng = (origin.longitude) - (marker.Longitude__C);
    console.log('deltaLng', deltaLng);

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>DIRECTION</Text>
            <View>
                    <MapView 
                        style={styles.directionMap}
                        // provider={PROVIDER_GOOGLE}
                        initialRegion={{
                        latitude: 30.2872,
                        longitude: -97.8031,
                        latitudeDelta: 0.473922,
                        // longitudeDelta: deltaLng,
                        longitudeDelta: 0.3512,
                        }}
                    >
                        <Marker
                            coordinate={origin}
                            image={require('./App-golf-game-icon.png')}
                            title={'Home'}
                        >
                        </Marker>
                        <Marker
                            coordinate={destination}
                            image={require('./App-golf-game-icon.png')}
                            title={`${marker.Name__A}`}
                        >
                        </Marker>
                        <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={5}
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
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})


export default Direction;