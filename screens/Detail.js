import React, { useState, useEffect } from "react";
import { 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    ImageBackground, 
    Image, 
    Text, 
    Dimensions,
    Linking 
    } from "react-native";
import { BlurView } from 'expo-blur';
import * as Location from 'expo-location';
import { openURL } from "expo-linking";

function Detail(props) {

    const image = { uri: "https://images.unsplash.com/photo-1592919505780-303950717480?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" };
    const dress = (props.route.params.marker.DressCode__H) ? props.route.params.marker.DressCode__H : "No Dress Code Posted";
    const getTeeTimes = (props.route.params.marker.TeeTimes__G) ? props.route.params.marker.TeeTimes__G : props.route.params.marker.Website__M;
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);

    console.log('location:', 'lat:', location?.coords.latitude, 'lng:', location?.coords.longitude);

    function teeTimes() {
        // console.log('tee times', getTeeTimes);
        openURL(`${getTeeTimes}`);
    };

    return (
        <>
            <ImageBackground source={image} style={styles.backgroundImage}>
                <BlurView intensity={50} style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}>
                    <Image
                    style={styles.courseImage}
                    source={{
                        uri: `${props.route.params.marker.ImageUrl__D}`,
                    }}
                    />
                    <Text style={styles.nameText}>{props.route.params.marker.Name__A}</Text>
                    <View style={styles.description}>
                        <Text style={styles.descriptionText}>{props.route.params.marker.Description__E}</Text>
                        <View style={styles.teeTimes}>
                            <TouchableOpacity>
                                <Text style={styles.teeText} onPress={teeTimes}>Tee Times</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.price}>
                        <Text style={styles.priceText}>{props.route.params.marker.Price__F}</Text>
                    </View>
                    <View style={styles.dress}>
                        <Text style={styles.dressText}>{dress}</Text>
                    </View>
                    <View style={styles.phone}>
                        <TouchableOpacity>
                            <Image  
                                style={styles.phoneImage} 
                                source={{
                                    uri: "https://freesvg.org/img/molumen_phone_icon.png",
                                }}
                            /> 
                            <Text 
                                style={styles.phoneText}
                                onPress={()=>{Linking.openURL(`tel: ${props.route.params.marker.Contact__I}`);}}
                            >
                                {props.route.params.marker.Contact__I}
                            </Text>
                        </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: 120,
        // left: 120,
        backgroundColor: 'rgba(155,155,125,0.75)',
        // transform: [{ scale: 2.5 }],
        textShadowColor: 'black',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
        fontSize: 33,
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
        width: 205,
        position: 'absolute',
        top: 170,
        margin: 5,
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 25,
        padding: 15,
        borderRightWidth: 3,
        borderBottomWidth: 3,
        
    },
    descriptionText: {
        flex: 1,
        color: 'black',
        textShadowColor: 'rgba(0,0,0,0.5)',
        textShadowOffset: {width: 0.75, height: 0.75},
        textShadowRadius: 1.5,
    },
    price: {
        flex: 1,
        position: 'absolute',
        top: 375,
        right: 1,
        width: 175,
        backgroundColor: 'rgba(155,155,125,0.75)',
        borderRadius: 15,
        padding: 5,
        borderWidth: 1,
        borderColor: 'white',
    },
    priceText: {
        flex: 1,
        fontSize: 20,
        textShadowColor: 'white',
        textShadowOffset: {width: 0.75, height: 0.75},
        textShadowRadius: 1.5,
        fontWeight: 'bold',
    },
    dress: {
        flex: 1,
        position: 'absolute',
        top: 495,
        right: 1,
        width: 175,
        backgroundColor: 'rgba(45,105,25,0.5)',
        borderRadius: 20,
        padding: 5,
        borderWidth: 0.5,
    },
    dressText: {
        flex: 1,
        color: 'white',
        alignSelf: 'center',
        textShadowColor: 'black',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 2,
        padding: 2,
    },
    teeTimes: {
        flex: 0,
        width: 150,
        height: 35,
        // position: 'absolute',
        // top: 655,
        // left: 33,
        marginTop: 20,
        marginLeft: 10,
        backgroundColor: 'beige',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 0.5,
        borderRightWidth: 3,
        borderRightColor: 'rgba(0,0,0,0.25)',
        borderBottomWidth: 3,
        borderBottomColor: 'rgba(0,0,0,0.25)',

    },
    teeText: {
        flex: 1,
        fontSize: 25,
    },
    phone: {
        flex:0,
        width: '100%',
        // height: 50,
        position: 'absolute',
        bottom: 85,
        // left: 143,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
    },
    phoneImage: {
        flex: 0,
        height: 50,
        width: 50,
        alignSelf: 'center',
    },
    phoneText: {
        flex: 1,
        fontSize: 23,
        paddingHorizontal: 20,
    },
});

export default Detail;
