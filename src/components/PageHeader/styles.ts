import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  // Com conteúdo extra, deixa espaço até a lista logo abaixo.
  withContent: { paddingBottom: 24 },

  title: {
    color: colors.text.primary,
    fontFamily: fontFamily.bold,
    fontSize: textSize.title,
    marginTop: 16,
  },
  subtitle: {
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
    fontSize: textSize.body,
    lineHeight: 20,
    marginTop: 8,
  },
  content: { marginTop: 12 },
});
