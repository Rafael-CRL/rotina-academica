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

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  title: {
    color: colors.primary,
    fontFamily: fontFamily.bold,
    fontSize: 20,
  },
});
