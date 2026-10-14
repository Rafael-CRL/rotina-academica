import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

// Estilos da barra de abas: fundo branco, linha no topo e cantos de cima arredondados.
export const styles = StyleSheet.create({
  tabBar: {
    height: 72,
    paddingTop: 8,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  tabLabel: {
    fontFamily: fontFamily.medium,
    fontSize: textSize.caption,
    letterSpacing: 0.5,
  },
});
