import { colors } from "@/styles/colors";
import { shadows } from "@/styles/shadows";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 160,
    justifyContent: "space-between",
    padding: 24,
    borderRadius: 12,
    backgroundColor: colors.white,
    overflow: "hidden",
    ...shadows.card,
  },
  accent: {
    position: "absolute",
    top: -24,
    right: -24,
    width: 96,
    height: 96,
    borderBottomLeftRadius: 96,
  },
  iconPill: {
    width: 40,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  content: { gap: 4 },
  value: {
    fontFamily: fontFamily.bold,
    fontSize: 28,
    lineHeight: 32,
  },
  label: {
    color: colors.text.secondary,
    fontFamily: fontFamily.medium,
    fontSize: 12,
    letterSpacing: 0.5,
  },
});
