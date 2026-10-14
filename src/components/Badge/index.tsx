import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

type BadgeProps = {
  label: string;
  background: string;
  color: string;
  icon?: keyof typeof Ionicons.glyphMap;
  compact?: boolean;
};

// Etiqueta em pílula, com ícone opcional. `compact` usa um preenchimento menor.
export function Badge({ label, background, color, icon, compact = false }: BadgeProps) {
  return (
    <View
      style={[
        styles.container,
        compact ? styles.compact : styles.regular,
        { backgroundColor: background },
      ]}
    >
      {icon && <Ionicons name={icon} size={14} color={color} />}
      <Text style={[styles.label, { color }]}>{label}</Text>
    </View>
  );
}
