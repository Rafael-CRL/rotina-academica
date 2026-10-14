import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 24,
    borderLeftWidth: 4,
  },

  stripePending: { borderLeftColor: colors.primary },
  stripeDone: { borderLeftColor: colors.green },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
  },

  titleBox: {
    flex: 1,
    gap: 4,
  },

  name: {
    color: colors.text.primary,
    fontFamily: fontFamily.semibold,
    fontSize: 14,
  },

  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
  },

  badgePending: { backgroundColor: colors.background.red },
  badgeDone: { backgroundColor: colors.background.green },

  badgeText: { fontFamily: fontFamily.semibold, fontSize: 12 },

  badgeTextPending: { color: colors.red },
  badgeTextDone: { color: colors.green },

  // Ícone de pessoa e nome do professor lado a lado.
  profRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  prof: {
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
    fontSize: 14,
  },

  // Linha fina que separa o topo do cartão das informações.
  divider: {
    height: 1,
    backgroundColor: colors.background.gray,
    marginVertical: 16,
  },

  // Horário e sala lado a lado; `flexWrap` joga um para a linha de baixo se faltar espaço.
  infoRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },

  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  // Círculo claro atrás do ícone: largura = altura e `borderRadius` metade do tamanho.
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.background.blue,
    alignItems: "center",
    justifyContent: "center",
  },

  infoLabel: {
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
    fontSize: 12,
  },
  infoValue: {
    color: colors.text.primary,
    fontFamily: fontFamily.semibold,
    fontSize: 14,
  },
});
