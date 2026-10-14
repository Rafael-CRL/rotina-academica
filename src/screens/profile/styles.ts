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
    paddingBottom: 32,
  },

  // Foto, nome, curso, semestre e botão, centralizados.
  profile: {
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 32,
  },
  avatarWrapper: { marginBottom: 24 },
  avatar: {
    width: 144,
    height: 144,
    borderRadius: 72,
    borderWidth: 4,
    borderColor: colors.white,
    ...shadows.avatar,
  },
  cameraButton: {
    position: "absolute",
    right: 4,
    bottom: 4,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    ...shadows.floating,
  },
  name: {
    color: colors.text.primary,
    fontFamily: fontFamily.bold,
    fontSize: textSize.title,
    lineHeight: 36,
    letterSpacing: -0.7,
    textAlign: "center",
  },
  course: {
    color: colors.text.secondary,
    fontFamily: fontFamily.regular,
    fontSize: textSize.subtitle,
    marginTop: 4,
  },
  semester: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
    paddingHorizontal: 17,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: withOpacity(colors.border, 0.3),
    borderRadius: 999,
    backgroundColor: colors.background.blue,
  },
  semesterText: {
    color: colors.text.primary,
    fontFamily: fontFamily.semibold,
    fontSize: 12,
    letterSpacing: 0.5,
  },
  settings: {
    width: "100%",
    maxWidth: 260,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 32,
    borderRadius: 8,
    backgroundColor: colors.primary,
    ...shadows.primary,
  },
  settingsText: {
    color: colors.white,
    fontFamily: fontFamily.regular,
    fontSize: 16,
  },

  stats: { gap: 12 },
  statsRow: {
    flexDirection: "row",
    gap: 12,
  },
});
