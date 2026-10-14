import { colors } from "@/styles/colors";
import { shadows } from "@/styles/shadows";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // `overflow: hidden` corta o detalhe curvo nos cantos arredondados do cartão.
  container: {
    minHeight: 128,
    justifyContent: "space-between",
    padding: 24,
    borderRadius: 12,
    backgroundColor: colors.white,
    overflow: "hidden",
    ...shadows.card,
  },

  accent: {
    position: "absolute",
    top: -16,
    right: -16,
    width: 96,
    height: 96,
    borderBottomLeftRadius: 96,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  total: {
    fontFamily: fontFamily.bold,
    fontSize: textSize.heading,
  },

  title: {
    color: colors.text.primary,
    fontFamily: fontFamily.semibold,
    fontSize: textSize.dashboard.title,
  },
  subtitle: {
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
    fontSize: textSize.dashboard.subtitle,
  },
});
