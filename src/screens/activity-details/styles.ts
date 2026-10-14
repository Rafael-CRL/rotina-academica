import { colors } from "@/styles/colors";
import { shadows } from "@/styles/shadows";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { withOpacity } from "@/utils/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    gap: 16,
    paddingHorizontal: 20,
    paddingTop: 16,
    // Espaço extra para o fim do texto não ficar atrás dos botões fixos.
    paddingBottom: 200,
  },

  badges: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  title: {
    color: colors.text.primary,
    fontFamily: fontFamily.bold,
    fontSize: textSize.title,
    lineHeight: 35,
  },

  tiles: {
    flexDirection: "row",
    gap: 12,
    paddingTop: 8,
  },

  // Cartão azul de dica.
  tip: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 16,
    padding: 24,
    borderRadius: 12,
    backgroundColor: colors.info,
  },
  tipTexts: { flex: 1, gap: 4 },
  tipTitle: {
    color: colors.onInfo,
    fontFamily: fontFamily.semibold,
    fontSize: textSize.heading,
  },
  tipText: {
    color: colors.onInfo,
    opacity: 0.9,
    fontFamily: fontFamily.regular,
    fontSize: textSize.body,
    lineHeight: 20,
  },

  description: {
    gap: 16,
    padding: 24,
    borderRadius: 12,
    backgroundColor: colors.white,
    ...shadows.soft,
  },
  descriptionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingBottom: 13,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  descriptionTitle: {
    color: colors.text.primary,
    fontFamily: fontFamily.semibold,
    fontSize: textSize.heading,
  },
  paragraph: {
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
    fontSize: textSize.bodyLarge,
    lineHeight: 24,
  },

  // Botões fixos no pé da tela.
  actions: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    gap: 12,
    paddingTop: 16,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
    backgroundColor: withOpacity(colors.white, 0.95),
  },

  notFound: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  notFoundText: {
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
    fontSize: textSize.bodyLarge,
    textAlign: "center",
  },
});
