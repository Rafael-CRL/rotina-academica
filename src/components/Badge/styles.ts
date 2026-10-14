import { fontFamily } from "@/styles/fontFamily";
import { textSize } from "@/styles/textSize";
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
    fontSize: textSize.caption,
    letterSpacing: 0.5,
  },
});
