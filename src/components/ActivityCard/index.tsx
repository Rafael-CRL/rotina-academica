import { DisciplineIcon } from "@/components/DisciplineIcon";
import { colors } from "@/styles/colors";
import { Activity } from "@/types/activity";
import { Discipline } from "@/types/discipline";
import { ActivityStatus, formatDueDate, getActivityStatus } from "@/utils/activity";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type ActivityCardProps = {
  activity: Activity;
  discipline?: Discipline;
  onPress: () => void;
};

const statusConfig: Record<
  ActivityStatus,
  { label: string; icon: keyof typeof Ionicons.glyphMap }
> = {
  urgent: { label: "Urgente", icon: "warning-outline" },
  next: { label: "Próxima", icon: "time-outline" },
  done: { label: "Concluída", icon: "checkmark-circle-outline" },
};

export function ActivityCard({ activity, discipline, onPress }: ActivityCardProps) {
  const status = getActivityStatus(activity);
  const palette = colors.status[status];
  const isDone = status === "done";

  return (
    <Pressable
      style={[styles.container, isDone && styles.containerDone]}
      onPress={onPress}
    >
      <View style={[styles.stripe, { backgroundColor: palette.stripe }]} />

      <View style={styles.header}>
        <View style={[styles.badge, { backgroundColor: palette.badge }]}>
          <Ionicons
            name={statusConfig[status].icon}
            size={14}
            color={palette.badgeText}
          />
          <Text style={[styles.badgeText, { color: palette.badgeText }]}>
            {statusConfig[status].label}
          </Text>
        </View>
        <Text style={styles.date}>{formatDueDate(activity)}</Text>
      </View>

      <View style={styles.body}>
        <Text style={[styles.title, isDone && styles.titleDone]}>{activity.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {activity.description}
        </Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.discipline}>
          <DisciplineIcon
            name={discipline?.icon ?? "book"}
            size={14}
            color={colors.text.secondary}
          />
          <Text style={styles.disciplineName} numberOfLines={1}>
            {discipline?.name ?? "Sem disciplina"}
          </Text>
        </View>
        {isDone ? (
          <Text style={styles.delivered}>Entregue</Text>
        ) : (
          <Text style={styles.details}>Ver detalhes</Text>
        )}
      </View>
    </Pressable>
  );
}
