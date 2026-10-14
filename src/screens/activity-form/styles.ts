import { colors } from "@/styles/colors";
import { shadows } from "@/styles/shadows";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { withOpacity } from "@/utils/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    gap: 32,
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 48,
  },
  title: {
    color: colors.text.primary,
    fontFamily: fontFamily.bold,
    fontSize: textSize.title,
    lineHeight: 36,
  },

  // Cartão branco que reúne os campos.
  form: {
    gap: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: withOpacity(colors.divider, 0.3),
    borderRadius: 16,
    backgroundColor: colors.white,
    ...shadows.soft,
  },

  // Linha fina acima do botão de salvar.
  footer: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  save: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 8,
    backgroundColor: colors.info,
  },
  saveText: {
    color: colors.white,
    fontFamily: fontFamily.semibold,
    fontSize: 18,
  },
});
