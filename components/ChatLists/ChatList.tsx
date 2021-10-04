import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ChatRoom } from "../../types";
import styles from "./ChatListStyle";

export type ChatRoomList = {
	chatRoom: ChatRoom;
};

const ChatList = (props: ChatRoomList) => {
	const { chatRoom } = props;

	const user = chatRoom.users[1];

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
						<Text numberOfLines={1} style={styles.lastMessage}>
							{chatRoom.lastMessage.content}
						</Text>
					</View>
				</View>
				<Text style={styles.messageTime}>
					{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YY")}
				</Text>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ChatList;
