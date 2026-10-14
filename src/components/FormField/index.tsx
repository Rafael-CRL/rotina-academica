import { ReactNode } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type FormFieldProps = {
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
};

// Rótulo + campo + mensagem de erro. Cada campo do formulário vem dentro dele.
export function FormField({ label, hint, error, children }: FormFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
        {hint ? <Text style={styles.hint}> ({hint})</Text> : null}
      </Text>
      {children}
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}
