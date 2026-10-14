import { colors } from "@/styles/colors";
import { shadows } from "@/styles/shadows";
import { fontFamily } from "@/styles/fontFamily";
import { withOpacity } from "@/utils/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    padding: 24,
    borderWidth: 1,
    borderColor: withOpacity(colors.border, 0.3),
    borderRadius: 12,
    backgroundColor: colors.white,
    ...shadows.soft,
  },
  info: {
    flex: 1,
    gap: 4,
  },
  title: {
    color: colors.text.primary,
    fontFamily: fontFamily.bold,
    fontSize: 16,
  },
  discipline: {
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
    fontSize: 14,
  },
  date: {
    color: colors.text.secondary,
    fontFamily: fontFamily.medium,
    fontSize: 12,
    letterSpacing: 0.5,
  },
  dateUrgent: {
    color: colors.orange,
    fontFamily: fontFamily.semibold,
  },
});
