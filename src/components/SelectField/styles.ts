import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  field: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
  },
  invalid: { borderColor: colors.red },
  fieldText: {
    flex: 1,
    color: colors.text.primary,
    fontFamily: fontFamily.bold,
    fontSize: 14,
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  optionText: {
    color: colors.text.primary,
    fontFamily: fontFamily.regular,
    fontSize: 16,
  },
  optionSelected: {
    color: colors.primary,
    fontFamily: fontFamily.semibold,
  },
});
