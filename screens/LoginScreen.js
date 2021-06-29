import React from "react";
import { StyleSheet, View, Button, ImageBackground, Image } from "react-native";
import * as Google from "expo-google-app-auth";

const LoginScreen = ({ navigation }) => {
const signInAsync = async () => {
    // console.log("LoginScreen.js 6 | loggin in");
    try {
    const { type, user } = await Google.logInAsync({
        iosClientId: `747145895419-t2kvroidqb8r2fcf0e8uf7no74khr4m9.apps.googleusercontent.com`,
        androidClientId: `747145895419-t4vq6rbo2tkang7vabvf5dqgtlqhrv2s.apps.googleusercontent.com`,
    });

    if (type === "success") {
        // Then you can use the Google REST API
        console.log("LoginScreen.js 17 | success, navigating to profile");
        navigation.navigate("Home", { user });

    }
    } catch (error) {
    console.log("LoginScreen.js 19 | error with login", error);
    }
};

const image = { uri: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' };

    return (
        <>
            <ImageBackground source={image} style={styles.image} blurRadius={0.3}>
                <View style={styles.buttonContainer}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/120px-Google_%22G%22_Logo.svg.png',
                        }}
                    />
                    <Button  title="Login with Google" onPress={signInAsync}>
                    </Button>
                </View>
            </ImageBackground>
        </>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 60,
        backgroundColor: 'rgba(100,200,100,0.2)',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',

      },
      tinyLogo: {
        width: 50,
        height: 50,
        marginBottom: 20,
      },
});
