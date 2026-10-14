import { colors } from "@/styles/colors";
import { shadows } from "@/styles/shadows";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 16,
    paddingVertical: 24,
    paddingLeft: 24,
    paddingRight: 24,
    borderLeftWidth: 4,
    borderRadius: 12,
    backgroundColor: colors.white,
    ...shadows.soft,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  name: {
    flex: 1,
    color: colors.text.primary,
    fontFamily: fontFamily.semibold,
    fontSize: textSize.heading,
  },
  rows: { gap: 8 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  rowText: {
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
    fontSize: textSize.body,
  },
});
