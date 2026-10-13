import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    flex: 1,
  },
  label: {
    fontSize: textSize.label,
    fontFamily: fontFamily.semibold,
    color: colors.primary,
  },

  title: {
    fontSize: textSize.title,
    fontFamily: fontFamily.semibold,
    color: colors.text.primary,
  },

  subtitle: {
    fontSize: textSize.subtitle,
    fontFamily: fontFamily.regular,
    color: colors.secondary,
  },

  cardContent: {
    flexDirection: "row",
    gap: 16,
    paddingTop: 24,
  },

  card: {
    flex: 1,
  },

  content: {
    paddingTop: Platform.OS === "android" ? 54 : 64,
    paddingHorizontal: 24,
  },

  titleContent: {
    paddingTop: 28,
    marginBottom: 32,
  },
});
