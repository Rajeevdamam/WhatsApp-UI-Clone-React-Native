import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ChatRoom, User } from "../../types";
import styles from "./ChatListContactStyle";

export type UserList = {
	user: User;
};

const ChatListContact = (props: UserList) => {
	const { user } = props;

	const navigation = useNavigation();

	const openChatWindowHandler = () => {
		navigation.navigate("ChatWindow", {
			userId: user.id,
			userName: user.name,
			userImage: user.imageUri,
		});
	};

	return (
		<TouchableWithoutFeedback onPress={openChatWindowHandler}>
			<View style={styles.container}>
				<View style={styles.mainContainer}>
					<Image source={{ uri: user.imageUri }} style={styles.avatar} />
					<View style={styles.midContainer}>
						<Text style={styles.userName}>{user.name}</Text>
						<Text numberOfLines={1} style={styles.status}>
							{user.status || "Hey There I'm using WhatsApp"}
						</Text>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ChatListContact;
