import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Tela inteira. O `paddingTop` (área da barra de status) é somado na própria tela.
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },

  // Cabeçalho, título e busca: margem lateral do Figma e espaço até a lista.
  top: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },

  title: {
    color: colors.text.primary,
    fontFamily: fontFamily.semibold,
    fontSize: textSize.title,
    marginTop: 16,
    marginBottom: 12,
  },

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
    fontSize: 14,
  },

  // Área interna da lista: espaço entre os cartões e margens.
  list: {
    gap: 16,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
});
