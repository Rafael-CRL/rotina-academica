import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  text: string;
  color: string;
};

export function Button({ text, color, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, { backgroundColor: color }]}
      {...rest}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
