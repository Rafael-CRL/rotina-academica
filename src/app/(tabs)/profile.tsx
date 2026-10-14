import { Header } from "@/components/Header";
import { Screen } from "@/components/Screen";
import { StatCard } from "@/components/StatCard";
import { WideStatCard } from "@/components/WideStatCard";
import { useActivities } from "@/contexts/ActivitiesContext";
import { disciplines } from "@/data/disciplines";
import { student } from "@/data/student";
import { styles } from "@/screens/profile/styles";
import { colors } from "@/styles/colors";
import { countDone, countPending } from "@/utils/activity";
import { showComingSoon } from "@/utils/feedback";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Profile() {
  const { activities } = useActivities();

  return (
    <Screen>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Header />

        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require("../../../assets/images/avatar.png")}
              style={styles.avatar}
            />
            <Pressable
              style={styles.cameraButton}
              onPress={() => showComingSoon("Editar foto de perfil")}
            >
              <Ionicons name="camera" size={18} color={colors.primary} />
            </Pressable>
          </View>

          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.course}>{student.course}</Text>
          <View style={styles.semester}>
            <Ionicons name="school" size={16} color={colors.primary} />
            <Text style={styles.semesterText}>{student.semester}</Text>
          </View>

          <Pressable
            style={styles.settings}
            onPress={() => showComingSoon("Configurações")}
          >
            <Ionicons name="settings-sharp" size={18} color={colors.white} />
            <Text style={styles.settingsText}>Configurações</Text>
          </Pressable>
        </View>

        <View style={styles.stats}>
          <WideStatCard
            label="Disciplinas ativas"
            value={disciplines.length}
            onPress={() => router.navigate("/discipline")}
          />
          <View style={styles.statsRow}>
            <StatCard
              icon={
                <Ionicons
                  name="checkmark-circle-outline"
                  size={18}
                  color={colors.green}
                />
              }
              iconBackground={colors.background.green}
              value={countDone(activities)}
              valueColor={colors.text.primary}
              label={"Atividades\nConcluídas"}
            />
            <StatCard
              icon={<Ionicons name="alert-circle" size={18} color={colors.red} />}
              iconBackground={colors.badge.red.background}
              value={countPending(activities)}
              valueColor={colors.red}
              label={"Pendências\nAtuais"}
              accentColor={colors.badge.red.background}
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
