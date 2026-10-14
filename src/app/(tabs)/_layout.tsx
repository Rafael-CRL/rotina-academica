import { TabIcon } from "@/components/TabIcon";
import { styles } from "@/screens/tabs/styles";
import { colors } from "@/styles/colors";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text.secondary,
        // A altura da barra soma a área de gestos do aparelho (parte de baixo da tela).
        tabBarStyle: [
          styles.tabBar,
          { height: 72 + insets.bottom, paddingBottom: insets.bottom },
        ],
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Início",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              color={color}
              active="home"
              inactive="home-outline"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="discipline"
        options={{
          title: "Disciplinas",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              color={color}
              active="book"
              inactive="book-outline"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Atividades",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              color={color}
              active="clipboard"
              inactive="clipboard-outline"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              color={color}
              active="person"
              inactive="person-outline"
            />
          ),
        }}
      />
    </Tabs>
  );
}
