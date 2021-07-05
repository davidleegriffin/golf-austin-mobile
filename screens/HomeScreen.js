import React, {useState} from "react";
import { 
    StyleSheet,
    Text, 
    View, 
    ImageBackground, 
    Image, 
    TouchableOpacity,
    TouchableHighlight
    } from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { useQuery } from "@apollo/client";
import { GET_GOLF } from "../queries/getGolf.js";

const HomeScreen = ({ route, navigation }) => {
const { user } = route.params;
const [courses, setCourses] = useState();

const {
    data,
    loading,
    error
} = useQuery(GET_GOLF);

const golfCourses = data?.golf;
// console.log('golfCourses', golfCourses);

if (loading) return <Text>Almost there...</Text>
if (error) return <Text>{error?.message}</Text>

const backgroundImage = { uri: 'https://images.unsplash.com/photo-1595841055318-943e15fbbe80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTgzfHxnb2xmfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60' };

function selectCourse(marker) {
    // console.log("the button has been pressed", marker);
    navigation.navigate("Detail", { marker });
};


let locations = [];
golfCourses.map(ele => {
    // console.log('ele', ele);
    locations.push(ele);
});




let publicCourses = [];
golfCourses.map(publicCourse => {
    if (publicCourse.Type__K === "public") {
        publicCourses.push(publicCourse);
    }
});

let privateCourses = [];
golfCourses.map(green => {
    if (green.Type__K === "private") {
        privateCourses.push(green);
    }
});

let nineCourses = [];
golfCourses.map(hole => {
    if (hole.Holes__L === 9) {
        nineCourses.push(hole);
    }
});

function allCourses() {
    setCourses(locations);
};

function getPublicCourses() {
    setCourses(publicCourses);
};

function getPrivateCourses() {
    setCourses(privateCourses);
};

function nines() {
    setCourses(nineCourses);
};

if (courses === undefined) {
    setCourses(locations);
};

// console.log('courses_____________', courses);

    return (
        <>
            <ImageBackground source={backgroundImage} style={styles.image}>
                    <View style={styles.container}>
                        <TouchableOpacity>
                            <View>
                                <Image
                                    style={styles.profilePic}
                                    source={{
                                        uri: `${user.photoUrl}`,
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.banner}>Welcome {user.name}</Text>
                        <View style={styles.courseButtons}>
                            <TouchableOpacity style={styles.buttons} onPress={allCourses} title="All">
                                <Text style={styles.buttonsText}>All</Text>
                                <Image
                                style={styles.golfBall}
                                source={{
                                    uri: "https://media.istockphoto.com/vectors/vector-realistic-3d-white-classic-golf-ball-icon-closeup-isolated-on-vector-id1013903842?b=1&k=6&m=1013903842&s=612x612&w=0&h=VUOOTH_DvWezhnDrUk--SadDmeLlrtay-YlQfWBT5U4=",
                                }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons} onPress={getPublicCourses} title="Public">
                                <Text style={styles.buttonsText}>Public</Text>
                                <Image
                                    style={styles.golfBall}
                                    source={{
                                        uri: "https://media.istockphoto.com/vectors/vector-realistic-3d-white-classic-golf-ball-icon-closeup-isolated-on-vector-id1013903842?b=1&k=6&m=1013903842&s=612x612&w=0&h=VUOOTH_DvWezhnDrUk--SadDmeLlrtay-YlQfWBT5U4=",
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons} onPress={getPrivateCourses} title="Private">
                                <Text style={styles.buttonsText}>Private</Text>
                                <Image
                                style={styles.golfBall}
                                source={{
                                    uri: "https://media.istockphoto.com/vectors/vector-realistic-3d-white-classic-golf-ball-icon-closeup-isolated-on-vector-id1013903842?b=1&k=6&m=1013903842&s=612x612&w=0&h=VUOOTH_DvWezhnDrUk--SadDmeLlrtay-YlQfWBT5U4=",
                                }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttons} onPress={nines} title="9-holes">
                                <Text style={styles.buttonsText}>9-Hole</Text>
                                <Image
                                style={styles.golfBall}
                                source={{
                                    uri: "https://media.istockphoto.com/vectors/vector-realistic-3d-white-classic-golf-ball-icon-closeup-isolated-on-vector-id1013903842?b=1&k=6&m=1013903842&s=612x612&w=0&h=VUOOTH_DvWezhnDrUk--SadDmeLlrtay-YlQfWBT5U4=",
                                }}
                                />
                            </TouchableOpacity>
                        </View>
                        <MapView
                            style={styles.map}
                            // provider={PROVIDER_GOOGLE}
                            initialRegion={{
                                latitude: 30.2972,
                                longitude: -97.8031,
                                latitudeDelta: 0.423922,
                                longitudeDelta: 0.3121,
                            }}
                            >
                            {courses?.map((marker, index) => (
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
                    </View>
            </ImageBackground>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        height: '100%',
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'center',
    },
    profilePic: {
        flex: 0,
        width: 90,
        height: 90,
        marginTop: 80,
        borderRadius: 250,
    },
    banner: {
        flex: 1,
        fontSize: 38
    },
    map: {
        position: 'absolute',
        top: 295,
        width: 380,
        height: 480,
        borderRadius: 25,
        borderWidth: 0.75,
    },
    marker: {
        flex: 1,
        width: 75, //Dimensions.get('window').width,
        height: 75, //Dimensions.get('window').height,
    },
    tooltip: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 225,
        height: 50,
        backgroundColor: 'rgba(0,55,0,0.5)',
        margin: -100,
        borderRadius: 15,
    },
    toolText: {
        borderWidth: 0.5,
        fontWeight: 'bold',
        backgroundColor: 'beige',
        padding: 10,
    },
    courseButtons: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 400,
        height: 50,
        position: 'absolute',
        top: 225,
        // left: 5,
    },
    buttons: {
        flex: 0,
        backgroundColor: 'white',
        height: 55,
        width: 55,
        borderRadius: 250,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsText: {
        fontWeight: 'bold',
        position: 'absolute',
    },
    golfBall: {
        flex: 0,
        width: 100,
        height: 100,
        borderRadius: 250,
        zIndex: -100,
    },
});
