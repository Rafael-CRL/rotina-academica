import { Stack } from "expo-router";

// Atividades tem a lista e o formulário; as duas telas mantêm a barra de abas visível.
export default function ActivityLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
