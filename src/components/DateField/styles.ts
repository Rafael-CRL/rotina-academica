import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  field: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
  },
  invalid: { borderColor: colors.red },
  fieldText: {
    color: colors.text.primary,
    fontFamily: fontFamily.bold,
    fontSize: 14,
  },
  placeholder: { color: colors.text.secondary + "80" },

  confirm: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: colors.info,
  },
  confirmText: {
    color: colors.white,
    fontFamily: fontFamily.semibold,
    fontSize: 16,
  },
});
