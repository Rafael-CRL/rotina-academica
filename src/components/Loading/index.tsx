import { ActivityIndicator } from "react-native";
import { colors } from "@/styles/colors";
export function Loading() {
  return <ActivityIndicator size={"large"} color={colors.green} />;
}
