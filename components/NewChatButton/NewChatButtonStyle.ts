import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.light.tint,
		borderRadius: 50,
		width: 70,
		height: 70,
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		right: 20,
		bottom: 20,
	},
});

export default styles;
