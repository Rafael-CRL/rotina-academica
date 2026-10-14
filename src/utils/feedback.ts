import { Alert } from "react-native";

// Recursos que aparecem no Figma mas ainda não existem no app.
export const showComingSoon = (feature: string) =>
  Alert.alert(feature, "Este recurso estará disponível em breve.");
