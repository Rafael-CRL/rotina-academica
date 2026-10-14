import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  bordered: {
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  // Botões com a mesma largura nas duas pontas mantêm o título centralizado.
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: textSize.label,
    lineHeight: 28,
  },
  titlePage: {
    color: colors.text.primary,
    fontFamily: fontFamily.semibold,
  },
  titleBrand: {
    color: colors.primary,
    fontFamily: fontFamily.bold,
  },
});
