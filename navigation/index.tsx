/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
	FontAwesome,
	FontAwesome5,
	Fontisto,
	MaterialCommunityIcons,
	MaterialIcons,
	Octicons,
} from "@expo/vector-icons";
import {
	NavigationContainer,
	DefaultTheme,
	DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
	ColorSchemeName,
	Pressable,
	TouchableHighlight,
	View,
} from "react-native";
import { Avatar, Icon } from "react-native-elements";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
	RootStackParamList,
	RootTabParamList,
	RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { Dimensions, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { color } from "react-native-reanimated";
import ChatsScreen from "../screens/ChatsScreen";
import ChatWindow from "./../screens/ChatWindow";
import { TouchableOpacity } from "react-native";
import Contacts from "../screens/Contacts";

export default function Navigation({
	colorScheme,
}: {
	colorScheme: ColorSchemeName;
}) {
	return (
		<NavigationContainer
			linking={LinkingConfiguration}
			theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
		>
			<RootNavigator />
		</NavigationContainer>
	);
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.light.tint,
				},
				headerShadowVisible: false,
				// for header tint and background are reversed
				headerTintColor: Colors.light.background,
				headerTitleAlign: "left",
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}
		>
			<Stack.Screen
				name="Root"
				component={MainTabNavigator}
				options={{
					title: "WhatsApp",
					headerRight: () => (
						<View
							style={{
								flexDirection: "row",
								width: Dimensions.get("window").width / 5,
								justifyContent: "space-between",
							}}
						>
							<Octicons
								name="search"
								size={22}
								color={Colors.light.background}
							/>
							<MaterialCommunityIcons
								name="dots-vertical"
								size={22}
								color={Colors.light.background}
							/>
						</View>
					),
				}}
			/>
			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: "Oops!" }}
			/>
			<Stack.Screen
				name="Contacts"
				component={Contacts}
				options={{
					headerRight: () => (
						<View
							style={{
								flexDirection: "row",
								width: Dimensions.get("window").width / 5,
								justifyContent: "space-between",
							}}
						>
							<Octicons
								name="search"
								size={22}
								color={Colors.light.background}
							/>
							<MaterialCommunityIcons
								name="dots-vertical"
								size={22}
								color={Colors.light.background}
							/>
						</View>
					),
				}}
			/>

			<Stack.Screen
				name="ChatWindow"
				component={ChatWindow}
				options={({ route, navigation }) => ({
					headerBackButtonMenuEnabled: true,
					title: route.params?.userName,
					headerRight: () => (
						<View
							style={{
								flexDirection: "row",
								width: Dimensions.get("window").width / 3.5,
								justifyContent: "space-between",
							}}
						>
							<MaterialIcons
								name="call"
								size={22}
								color={Colors.light.background}
							/>
							<FontAwesome5
								name="video"
								size={22}
								color={Colors.light.background}
							/>
							<MaterialCommunityIcons
								name="dots-vertical"
								size={22}
								color={Colors.light.background}
							/>
						</View>
					),
					headerTitleStyle: {
						fontWeight: "500",
						fontSize: 18,
					},
					headerLeft: () => (
						<TouchableHighlight
							activeOpacity={0.5}
							style={{ borderRadius: 20, paddingVertical: 2 }}
							underlayColor="rgba(192,192,192,0.3)"
							onPress={() => navigation.goBack(null)}
						>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-around",
									marginRight: 10,
									width: Dimensions.get("window").width / 6,
								}}
							>
								<FontAwesome5
									name="arrow-left"
									size={20}
									color={Colors.light.background}
								/>
								<Avatar
									rounded
									size={35}
									source={{ uri: route.params?.userImage }}
								/>
							</View>
						</TouchableHighlight>
					),
				})}
			/>
			{/* <Stack.Group screenOptions={{ presentation: "modal" }}>
				<Stack.Screen name="Modal" component={ModalScreen} />
			</Stack.Group> */}
		</Stack.Navigator>
	);
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 *
 *
 */

const TopTab = createMaterialTopTabNavigator<RootTabParamList>();

function MainTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		<TopTab.Navigator
			initialRouteName="Chats"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].background,
				tabBarStyle: {
					backgroundColor: Colors[colorScheme].tint,
				},
				tabBarIndicatorStyle: {
					backgroundColor: Colors[colorScheme].background,
					height: 4,
					borderRadius: 1,
				},
				tabBarLabelStyle: {
					fontWeight: "bold",
				},
				tabBarShowIcon: true,
			}}
		>
			<TopTab.Screen
				name="Camera"
				component={TabTwoScreen}
				options={{
					tabBarIcon: () => (
						<Fontisto
							name="camera"
							color={Colors[colorScheme].background}
							size={20}
						/>
					),
					tabBarLabel: () => null,
				}}
			/>
			<TopTab.Screen name="Chats" component={ChatsScreen} />
			<TopTab.Screen name="Status" component={TabTwoScreen} />
			<TopTab.Screen name="Calls" component={TabTwoScreen} />
		</TopTab.Navigator>
	);
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
