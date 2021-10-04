import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import ChatList from "../components/ChatLists/ChatList";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import chatRooms from "../data/ChatRooms";
import NewChatButton from "../components/NewChatButton/NewChatButton";

const chatListRender = (itemData: any) => {
	return <ChatList chatRoom={itemData.item} />;
};

export default function ChatsScreen({
	navigation,
}: RootTabScreenProps<"Chats">) {
	return (
		<View style={styles.container}>
			<FlatList
				style={{ width: "100%" }}
				data={chatRooms}
				renderItem={chatListRender}
				keyExtractor={(item) => item.id}
			/>
			<NewChatButton />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
});
