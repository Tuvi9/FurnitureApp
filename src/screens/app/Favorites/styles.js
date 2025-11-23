import { StyleSheet } from "react-native";
import { colors } from "@utils/colors";

export const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100
    },
    emptyText: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.black,
        marginBottom: 8
    },
    emptySubtext: {
        fontSize: 14,
        color: colors.grey,
        textAlign: 'center'
    }
});