import { colors } from "@/styles/colors";
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

type TextFieldProps = TextInputProps & {
  invalid?: boolean;
};

// Campo de texto padrão do formulário. Com `multiline` vira uma caixa de várias linhas.
export function TextField({
  invalid = false,
  multiline,
  style,
  ...rest
}: TextFieldProps) {
  return (
    <TextInput
      multiline={multiline}
      placeholderTextColor={colors.text.secondary + "80"}
      style={[
        styles.input,
        multiline && styles.multiline,
        invalid && styles.invalid,
        style,
      ]}
      {...rest}
    />
  );
}
