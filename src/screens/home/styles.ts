import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    gap: 16,
    paddingHorizontal: 20,
    paddingBottom: 32,
  },
  main: { gap: 32 },

  greeting: { gap: 4 },
  title: {
    color: colors.text.primary,
    fontFamily: fontFamily.bold,
    fontSize: textSize.title,
    lineHeight: 36,
  },
  subtitle: {
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
    fontSize: textSize.subtitle,
  },

  // Cartões de resumo: um de largura total e dois lado a lado.
  summary: { gap: 16 },
  summaryRow: {
    flexDirection: "row",
    gap: 16,
  },
  summaryItem: { flex: 1 },

  section: { gap: 12 },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: {
    color: colors.text.primary,
    fontFamily: fontFamily.semibold,
    fontSize: 18,
  },
  link: {
    color: colors.primary,
    fontFamily: fontFamily.medium,
    fontSize: 12,
    letterSpacing: 0.5,
  },
  list: { gap: 12 },
  disciplineList: { gap: 16 },
  empty: {
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
    fontSize: 14,
  },
});
