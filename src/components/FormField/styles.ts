import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { gap: 8 },
  label: {
    color: colors.text.primary,
    fontFamily: fontFamily.bold,
    fontSize: textSize.caption,
    letterSpacing: 0.5,
  },
  hint: {
    color: colors.text.secondary,
    fontFamily: fontFamily.bold,
  },
  error: {
    color: colors.red,
    fontFamily: fontFamily.medium,
    fontSize: textSize.caption,
  },
});
