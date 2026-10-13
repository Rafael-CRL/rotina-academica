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

  prof: {
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
    fontSize: 14,
  },
});
