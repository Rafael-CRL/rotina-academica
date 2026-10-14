import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";
import { styles } from "./styles";

type ActionButtonProps = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  // "solid" preenche com `color`; "outline" só desenha a borda.
  variant?: "solid" | "outline";
  color?: string;
};

export function ActionButton({
  label,
  icon,
  onPress,
  variant = "solid",
  color = colors.primary,
}: ActionButtonProps) {
  const solid = variant === "solid";
  const contentColor = solid ? colors.white : colors.text.secondary;

  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, solid ? { backgroundColor: color } : styles.outline]}
    >
      <Ionicons name={icon} size={18} color={contentColor} />
      <Text style={[styles.label, { color: contentColor }]}>{label}</Text>
    </Pressable>
  );
}
