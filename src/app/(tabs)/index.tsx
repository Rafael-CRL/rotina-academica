import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { SemesterDisciplineCard } from "@/components/SemesterDisciplineCard";
import { SummaryCard } from "@/components/SummaryCard";
import { UpcomingActivityCard } from "@/components/UpcomingActivityCard";
import { useActivities } from "@/contexts/ActivitiesContext";
import { disciplines, getDiscipline } from "@/data/disciplines";
import { styles } from "@/screens/home/styles";
import { colors } from "@/styles/colors";
import {
  countDueWithin,
  countPendingByDiscipline,
  getUpcomingActivities,
} from "@/utils/activity";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function Home() {
  const { activities } = useActivities();
  const upcoming = getUpcomingActivities(activities, 2);

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Header hasNotifications />

        <View style={styles.main}>
          <View style={styles.greeting}>
            <Text style={styles.title}>Olá, estudante!</Text>
            <Text style={styles.subtitle}>Organize sua rotina acadêmica</Text>
          </View>

          <View style={styles.summary}>
            <SummaryCard
              total={countDueWithin(activities, 7)}
              title="Pendências"
              subtitle="Para esta semana"
              textColor={colors.orange}
              accentColor={colors.badge.orange.background}
              icon={
                <MaterialCommunityIcons
                  name="clipboard-alert"
                  size={22}
                  color={colors.orange}
                />
              }
            />
            <View style={styles.summaryRow}>
              <View style={styles.summaryItem}>
                <SummaryCard
                  total={countDueWithin(activities, 15, "exam")}
                  title="Provas"
                  subtitle="Próximos 15 dias"
                  textColor={colors.red}
                  accentColor={colors.badge.red.background}
                  icon={
                    <FontAwesome6 name="clipboard-list" size={20} color={colors.red} />
                  }
                />
              </View>
              <View style={styles.summaryItem}>
                <SummaryCard
                  total={disciplines.length}
                  title="Disciplinas"
                  subtitle="Ativas no semestre"
                  textColor={colors.primary}
                  accentColor={colors.info}
                  accentOpacity={0.1}
                  icon={
                    <FontAwesome6
                      name="graduation-cap"
                      size={20}
                      color={colors.primary}
                    />
                  }
                />
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Próximas atividades</Text>
              <Pressable onPress={() => router.navigate("/activity")} hitSlop={8}>
                <Text style={styles.link}>Ver todas</Text>
              </Pressable>
            </View>
            <View style={styles.list}>
              {upcoming.length === 0 && (
                <Text style={styles.empty}>
                  Nenhuma atividade pendente. Bom trabalho!
                </Text>
              )}
              {upcoming.map((activity) => (
                <UpcomingActivityCard
                  key={activity.id}
                  activity={activity}
                  disciplineName={
                    getDiscipline(activity.disciplineId)?.name ?? "Sem disciplina"
                  }
                  onPress={() =>
                    router.navigate({
                      pathname: "/activity-details/[id]",
                      params: { id: activity.id },
                    })
                  }
                />
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Disciplinas do semestre</Text>
            <View style={styles.disciplineList}>
              {disciplines.map((discipline) => (
                <SemesterDisciplineCard
                  key={discipline.id}
                  discipline={discipline}
                  pendingCount={countPendingByDiscipline(activities, discipline.id)}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
