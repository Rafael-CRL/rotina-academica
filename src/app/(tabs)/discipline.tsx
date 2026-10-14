import { DisciplineCard } from "@/components/DisciplineCard";
import { Header } from "@/components/Header";
import { disciplines } from "@/data/disciplines";
import { styles } from "@/screens/discipline/styles";
import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Discipline() {
  const insets = useSafeAreaInsets();
  const [search, setSearch] = useState("");

  const filtered = disciplines.filter((discipline) =>
    `${discipline.name} ${discipline.prof} ${discipline.room}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top - 5 }]}>
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
        renderItem={({ item }) => <DisciplineCard discipline={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}
