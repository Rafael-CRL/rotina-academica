import { Loading } from "@/components/Loading";
import { View } from "react-native";
import { styles } from "./styles";

export function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Loading />
    </View>
  );
}
