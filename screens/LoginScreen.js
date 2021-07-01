import React, { useState } from "react";
import { StyleSheet, View, Button, ImageBackground, Image } from "react-native";
import * as Google from "expo-google-app-auth";
import { isWithinInterval } from "date-fns";


const LoginScreen = ({ navigation }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState();
    const signInAsync = async () => {
        // console.log("LoginScreen.js 6 | loggin in");
        try {
        const { type, accessToken, user } = await Google.logInAsync({
            iosClientId: `747145895419-t2kvroidqb8r2fcf0e8uf7no74khr4m9.apps.googleusercontent.com`,
            androidClientId: `747145895419-t4vq6rbo2tkang7vabvf5dqgtlqhrv2s.apps.googleusercontent.com`,
        });

        if (type === "success") {
            // Then you can use the Google REST API
            setUser(user);
            setAccessToken(accessToken);
            console.log("LoginScreen.js 17 | success, navigating to profile");
            navigation.navigate("Home", { user });

        }
        } catch (error) {
        console.log("LoginScreen.js 19 | error with login", error);
        }
    };

    const signOutAsync = async () => {
        const config = {
            iosClientId: `747145895419-t2kvroidqb8r2fcf0e8uf7no74khr4m9.apps.googleusercontent.com`,
            androidClientId: `747145895419-t4vq6rbo2tkang7vabvf5dqgtlqhrv2s.apps.googleusercontent.com`,
        };

        await Google.logOutAsync({ accessToken, ...config });
        setUser();
        setAccessToken();
        console.log("you have successfully logged out");
    };

    const goBack = () => {
        navigation.navigate("Home", { user });
    }

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
                    {!user && <Button  style={styles.button} title="Login with Google" onPress={signInAsync} />}
                    {user && <Button style={styles.button}  title="Log-Out" onPress={signOutAsync} />}
                    {user && <Button style={styles.button}  title="Back" onPress={goBack} />}
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
    button: {
        backgroundColor: 'white',
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
