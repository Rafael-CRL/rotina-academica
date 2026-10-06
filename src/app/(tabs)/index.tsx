import { Text, View } from "react-native";

import { styles } from "@/screens/index-style";
import { SumaryCard } from "@/components/SumaryCard";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/Styles/colors";

export default function Index() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.label}>Minha Rotina</Text>
                <View style={styles.titleContent}>
                    <Text style={styles.title}>Olá Estudante!</Text>
                    <Text style={styles.subtitle}>Organize sua rotina acadêmica</Text>
                </View>
                <View>
                    <SumaryCard
                        total={2}
                        textColor={colors.orange}
                        title="Prova"
                        subtitle="Próximos 15 dias"
                        icon={
                            <MaterialCommunityIcons
                                name="clipboard-alert"
                                color={colors.orange}
                                size={26}
                            />
                        }
                    />
                </View>
                <View style={styles.cardContent}>
                    <View style={styles.card}>
                        <SumaryCard
                            total={2}
                            textColor={colors.orange}
                            title="Prova"
                            subtitle="Próximos 15 dias"
                            icon={
                                <FontAwesome6
                                    name="clipboard-list"
                                    color={colors.orange}
                                    size={26}
                                />
                            }
                        />
                    </View>
                    <View style={styles.card}>
                        <SumaryCard
                            total={2}
                            textColor={colors.orange}
                            title="Disciplina"
                            subtitle="Próximos 15 dias"
                            icon={
                                <FontAwesome6
                                name="graduation-cap"
                                    color={colors.primary}
                                    size={26}
                                />
                            }
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}