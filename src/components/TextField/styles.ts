import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  input: {
    height: 48,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    color: colors.text.primary,
    fontFamily: fontFamily.bold,
    fontSize: 14,
  },
  // Várias linhas: altura mínima maior e o texto começa no topo.
  multiline: {
    height: undefined,
    minHeight: 128,
    paddingTop: 16,
    paddingBottom: 16,
    textAlignVertical: "top",
  },
  invalid: { borderColor: colors.red },
});
