import { DisciplineCard } from "@/components/DisciplineCard";
import { disciplines } from "@/data/disciplines";
import { FlatList, View } from "react-native";

export default function Discipline() {
  return (
    <View style={{ flex: 1, paddingTop: 60 }}>
      <FlatList
        data={disciplines}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DisciplineCard discipline={item} />}
        contentContainerStyle={{ gap: 16, paddingHorizontal: 20, paddingBottom: 24 }}
      />
    </View>
  );
}
