import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Pílula do filtro; o estado (selecionada ou não) troca fundo, borda e texto.
  container: {
    paddingHorizontal: 20,
    paddingVertical: 11,
    borderRadius: 999,
    borderWidth: 1,
  },
  containerSelected: {
    backgroundColor: colors.info,
    borderColor: colors.info,
  },
  containerIdle: {
    backgroundColor: "transparent",
    borderColor: colors.border,
  },

  label: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    letterSpacing: 0.5,
  },
  labelSelected: { color: colors.white },
  labelIdle: { color: colors.text.secondary },
});
