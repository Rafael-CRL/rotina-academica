import { colors } from "@/styles/colors";
import { Discipline } from "@/types/discipline";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { styles } from "./styles";

type DisciplineCardProps = {
  discipline: Discipline;
};

type InfoItemProps = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  label: string;
  value: string;
};

// Bloco reutilizável: ícone em círculo + rótulo pequeno + valor. Usado para horário e sala.
function InfoItem({ icon, label, value }: InfoItemProps) {
  return (
    <View style={styles.infoItem}>
      <View style={styles.iconCircle}>
        <MaterialCommunityIcons name={icon} size={18} color={colors.primary} />
      </View>
      <View>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
  );
}

export function DisciplineCard({ discipline }: DisciplineCardProps) {
  const isDone = discipline.pendingCount === 0;

  const badgeLabel = isDone
    ? "Em dia"
    : `${discipline.pendingCount} ${discipline.pendingCount === 1 ? "Pendente" : "Pendentes"}`;

  return (
    <View style={[styles.container, isDone ? styles.stripeDone : styles.stripePending]}>
      <View style={styles.header}>
        <View style={styles.titleBox}>
          <Text style={styles.name}>{discipline.name}</Text>
          <View style={styles.profRow}>
            <Ionicons name="person-outline" size={14} color={colors.text.secondary} />
            <Text style={styles.prof}>{discipline.prof}</Text>
          </View>
        </View>

        <View style={[styles.badge, isDone ? styles.badgeDone : styles.badgePending]}>
          <Text
            style={[
              styles.badgeText,
              isDone ? styles.badgeTextDone : styles.badgeTextPending,
            ]}
          >
            {badgeLabel}
          </Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.infoRow}>
        <InfoItem icon="clock-outline" label="Horário" value={discipline.schedule} />
        <InfoItem icon="door-open" label="Sala" value={discipline.room} />
      </View>
    </View>
  );
}
