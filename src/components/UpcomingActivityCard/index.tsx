import { Badge } from "@/components/Badge";
import { colors } from "@/styles/colors";
import { Activity } from "@/types/activity";
import { formatDueDate, getDueBadge } from "@/utils/activity";
import { formatShortDate } from "@/utils/date";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type UpcomingActivityCardProps = {
  activity: Activity;
  disciplineName: string;
  onPress: () => void;
};

// Cartão compacto da página inicial. Hoje/atrasada em laranja; as demais em cinza.
export function UpcomingActivityCard({
  activity,
  disciplineName,
  onPress,
}: UpcomingActivityCardProps) {
  const badge = getDueBadge(activity);
  const palette = badge.urgent ? colors.badge.orange : colors.badge.gray;

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.info}>
        <Badge
          label={badge.label}
          background={palette.background}
          color={palette.text}
          compact
        />
        <Text style={styles.title} numberOfLines={1}>
          {activity.title}
        </Text>
        <Text style={styles.discipline} numberOfLines={1}>
          {disciplineName}
        </Text>
      </View>
      <Text style={[styles.date, badge.urgent && styles.dateUrgent]}>
        {badge.urgent
          ? formatDueDate(activity)
          : formatShortDate(new Date(activity.dueDate))}
      </Text>
    </Pressable>
  );
}
