import { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";

// Ajuste fino (px) que sobe o conteúdo para alinhar o cabeçalho ao Figma.
const TOP_ADJUSTMENT = 5;

type ScreenProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

// Fundo e margem superior padrão das telas, respeitando a barra de status do aparelho.
export function Screen({ children, style }: ScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingTop: Math.max(insets.top - TOP_ADJUSTMENT, 0) },
        style,
      ]}
    >
      {children}
    </View>
  );
}
