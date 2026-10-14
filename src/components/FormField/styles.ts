import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { gap: 8 },
  label: {
    color: colors.text.primary,
    fontFamily: fontFamily.bold,
    fontSize: 12,
    letterSpacing: 0.5,
  },
  hint: {
    color: colors.text.secondary,
    fontFamily: fontFamily.bold,
  },
  error: {
    color: colors.red,
    fontFamily: fontFamily.medium,
    fontSize: 12,
  },
});
