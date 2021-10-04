import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "flex-end",
		margin: 5,
	},
	input: {
		flex: 1,
		marginHorizontal: 10,
	},
	icon: {
		marginHorizontal: 7,
	},
	mainContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "flex-end",
		backgroundColor: Colors.light.background,
		padding: 10,
		borderRadius: 30,
		marginHorizontal: 5,
	},
	microphoneContainer: {
		backgroundColor: Colors.light.tint,
		padding: 10,
		borderRadius: 50,
		alignItems: "flex-end",
	},
});

export default styles;
