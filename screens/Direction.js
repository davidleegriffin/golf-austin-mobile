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
    StatusBar,
    Body 
    } from "react-native";
import * as Location from 'expo-location';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

function Direction(props) {
    const {location, marker} = props.route.params;
    // console.log("location", location.coords);
    // console.log("marker", marker);

    const [distance, setDistance] = useState();
    const [duration, setDuration] = useState();

    const origin = {latitude: 30.5122, longitude: -97.8201};
    // const origin = {latitude: location.coords?.latitude, longitude: location.coords?.longitude};
    const destination = {latitude: marker.Latitude__B, longitude: marker.Longitude__C};
    const GOOGLE_MAPS_APIKEY = "AIzaSyCgMsmzBeaD7XLhq-YcKtJKR3mqfIbq3SQ";

    // const delta = 0.3731;
    const deltaLong = (Math.abs((-97.8201) - (marker.Longitude__C)) + 0.2);
    console.log('deltaLong', deltaLong);
    const deltaLat = (Math.abs((30.5122) - (marker.Latitude__B)) + 0.2);
    console.log('deltaLat', deltaLat);
    const detailLong = ((-97.8201 + marker.Longitude__C)/2) + 0.01;
    console.log('detailLong', detailLong);
    const detailLat = ((30.5122 + marker.Latitude__B)/2) - 0.05;
    console.log('detailLat', detailLat);

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>DIRECTION</Text>
            <View>
                    <MapView 
                        style={styles.directionMap}
                        // provider={PROVIDER_GOOGLE}
                        initialRegion={{
                        latitude: detailLat,
                        longitude: detailLong,
                        latitudeDelta: deltaLat,
                        longitudeDelta: deltaLong,
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
                            onReady={result => {
                                // distanceResult = result.distance
                                // durationResult = result.duration
                                console.log(`Distance: ${result.distance} km`)
                                setDistance((result.distance * 0.6214).toFixed(2))
                                console.log(`Duration: ${result.duration} min.`)
                                setDuration((result.duration).toFixed(1))
                                // this.forceUpdate()
                            }}
                        />
                        <View style={styles.info}>
                            <Text style={styles.infoText}>{`DISTANCE: ${distance} miles      TIME: ${duration} min`}</Text>
                        </View>
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
    info: {
        flex: 0,
        width: '100%',
        height: 30,
        backgroundColor: 'rgba(255,255,255,0.65)'
    },
    infoText: {
        flex: 1,
        fontSize: 23,
    },
})


export default Direction;