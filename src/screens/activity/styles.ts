import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Filtros: a margem lateral fica no conteúdo para a rolagem horizontal chegar à borda.
  filters: {
    flexGrow: 0,
    flexShrink: 0,
    marginVertical: 24,
  },
  filtersContent: {
    gap: 12,
    paddingHorizontal: 20,
  },

  list: {
    gap: 16,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  empty: {
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
    fontSize: textSize.body,
    textAlign: "center",
    paddingVertical: 24,
  },
  footer: { paddingTop: 8 },
});
