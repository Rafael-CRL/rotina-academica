import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Busca: caixa do ícone e campo de texto lado a lado, com 48 de altura.
  search: {
    flexDirection: "row",
    height: 48,
  },
  searchIcon: {
    width: 48,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background.blue,
    borderWidth: 1,
    borderColor: colors.border,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: colors.secondary,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    color: colors.text.primary,
    fontFamily: fontFamily.regular,
    fontSize: textSize.body,
  },

  // Área interna da lista: espaço entre os cartões e margens.
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
});
