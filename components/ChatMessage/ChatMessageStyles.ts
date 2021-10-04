import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	messageBox: {
		padding: 10,
		borderRadius: 10,
	},
	messageTime: {
		alignItems: "flex-end",
	},
	name: {
		color: Colors.light.tint,
		fontWeight: "bold",
		marginVertical: 5,
	},
	message: {},
});

export default styles;
