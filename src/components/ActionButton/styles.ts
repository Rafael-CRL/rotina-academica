import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 8,
  },
  outline: {
    borderWidth: 2,
    borderColor: colors.border,
  },
  label: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
});
