import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	avatar: {
		width: 55,
		height: 55,
		borderRadius: 50,
		marginRight: 15,
	},
	container: {
		flexDirection: "row",
		padding: 10,
		width: "100%",
		justifyContent: "space-between",
	},
	mainContainer: { flexDirection: "row", flex: 1 },
	midContainer: {
		justifyContent: "space-around",
	},
	userName: {
		fontWeight: "bold",
		fontSize: 18,
	},
	status: {
		color: "grey",
	},
});

export default styles;
