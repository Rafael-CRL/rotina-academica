import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  // Largura = altura e `borderRadius` metade do tamanho deixam a imagem redonda.
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  title: {
    color: colors.primary,
    fontFamily: fontFamily.bold,
    fontSize: 22,
    lineHeight: 28,
  },

  bell: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  // Ponto de notificação no canto do sino.
  dot: {
    position: "absolute",
    top: 8,
    right: 9,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.red,
  },
});
