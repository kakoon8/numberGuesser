import React from "react";
import {StyleSheet, Button, View, TouchableOpacity, Text} from "react-native";
import Colors from "../constants/colors";
const MainButton = (props) => {
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
			<View style={styles.button}>
				<Text style={styles.ButtonText}>{props.children}</Text>
			</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.primary,
		paddingVertical: 12,
		paddingHorizontal: 30,
		borderRadius: 25,
		marginVertical: 12,
	},
	ButtonText: {
		color: "white",
		fontFamily: "open-sans",
		fontSize: 18,
	},
});
export default MainButton;
