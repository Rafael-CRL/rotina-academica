import { colors } from "@/styles/colors";
import { shadows } from "@/styles/shadows";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    minHeight: 104,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 24,
    borderRadius: 12,
    backgroundColor: colors.white,
    overflow: "hidden",
    ...shadows.card,
  },
  accent: {
    position: "absolute",
    top: -40,
    right: -40,
    width: 128,
    height: 128,
    borderBottomLeftRadius: 128,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.info,
  },
  label: {
    color: colors.text.secondary,
    fontFamily: fontFamily.medium,
    fontSize: textSize.caption,
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  value: {
    color: colors.text.primary,
    fontFamily: fontFamily.bold,
    fontSize: textSize.title,
    lineHeight: 32,
  },
});
