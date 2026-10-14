import { DisciplineIcon } from "@/components/DisciplineIcon";
import { colors } from "@/styles/colors";
import { Discipline } from "@/types/discipline";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type SemesterDisciplineCardProps = {
  discipline: Discipline;
  pendingCount: number;
};

type RowProps = {
  icon: ReactNode;
  text: string;
};

function Row({ icon, text }: RowProps) {
  return (
    <View style={styles.row}>
      {icon}
      <Text style={styles.rowText}>{text}</Text>
    </View>
  );
}

// Cartão resumido da página inicial: nome, ícone da disciplina, professor, horário e sala.
export function SemesterDisciplineCard({
  discipline,
  pendingCount,
}: SemesterDisciplineCardProps) {
  const isDone = pendingCount === 0;
  const iconColor = colors.text.secondary;

  return (
    <View
      style={[
        styles.container,
        { borderLeftColor: isDone ? colors.green : colors.primary },
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.name}>{discipline.name}</Text>
        <DisciplineIcon name={discipline.icon} size={20} color={iconColor} />
      </View>
      <View style={styles.rows}>
        <Row
          icon={<Ionicons name="person-outline" size={15} color={iconColor} />}
          text={discipline.prof}
        />
        <Row
          icon={<Ionicons name="time-outline" size={15} color={iconColor} />}
          text={discipline.schedule}
        />
        <Row
          icon={<MaterialCommunityIcons name="door-open" size={15} color={iconColor} />}
          text={discipline.room}
        />
      </View>
    </View>
  );
}
