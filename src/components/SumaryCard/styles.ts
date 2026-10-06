import { colors } from "@/Styles/colors"
import { fontFamily } from "@/Styles/fontsFamily"
import { TextSize } from "@/Styles/textSize"
import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingVertical: 24,
        paddingStart: 24,
        paddingEnd: 16,
        borderRadius: 12,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    textRow:{
        fontFamily: fontFamily.semibold,
        fontSize: TextSize.label,
        marginTop: Platform.OS === "android" ? -3 : -1,
    },

    content:{
        paddingTop: 12,
    },

    titleContent:{
            color: colors.text.primary,
            fontFamily: fontFamily.semibold,
            fontSize: TextSize.dashboard.title
    },

    subtitleContent:{   
        color: colors.text.secondary,
        fontFamily: fontFamily.light,
        fontSize: TextSize.dashboard.subtitle
    }
})