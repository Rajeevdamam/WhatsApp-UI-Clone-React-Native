import React from "react";
import { View, Text } from "react-native";
import { Message } from "../../types";
import moment from "moment";
import styles from "./ChatMessageStyles";

export type ChatMessageProps = {
	message: Message;
};

const ChatMessage = (props: ChatMessageProps) => {
	const { message } = props;

	const isMyMessage = () => {
		return message.user.id === "u1";
	};

	return (
		<View
			style={[
				styles.container,
				{
					alignItems: isMyMessage() ? "flex-end" : "flex-start",
					marginRight: isMyMessage() ? 0 : 70,
					marginLeft: isMyMessage() ? 70 : 0,
				},
			]}
		>
			<View
				style={[
					styles.messageBox,
					{
						backgroundColor: isMyMessage() ? "#DCF8C5" : "white",
					},
				]}
			>
				{!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
				<Text style={styles.message}>{message.content}</Text>
				<View style={styles.messageTime}>
					<Text style={{ color: "grey" }}>
						{moment(message.createdAt).format("hh:mm")}
					</Text>
				</View>
			</View>
		</View>
	);
};

export default ChatMessage;
