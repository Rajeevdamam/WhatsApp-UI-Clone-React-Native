import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./NewChatButtonStyle";
import { useNavigation } from "@react-navigation/native";

const NewChatButton = () => {
	const navigation = useNavigation();

	const onPress = () => {
		navigation.navigate("Contacts");
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress}>
				<MaterialCommunityIcons
					name="message-reply-text"
					size={25}
					color={"white"}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default NewChatButton;
