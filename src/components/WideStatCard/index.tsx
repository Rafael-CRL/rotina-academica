import { colors } from "@/styles/colors";
import { withOpacity } from "@/utils/color";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type WideStatCardProps = {
  label: string;
  value: number;
  onPress: () => void;
};

// Cartão de largura total do perfil, com seta indicando que leva a outra tela.
export function WideStatCard({ label, value, onPress }: WideStatCardProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={[styles.accent, { backgroundColor: withOpacity("#DBE1FF", 0.2) }]} />
      <View style={styles.content}>
        <View style={styles.iconCircle}>
          <Ionicons name="book" size={24} color={colors.white} />
        </View>
        <View>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color={colors.text.secondary} />
    </Pressable>
  );
}
