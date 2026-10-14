import { BottomSheet } from "@/components/BottomSheet";
import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./styles";

type Option = { value: string; label: string };

type SelectFieldProps = {
  title: string;
  placeholder: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  invalid?: boolean;
};

// Campo de escolha: mostra a opção atual e abre uma lista para trocá-la.
export function SelectField({
  title,
  placeholder,
  options,
  value,
  onChange,
  invalid = false,
}: SelectFieldProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find((option) => option.value === value);

  const handleSelect = (next: string) => {
    onChange(next);
    setOpen(false);
  };

  return (
    <>
      <Pressable
        style={[styles.field, invalid && styles.invalid]}
        onPress={() => setOpen(true)}
      >
        <Text style={styles.fieldText} numberOfLines={1}>
          {selected ? selected.label : placeholder}
        </Text>
        <Ionicons name="chevron-down" size={18} color={colors.text.primary} />
      </Pressable>

      <BottomSheet visible={open} onClose={() => setOpen(false)} title={title}>
        {options.map((option) => (
          <Pressable
            key={option.value}
            style={styles.option}
            onPress={() => handleSelect(option.value)}
          >
            <Text
              style={[styles.optionText, option.value === value && styles.optionSelected]}
            >
              {option.label}
            </Text>
            {option.value === value && (
              <Ionicons name="checkmark" size={20} color={colors.primary} />
            )}
          </Pressable>
        ))}
      </BottomSheet>
    </>
  );
}
