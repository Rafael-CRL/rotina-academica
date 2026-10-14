import { colors } from "@/styles/colors";
import { withOpacity } from "@/utils/color";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type Option<T extends string> = {
  value: T;
  label: string;
  // Cor da opção quando selecionada.
  accent?: string;
};

type OptionGroupProps<T extends string> = {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
};

// Botões lado a lado em que só um fica selecionado (prioridade, tipo da atividade).
export function OptionGroup<T extends string>({
  options,
  value,
  onChange,
}: OptionGroupProps<T>) {
  return (
    <View style={styles.container}>
      {options.map((option) => {
        const selected = option.value === value;
        const accent = option.accent ?? colors.primary;

        return (
          <Pressable
            key={option.value}
            onPress={() => onChange(option.value)}
            style={[
              styles.option,
              selected && {
                backgroundColor: withOpacity(accent, 0.1),
                borderColor: accent,
              },
            ]}
          >
            <Text style={[styles.label, selected && { color: accent }]}>
              {option.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
