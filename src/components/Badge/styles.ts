import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 4,
    borderRadius: 999,
  },
  regular: { paddingHorizontal: 12, paddingVertical: 4 },
  compact: { paddingHorizontal: 8, paddingVertical: 2 },

  label: {
    fontFamily: fontFamily.medium,
    fontSize: 12,
    letterSpacing: 0.5,
  },
});
