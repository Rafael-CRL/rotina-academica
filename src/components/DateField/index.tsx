import { BottomSheet } from "@/components/BottomSheet";
import { colors } from "@/styles/colors";
import { formatDate } from "@/utils/date";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, Pressable, Text } from "react-native";
import { styles } from "./styles";

type DateFieldProps = {
  value: Date | null;
  onChange: (date: Date) => void;
  invalid?: boolean;
};

// Campo de data. No Android abre o seletor do sistema; no iOS, um painel com o seletor e "Confirmar".
export function DateField({ value, onChange, invalid = false }: DateFieldProps) {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState(value ?? new Date());

  const handlePress = () => {
    if (Platform.OS === "android") {
      DateTimePickerAndroid.open({
        value: value ?? new Date(),
        mode: "date",
        onValueChange: (_event, date) => onChange(date),
      });
      return;
    }
    setDraft(value ?? new Date());
    setOpen(true);
  };

  const handleConfirm = () => {
    onChange(draft);
    setOpen(false);
  };

  return (
    <>
      <Pressable style={[styles.field, invalid && styles.invalid]} onPress={handlePress}>
        <Text style={[styles.fieldText, !value && styles.placeholder]}>
          {value ? formatDate(value) : "dd/mm/aaaa"}
        </Text>
        <Ionicons name="calendar-outline" size={20} color={colors.text.primary} />
      </Pressable>

      {Platform.OS === "ios" && (
        <BottomSheet
          visible={open}
          onClose={() => setOpen(false)}
          title="Data de entrega"
        >
          <DateTimePicker
            value={draft}
            mode="date"
            display="spinner"
            onValueChange={(_event, date) => setDraft(date)}
          />
          <Pressable style={styles.confirm} onPress={handleConfirm}>
            <Text style={styles.confirmText}>Confirmar</Text>
          </Pressable>
        </BottomSheet>
      )}
    </>
  );
}
