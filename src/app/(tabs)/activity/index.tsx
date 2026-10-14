import { ActivityCard } from "@/components/ActivityCard";
import { FilterChip } from "@/components/FilterChip";
import { Header } from "@/components/Header";
import { NewActivityCard } from "@/components/NewActivityCard";
import { Screen } from "@/components/Screen";
import { useActivities } from "@/contexts/ActivitiesContext";
import { getDiscipline } from "@/data/disciplines";
import { styles } from "@/screens/activity/styles";
import { Activity } from "@/types/activity";
import { sortActivities } from "@/utils/activity";
import { router } from "expo-router";
import { useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";

type Filter = "all" | "pending" | "done";

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "Todas" },
  { key: "pending", label: "Pendentes" },
  { key: "done", label: "Concluídas" },
];

const matchesFilter = (activity: Activity, filter: Filter) =>
  filter === "all" || (filter === "done") === activity.done;

export default function Activities() {
  const { activities } = useActivities();
  const [filter, setFilter] = useState<Filter>("all");

  const visible = sortActivities(
    activities.filter((activity) => matchesFilter(activity, filter)),
  );

  return (
    <Screen>
      <View style={styles.top}>
        <Header />
        <Text style={styles.title}>Atividades e Prazos</Text>
        <Text style={styles.subtitle}>
          Acompanhe suas entregas e mantenha sua rotina em dia.
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filters}
        contentContainerStyle={styles.filtersContent}
      >
        {filters.map((item) => (
          <FilterChip
            key={item.key}
            label={item.label}
            selected={filter === item.key}
            onPress={() => setFilter(item.key)}
          />
        ))}
      </ScrollView>

      <FlatList
        data={visible}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ActivityCard
            activity={item}
            discipline={getDiscipline(item.disciplineId)}
            onPress={() =>
              router.navigate({
                pathname: "/activity-details/[id]",
                params: { id: item.id },
              })
            }
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma atividade por aqui.</Text>}
        ListFooterComponent={
          <View style={styles.footer}>
            <NewActivityCard onPress={() => router.navigate("/activity/form")} />
          </View>
        }
        contentContainerStyle={styles.list}
      />
    </Screen>
  );
}
