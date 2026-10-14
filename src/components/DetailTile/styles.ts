import { colors } from "@/styles/colors";
import { shadows } from "@/styles/shadows";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    padding: 24,
    borderRadius: 12,
    backgroundColor: colors.white,
    ...shadows.soft,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  label: {
    color: colors.text.secondary,
    fontFamily: fontFamily.medium,
    fontSize: textSize.caption,
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  value: {
    fontFamily: fontFamily.semibold,
    fontSize: textSize.heading,
    lineHeight: 24,
  },
});
