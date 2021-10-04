import * as React from "react";
import { FlatList, StyleSheet } from "react-native";
import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import ChatListContact from "../components/ChatListsContacts/ChatListContact";
import Users from "../data/Users";

const chatListRender = (itemData: any) => {
	return <ChatListContact user={itemData.item} />;
};

export default function ChatsScreen({
	navigation,
}: RootTabScreenProps<"Chats">) {
	return (
		<View style={styles.container}>
			<FlatList
				style={{ width: "100%" }}
				data={Users}
				renderItem={chatListRender}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
});
