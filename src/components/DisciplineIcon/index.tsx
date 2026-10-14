import { DisciplineIconName } from "@/types/discipline";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type DisciplineIconProps = {
  name: DisciplineIconName;
  size?: number;
  color: string;
};

const iconNames: Record<
  DisciplineIconName,
  keyof typeof MaterialCommunityIcons.glyphMap
> = {
  book: "book-open-page-variant-outline",
  code: "code-tags",
  database: "database",
  calculator: "calculator-variant",
  brain: "brain",
};

// Ícone da disciplina: o tipo guarda um nome curto e aqui ele vira o ícone da biblioteca.
export function DisciplineIcon({ name, size = 18, color }: DisciplineIconProps) {
  return <MaterialCommunityIcons name={iconNames[name]} size={size} color={color} />;
}
