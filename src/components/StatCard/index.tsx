import { withOpacity } from "@/utils/color";
import { ReactNode } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type StatCardProps = {
  icon: ReactNode;
  iconBackground: string;
  value: number;
  valueColor: string;
  label: string;
  // Detalhe curvo opcional no canto superior direito.
  accentColor?: string;
};

// Cartão de estatística do perfil: ícone em pílula, número grande e rótulo.
export function StatCard({
  icon,
  iconBackground,
  value,
  valueColor,
  label,
  accentColor,
}: StatCardProps) {
  return (
    <View style={styles.container}>
      {accentColor && (
        <View
          style={[styles.accent, { backgroundColor: withOpacity(accentColor, 0.4) }]}
        />
      )}
      <View style={[styles.iconPill, { backgroundColor: iconBackground }]}>{icon}</View>
      <View style={styles.content}>
        <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
}
