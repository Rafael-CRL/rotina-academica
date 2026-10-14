import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={require("../../../assets/images/avatar.png")}
          style={styles.avatar}
        />
        <Text style={styles.title}>Minha Rotina</Text>
      </View>
      <Ionicons name="notifications-outline" size={24} color={colors.primary} />
    </View>
  );
}
