import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Cabeçalho, título e subtítulo: margem lateral do Figma.
  top: {
    paddingHorizontal: 20,
  },
  title: {
    color: colors.text.primary,
    fontFamily: fontFamily.bold,
    fontSize: textSize.title,
    marginTop: 16,
  },
  subtitle: {
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
  },

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
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 24,
  },
  footer: { paddingTop: 8 },
});
