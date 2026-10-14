import { Header } from "@/components/Header";
import { ReactNode } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  // Conteúdo abaixo do título (ex.: campo de busca).
  children?: ReactNode;
};

// Topo padrão das telas de lista: cabeçalho, título, subtítulo opcional e conteúdo extra.
export function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <View style={[styles.container, children ? styles.withContent : null]}>
      <Header />
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      {children ? <View style={styles.content}>{children}</View> : null}
    </View>
  );
}
