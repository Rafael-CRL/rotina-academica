import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type BackHeaderProps = {
  title: string;
  // Estilo do título: marca ("Minha Rotina", azul) ou título de página.
  tone?: "brand" | "page";
  rightIcon: keyof typeof Ionicons.glyphMap;
  onPressRight: () => void;
  bordered?: boolean;
};

// Cabeçalho das telas internas: voltar à esquerda, título no centro e uma ação à direita.
export function BackHeader({
  title,
  tone = "page",
  rightIcon,
  onPressRight,
  bordered = false,
}: BackHeaderProps) {
  const goBack = () => (router.canGoBack() ? router.back() : router.replace("/activity"));

  return (
    <View style={[styles.container, bordered && styles.bordered]}>
      <Pressable style={styles.button} onPress={goBack} hitSlop={8}>
        <Ionicons name="arrow-back" size={22} color={colors.text.primary} />
      </Pressable>
      <Text
        style={[styles.title, tone === "brand" ? styles.titleBrand : styles.titlePage]}
      >
        {title}
      </Text>
      <Pressable style={styles.button} onPress={onPressRight} hitSlop={8}>
        <Ionicons
          name={rightIcon}
          size={22}
          color={tone === "brand" ? colors.primary : colors.text.primary}
        />
      </Pressable>
    </View>
  );
}
