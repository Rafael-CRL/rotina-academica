import { colors } from "@/styles/colors";
import { shadows } from "@/styles/shadows";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Caixa do cartão. `overflow: hidden` mantém a faixa lateral dentro dos cantos redondos.
  container: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.background.gray,
    borderRadius: 12,
    padding: 24,
    gap: 16,
    overflow: "hidden",
    ...shadows.card,
  },
  containerDone: { opacity: 0.8 },

  // Faixa colorida de 4 px colada na esquerda; a cor vem do estado.
  stripe: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 4,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  date: {
    color: colors.text.secondary,
    fontFamily: fontFamily.medium,
    fontSize: textSize.caption,
  },

  body: { gap: 4 },
  title: {
    color: colors.text.primary,
    fontFamily: fontFamily.semibold,
    fontSize: textSize.heading,
  },
  titleDone: { textDecorationLine: "line-through" },
  description: {
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
    fontSize: textSize.body,
    lineHeight: 20,
  },

  // Rodapé: linha fina no topo, disciplina à esquerda e ação à direita.
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.background.gray,
  },
  discipline: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flexShrink: 1,
  },
  disciplineName: {
    color: colors.text.secondary,
    fontFamily: fontFamily.medium,
    fontSize: textSize.caption,
  },
  details: {
    color: colors.primary,
    fontFamily: fontFamily.medium,
    fontSize: textSize.caption,
  },
  delivered: {
    color: colors.green,
    fontFamily: fontFamily.medium,
    fontSize: textSize.caption,
  },
});
