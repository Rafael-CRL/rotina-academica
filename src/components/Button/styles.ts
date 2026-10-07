import { StyleSheet } from "react-native";

import { colors } from "@/Styles/colors";
import { TextSize } from "@/Styles/textSize";
import { fontFamily } from "@/Styles/fontsFamily";

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 54,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
    },

    text: {
        color: colors.white,
        fontSize: TextSize.button,
        fontFamily: fontFamily.semibold
    },
});