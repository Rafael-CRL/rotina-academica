import { DisciplineCard } from "@/components/DisciplineCard";
import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { useActivities } from "@/contexts/ActivitiesContext";
import { disciplines } from "@/data/disciplines";
import { styles } from "@/screens/discipline/styles";
import { colors } from "@/styles/colors";
import { countPendingByDiscipline } from "@/utils/activity";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";

export default function Discipline() {
  const { activities } = useActivities();
  const [search, setSearch] = useState("");

  const filtered = disciplines.filter((discipline) =>
    `${discipline.name} ${discipline.prof} ${discipline.room}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <Screen>
      <View style={styles.top}>
        <Header />
        <Text style={styles.title}>Minhas Disciplinas</Text>
        <View style={styles.search}>
          <View style={styles.searchIcon}>
            <Ionicons name="search" size={20} color={colors.text.secondary} />
          </View>
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Buscar disciplina, professor ou sala..."
            placeholderTextColor={colors.text.secondary}
            style={styles.searchInput}
          />
        </View>
      </View>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DisciplineCard
            discipline={item}
            pendingCount={countPendingByDiscipline(activities, item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhuma disciplina encontrada.</Text>
        }
        contentContainerStyle={styles.list}
      />
    </Screen>
  );
}
