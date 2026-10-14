import { BackHeader } from "@/components/BackHeader";
import { DateField } from "@/components/DateField";
import { FormField } from "@/components/FormField";
import { OptionGroup } from "@/components/OptionGroup";
import { Screen } from "@/components/Screen";
import { SelectField } from "@/components/SelectField";
import { TextField } from "@/components/TextField";
import {
  disciplineOptions,
  kindOptions,
  priorityOptions,
} from "@/screens/activity-form/options";
import { styles } from "@/screens/activity-form/styles";
import { useActivityForm } from "@/screens/activity-form/useActivityForm";
import { colors } from "@/styles/colors";
import { showComingSoon } from "@/utils/feedback";
import { Ionicons } from "@expo/vector-icons";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

// Serve para criar e para editar (`/activity/form?id=...`). A lógica fica em `useActivityForm`.
export default function ActivityForm() {
  const form = useActivityForm();

  return (
    <Screen>
      <BackHeader
        title="Minha Rotina"
        tone="brand"
        rightIcon="notifications-outline"
        onPressRight={() => showComingSoon("Notificações")}
        bordered
      />
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>
            {form.isEditing ? "Editar Atividade" : "Nova Atividade"}
          </Text>

          <View style={styles.form}>
            <FormField label="Título da Atividade" error={form.errors.title}>
              <TextField
                value={form.title}
                onChangeText={form.setTitle}
                placeholder="Ex: Lista de Exercícios 3"
                invalid={!!form.errors.title}
              />
            </FormField>

            <FormField label="Disciplina" error={form.errors.discipline}>
              <SelectField
                title="Disciplina"
                placeholder="Selecione uma disciplina"
                options={disciplineOptions}
                value={form.disciplineId}
                onChange={form.setDisciplineId}
                invalid={!!form.errors.discipline}
              />
            </FormField>

            <FormField label="Data de entrega" error={form.errors.date}>
              <DateField
                value={form.dueDate}
                onChange={form.setDueDate}
                invalid={!!form.errors.date}
              />
            </FormField>

            <FormField label="Prioridade">
              <OptionGroup
                options={priorityOptions}
                value={form.priority}
                onChange={form.setPriority}
              />
            </FormField>

            <FormField label="Tipo">
              <OptionGroup
                options={kindOptions}
                value={form.kind}
                onChange={form.setKind}
              />
            </FormField>

            <FormField label="Descrição" hint="Opcional">
              <TextField
                value={form.description}
                onChangeText={form.setDescription}
                placeholder="Adicione detalhes, links ou observações importantes sobre esta atividade..."
                multiline
              />
            </FormField>

            <View style={styles.footer}>
              <Pressable style={styles.save} onPress={form.save}>
                <Ionicons name="save" size={18} color={colors.white} />
                <Text style={styles.saveText}>Salvar atividade</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
}
