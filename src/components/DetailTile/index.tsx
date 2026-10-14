import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

type DetailTileProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value: string;
  valueColor?: string;
};

// Quadro curto de informação (ex.: disciplina, data de entrega) da tela de detalhes.
export function DetailTile({
  icon,
  label,
  value,
  valueColor = colors.text.primary,
}: DetailTileProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name={icon} size={18} color={colors.primary} />
        <Text style={styles.label}>{label}</Text>
      </View>
      <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
    </View>
  );
}
