import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, FlatList, ImageBackground } from "react-native";
import ChatMessage from "../components/ChatMessage/ChatMessage";
import Chats from "../data/Chats";
import BG from "../assets/images/BG.png";
import ChatInput from "../components/ChatInput/ChatInput";

const ChatWindow = () => {
	const route = useRoute();

	return (
		<ImageBackground style={{ width: "100%", height: "100%" }} source={BG}>
			<FlatList
				data={Chats.messages}
				renderItem={({ item }) => <ChatMessage message={item} />}
				inverted
			/>
			<ChatInput />
		</ImageBackground>
	);
};

export default ChatWindow;

const styles = StyleSheet.create({});
