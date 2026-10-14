import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type NewActivityCardProps = {
  onPress?: () => void;
};

export function NewActivityCard({ onPress }: NewActivityCardProps) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.button}>
        <Ionicons name="add" size={24} color={colors.white} />
      </View>
      <View style={styles.texts}>
        <Text style={styles.title}>Nova Atividade</Text>
        <Text style={styles.subtitle}>Adicione mais tarefas à sua rotina</Text>
      </View>
    </Pressable>
  );
}
