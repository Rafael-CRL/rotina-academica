import { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";

type ScreenProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

// Fundo e margem superior padrão das telas, respeitando a barra de status do aparelho.
export function Screen({ children, style }: ScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: Math.max(insets.top - 5, 0) }, style]}>
      {children}
    </View>
  );
}
