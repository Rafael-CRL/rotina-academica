import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Cartão de convite com borda tracejada, no fim da lista.
  container: {
    alignItems: "center",
    gap: 12,
    padding: 32,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: colors.border,
    borderRadius: 12,
    backgroundColor: "rgba(243, 243, 254, 0.5)",
  },
  // Botão redondo: largura = altura e `borderRadius` metade do tamanho.
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.info,
  },
  texts: { alignItems: "center" },
  title: {
    color: colors.text.primary,
    fontFamily: fontFamily.semibold,
    fontSize: 18,
  },
  subtitle: {
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
    fontSize: 14,
  },
});
