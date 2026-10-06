import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/Styles/colors";
import { styles } from "./styles";
import { ReactNode } from "react";

type SumaryCardProps = {
    total: number;
    title: string;
    subtitle: string;
    icon: ReactNode;
    textColor: string;
}

export function SumaryCard({total, title, subtitle, icon, textColor}:SumaryCardProps){
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {icon}
                <Text style={[styles.textRow, {
                    color: textColor,
                }]}>{total}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.titleContent}>{title}</Text>
                <Text style={styles.subtitleContent}>{subtitle}</Text>
            </View>
        </View>
    );
}