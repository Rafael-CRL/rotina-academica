import { withOpacity } from "@/utils/color";
import { ReactNode } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type SummaryCardProps = {
  total: number;
  title: string;
  subtitle: string;
  icon: ReactNode;
  textColor: string;
  // Cor do detalhe curvo no canto superior direito.
  accentColor: string;
  accentOpacity?: number;
};

export function SummaryCard({
  total,
  title,
  subtitle,
  icon,
  textColor,
  accentColor,
  accentOpacity = 0.2,
}: SummaryCardProps) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.accent,
          { backgroundColor: withOpacity(accentColor, accentOpacity) },
        ]}
      />
      <View style={styles.row}>
        {icon}
        <Text style={[styles.total, { color: textColor }]}>{total}</Text>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}
