import {
	ApolloClient,
	ApolloProvider,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client";
import { BlurView } from 'expo-blur';
import React from "react";
// import { StyleSheet, View, Button, ImageBackground, Image } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from './screens/LoginScreen';
import HomeScreen from "./screens/HomeScreen";
import Detail from "./screens/Detail";
import Direction from "./screens/Direction";
import TeeTimeCalendar from "./screens/TeeTimeCalendar";

const Stack = createStackNavigator();

const client = new ApolloClient({
	link: createHttpLink({
		credentials: "same-origin",
		headers: {
			Authorization: `Apikey headyflamingomouth::stepzen.net+1000::d603591e9b22ec93bbf3f204f018c484d285b3e4a26cb956a442d3a249d45414`,
		},
		uri: "https://HeadyFlamingoMouth.stepzen.net/api/warped-chimp/__graphql",
	}),
	cache: new InMemoryCache(),
});

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<ApolloProvider client={client}>
				<SafeAreaProvider>
					<NavigationContainer>
						<Stack.Navigator initialRouteName="Login">
							<Stack.Screen 
								name=" " 
								component={LoginScreen}
								options={{
									headerTransparent: true,
									headerTitle: "Login/Logout",
									headerBackground: () => (
										<BlurView tint="light" intensity={100} />
										),
								}}
							/>
							<Stack.Screen 
								name="Home" 
								component={HomeScreen} 
								options={{
									title: "Golf-Austin",
									headerTransparent: true,
									headerTitleAlign: "center",

									}}
							/>
							<Stack.Screen 
								name="Detail" 
								component={Detail} 
								options={{
									title: "Course Details",
									headerTransparent: true,
									headerTitleAlign: "center",
									}}
							/>
							<Stack.Screen 
								name="Direction" 
								component={Direction} 
								options={{
									title: "Course Directions",
									headerTransparent: true,
									headerTitleAlign: "center",
									}}
							/>
							<Stack.Screen 
								name="TeeTimeCalendar" 
								component={TeeTimeCalendar} 
								options={{
									title: "Tee Times Calendar",
									headerTransparent: true,
									headerTitleAlign: "center",
									}}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</SafeAreaProvider>
			</ApolloProvider>
		);
	}
}
