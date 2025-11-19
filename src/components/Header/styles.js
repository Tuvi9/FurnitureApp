import { StyleSheet } from "react-native";
import { colors } from "@utils/colors";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },
    topRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 16
    },
    title: {
        color: colors.black,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        flex: 1
    },
    icon: {
        width: 24,
        height: 24,
    },
    space: {
        width: 24,
    },
});
