import { Ionicons } from "@expo/vector-icons";
import { ColorValue, View } from "react-native";
import { styles } from "./styles";

type IconName = keyof typeof Ionicons.glyphMap;

type TabIconProps = {
  focused: boolean;
  color: ColorValue;
  active: IconName;
  inactive: IconName;
};

// Ícone da barra de abas: preenchido e sobre uma pílula azul clara quando a aba está ativa.
export function TabIcon({ focused, color, active, inactive }: TabIconProps) {
  return (
    <View style={[styles.container, focused && styles.focused]}>
      <Ionicons name={focused ? active : inactive} size={22} color={color} />
    </View>
  );
}
