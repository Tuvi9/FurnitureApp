import { StyleSheet } from "react-native";
import { colors } from "@utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24,

    },
    agreeRow: {
        flexDirection: "row",
        alignItems: "center"

    },
    agreeText: {
        color: colors.blue,
        marginHorizontal: 14
    },
    agreeTextBold: {
        fontWeight: "700"
    },
    button: {
        marginTop: 23,
        marginBottom: 29
    },
    googleLogin: {
        marginVertical: 4
    },
    footerText: {
        color: colors.blue,
        marginBottom: 56,
        textAlign: "center"
    },
    footerLink: {
        fontWeight: "bold"
    }
})