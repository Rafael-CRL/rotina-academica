import { Discipline } from "@/types/discipline";
import { View, Text } from "react-native";
import { styles } from "./styles";

type DisciplineCardProps = {
  discipline: Discipline;
};

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
          <Text style={styles.prof}>{discipline.prof}</Text>
        </View>

        <View style={[styles.badge, isDone ? styles.badgeDone : styles.badgePending]}>
          <Text
            style={[styles.badgeText, isDone ? styles.badgeDone : styles.badgePending]}
          >
            {badgeLabel}
          </Text>
        </View>
      </View>
    </View>
  );
}
