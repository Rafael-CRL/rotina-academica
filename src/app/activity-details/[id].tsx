import { ActionButton } from "@/components/ActionButton";
import { BackHeader } from "@/components/BackHeader";
import { Badge } from "@/components/Badge";
import { DetailTile } from "@/components/DetailTile";
import { Screen } from "@/components/Screen";
import { useActivities } from "@/contexts/ActivitiesContext";
import { getDiscipline } from "@/data/disciplines";
import { styles } from "@/screens/activity-details/styles";
import { colors } from "@/styles/colors";
import { ActivityPriority } from "@/types/activity";
import { formatDueDateTime, getActivityStatus, priorityLabels } from "@/utils/activity";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Alert, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const priorityBadge: Record<
  ActivityPriority,
  {
    palette: { background: string; text: string };
    icon: keyof typeof Ionicons.glyphMap;
  }
> = {
  high: { palette: colors.badge.red, icon: "alert" },
  medium: { palette: colors.badge.orange, icon: "remove-circle-outline" },
  low: { palette: colors.badge.blue, icon: "arrow-down-circle-outline" },
};

export default function ActivityDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { getActivity, toggleDone, removeActivity } = useActivities();
  const insets = useSafeAreaInsets();
  const activity = getActivity(id);

  const handleDelete = () => {
    if (!activity) return;
    Alert.alert(
      "Excluir atividade?",
      `"${activity.title}" será removida da sua rotina.`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            removeActivity(activity.id);
            router.back();
          },
        },
      ],
    );
  };

  if (!activity) {
    return (
      <Screen>
        <BackHeader
          title="Detalhes"
          rightIcon="ellipsis-vertical"
          onPressRight={() => {}}
        />
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>Esta atividade não foi encontrada.</Text>
        </View>
      </Screen>
    );
  }

  const discipline = getDiscipline(activity.disciplineId);
  const isDone = activity.done;
  const isLate = getActivityStatus(activity) === "urgent";
  const priority = priorityBadge[activity.priority];
  const paragraphs = activity.description.split("\n").filter((line) => line.trim());

  return (
    <Screen>
      <BackHeader
        title="Detalhes"
        rightIcon="ellipsis-vertical"
        onPressRight={handleDelete}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.badges}>
          {isDone ? (
            <Badge
              label="Concluída"
              icon="checkmark-circle-outline"
              background={colors.badge.green.background}
              color={colors.badge.green.text}
            />
          ) : (
            <Badge
              label="Pendente"
              icon="ellipsis-horizontal-circle-outline"
              background={colors.badge.gray.background}
              color={colors.badge.gray.text}
            />
          )}
          <Badge
            label={`${priorityLabels[activity.priority]} Prioridade`}
            icon={priority.icon}
            background={priority.palette.background}
            color={priority.palette.text}
          />
        </View>

        <Text style={styles.title}>{activity.title}</Text>

        <View style={styles.tiles}>
          <DetailTile
            icon="book"
            label="Disciplina"
            value={discipline?.name ?? "Sem disciplina"}
          />
          <DetailTile
            icon="calendar"
            label="Entrega"
            value={formatDueDateTime(activity)}
            valueColor={isLate ? colors.red : colors.text.primary}
          />
        </View>

        <View style={styles.tip}>
          <Ionicons name="bulb" size={26} color={colors.onInfo} />
          <View style={styles.tipTexts}>
            <Text style={styles.tipTitle}>Dica de Estudo</Text>
            <Text style={styles.tipText}>
              Comece esta atividade com antecedência para evitar atrasos na entrega.
            </Text>
          </View>
        </View>

        <View style={styles.description}>
          <View style={styles.descriptionHeader}>
            <Ionicons name="document-text-outline" size={18} color={colors.primary} />
            <Text style={styles.descriptionTitle}>Descrição da Tarefa</Text>
          </View>
          {paragraphs.length === 0 ? (
            <Text style={styles.paragraph}>Nenhuma descrição informada.</Text>
          ) : (
            paragraphs.map((paragraph, index) => (
              <Text key={index} style={styles.paragraph}>
                {paragraph}
              </Text>
            ))
          )}
        </View>
      </ScrollView>

      <View style={[styles.actions, { paddingBottom: insets.bottom + 16 }]}>
        <ActionButton
          label={isDone ? "Reabrir atividade" : "Marcar como concluída"}
          icon={isDone ? "refresh-circle" : "checkmark-circle"}
          color={isDone ? colors.primary : colors.green}
          onPress={() => toggleDone(activity.id)}
        />
        <ActionButton
          label="Editar atividade"
          icon="pencil"
          variant="outline"
          onPress={() =>
            router.navigate({ pathname: "/activity/form", params: { id: activity.id } })
          }
        />
      </View>
    </Screen>
  );
}
