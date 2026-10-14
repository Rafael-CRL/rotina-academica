import { LoadingScreen } from "@/components/LoadingScreen";
import { ActivitiesProvider, useActivities } from "@/contexts/ActivitiesContext";
import {
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  useFonts,
} from "@expo-google-fonts/manrope";
import { Stack } from "expo-router";

// Espera as atividades serem lidas do aparelho antes de mostrar as telas.
function AppStack() {
  const { isLoading } = useActivities();

  if (isLoading) return <LoadingScreen />;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
  });

  if (!fontsLoaded) return <LoadingScreen />;

  return (
    <ActivitiesProvider>
      <AppStack />
    </ActivitiesProvider>
  );
}
