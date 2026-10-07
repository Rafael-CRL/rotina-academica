import { Button } from "@/components/Button";
import { colors } from "@/Styles/colors";
import { View } from "react-native";

export default function Discipline(){
    return <View style={{
        marginTop:100,
        alignItems: "center",
        flex: 1,
    }}>
        <View style={{
            paddingHorizontal: 24,
        }}>

        </View>
        <Button text="Salvar Atividade" color={colors.primary} onPress={}/>

    </View>
}