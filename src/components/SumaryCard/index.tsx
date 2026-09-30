import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/Styles/colors";
import { styles } from "./styles";

export function SumaryCard(){
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <MaterialCommunityIcons 
                    name="clipboard-alert" 
                    color={colors.orange}
                    size={26} />
                <Text style={styles.textRow}>3</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.titleContent}>Pendências</Text>
                <Text style={styles.subtitleContent}>Para esta semana</Text>
            </View>
        </View>
    );
}