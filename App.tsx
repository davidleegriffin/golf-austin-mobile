import {
	ApolloClient,
	ApolloProvider,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from './screens/LoginScreen';
import HomeScreen from "./screens/HomeScreen";

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
							<Stack.Screen name="Login" component={LoginScreen} />
							<Stack.Screen name="Home" component={HomeScreen} />
						</Stack.Navigator>
					</NavigationContainer>
				</SafeAreaProvider>
			</ApolloProvider>
		);
	}
}
