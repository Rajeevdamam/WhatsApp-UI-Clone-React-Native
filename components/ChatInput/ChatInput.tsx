import {
	Entypo,
	FontAwesome5,
	Fontisto,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import styles from "./ChatInputStyle";

const ChatInput = () => {
	const [message, setMessage] = useState("");
	const [icon, setIcon] = useState<any>(
		<MaterialCommunityIcons name="microphone" size={25} color={"white"} />
	);

	const handleChange = (inputText: any) => {
		setMessage(inputText);

		if (inputText.length > 0) {
			setIcon(<MaterialCommunityIcons name="send" size={25} color={"white"} />);
		} else {
			setIcon(
				<MaterialCommunityIcons name="microphone" size={25} color={"white"} />
			);
		}
	};

	const onMicrophonePress = () => {};

	const onSendPress = () => {
		setMessage("");
	};

	const onPress = () => {
		if (!message) {
			onMicrophonePress();
		} else {
			onSendPress();
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.mainContainer}>
				<TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
					<FontAwesome5 name="laugh-beam" size={24} color="grey" />
				</TouchableOpacity>
				<TextInput
					style={styles.input}
					placeholder="Type your message..."
					multiline
					value={message}
					onChangeText={handleChange}
				></TextInput>
				<TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
					<Entypo
						style={styles.icon}
						name="attachment"
						size={24}
						color="grey"
					/>
				</TouchableOpacity>
				{!message && (
					<TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
						<Fontisto
							style={styles.icon}
							name="camera"
							size={24}
							color="grey"
						/>
					</TouchableOpacity>
				)}
			</View>

			<TouchableOpacity activeOpacity={0.7} onPress={onPress}>
				<View style={styles.microphoneContainer}>{icon}</View>
			</TouchableOpacity>
		</View>
	);
};

export default ChatInput;
