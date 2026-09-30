import { Stack } from "expo-router";
import {
    useFonts,
    Manrope_300Light,
    Manrope_400Regular,
    Manrope_500Medium,
    Manrope_600SemiBold,
    Manrope_700Bold,
} from "@expo-google-fonts/manrope";
import { View } from "react-native";
import { Loading } from "@/components/Loading";

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        Manrope_300Light,
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_600SemiBold,
        Manrope_700Bold,
    });

    if (!fontsLoaded) {
        return (
            <View style={{ flex: 1,
             alignItems: "center",
             justifyContent: "center" }}>
                <Loading />
                
            </View>
        );
    }

    return (
        <Stack screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="two-screen" />
        </Stack>
    );
}