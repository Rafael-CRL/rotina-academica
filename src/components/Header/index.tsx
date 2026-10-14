import { colors } from "@/styles/colors";
import { showComingSoon } from "@/utils/feedback";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type HeaderProps = {
  // Mostra o ponto vermelho sobre o sino.
  hasNotifications?: boolean;
};

export function Header({ hasNotifications = false }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={require("../../../assets/images/avatar.png")}
          style={styles.avatar}
        />
        <Text style={styles.title}>Minha Rotina</Text>
      </View>
      <Pressable
        style={styles.bell}
        onPress={() => showComingSoon("Notificações")}
        hitSlop={8}
      >
        <Ionicons name="notifications-outline" size={24} color={colors.primary} />
        {hasNotifications && <View style={styles.dot} />}
      </Pressable>
    </View>
  );
}
