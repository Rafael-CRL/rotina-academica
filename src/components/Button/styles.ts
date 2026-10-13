import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";
import { textSize } from "@/styles/textSize";
import { fontFamily } from "@/styles/fontFamily";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 54,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },

  text: {
    color: colors.white,
    fontSize: textSize.button,
    fontFamily: fontFamily.semibold,
  },
});
