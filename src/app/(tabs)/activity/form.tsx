import { BackHeader } from "@/components/BackHeader";
import { DateField } from "@/components/DateField";
import { FormField } from "@/components/FormField";
import { OptionGroup } from "@/components/OptionGroup";
import { Screen } from "@/components/Screen";
import { SelectField } from "@/components/SelectField";
import { TextField } from "@/components/TextField";
import { useActivities } from "@/contexts/ActivitiesContext";
import { disciplines } from "@/data/disciplines";
import { styles } from "@/screens/activity-form/styles";
import { colors } from "@/styles/colors";
import { ActivityInput, ActivityKind, ActivityPriority } from "@/types/activity";
import { kindLabels, priorityLabels } from "@/utils/activity";
import { toLocalIso, withTime } from "@/utils/date";
import { showComingSoon } from "@/utils/feedback";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

const disciplineOptions = disciplines.map((discipline) => ({
  value: discipline.id,
  label: discipline.name,
}));

const priorityOptions: { value: ActivityPriority; label: string; accent: string }[] = [
  { value: "low", label: priorityLabels.low, accent: colors.priority.low },
  { value: "medium", label: priorityLabels.medium, accent: colors.priority.medium },
  { value: "high", label: priorityLabels.high, accent: colors.priority.high },
];

const kindOptions: { value: ActivityKind; label: string }[] = [
  { value: "task", label: kindLabels.task },
  { value: "exam", label: kindLabels.exam },
];

// Serve para criar (sem `id`) e para editar (`/activity/form?id=...`).
export default function ActivityForm() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { getActivity, addActivity, updateActivity } = useActivities();
  const existing = id ? getActivity(id) : undefined;

  const [title, setTitle] = useState(existing?.title ?? "");
  const [disciplineId, setDisciplineId] = useState(existing?.disciplineId ?? "");
  const [dueDate, setDueDate] = useState<Date | null>(
    existing ? new Date(existing.dueDate) : null,
  );
  const [priority, setPriority] = useState<ActivityPriority>(
    existing?.priority ?? "medium",
  );
  const [kind, setKind] = useState<ActivityKind>(existing?.kind ?? "task");
  const [description, setDescription] = useState(existing?.description ?? "");
  const [submitted, setSubmitted] = useState(false);

  const titleError =
    submitted && !title.trim() ? "Informe o título da atividade." : undefined;
  const disciplineError =
    submitted && !disciplineId ? "Selecione uma disciplina." : undefined;
  const dateError = submitted && !dueDate ? "Informe a data de entrega." : undefined;

  const handleSave = () => {
    setSubmitted(true);
    if (!title.trim() || !disciplineId || !dueDate) return;

    // A tela pede só o dia: ao editar mantém o horário original; ao criar, vence às 23:59.
    const original = existing ? new Date(existing.dueDate) : null;
    const due = withTime(
      dueDate,
      original?.getHours() ?? 23,
      original?.getMinutes() ?? 59,
    );

    const input: ActivityInput = {
      title: title.trim(),
      description: description.trim(),
      disciplineId,
      dueDate: toLocalIso(due),
      priority,
      kind,
    };

    if (existing) {
      updateActivity(existing.id, input);
    } else {
      addActivity(input);
    }
    router.back();
  };

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
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>
            {existing ? "Editar Atividade" : "Nova Atividade"}
          </Text>

          <View style={styles.form}>
            <FormField label="Título da Atividade" error={titleError}>
              <TextField
                value={title}
                onChangeText={setTitle}
                placeholder="Ex: Lista de Exercícios 3"
                invalid={!!titleError}
              />
            </FormField>

            <FormField label="Disciplina" error={disciplineError}>
              <SelectField
                title="Disciplina"
                placeholder="Selecione uma disciplina"
                options={disciplineOptions}
                value={disciplineId}
                onChange={setDisciplineId}
                invalid={!!disciplineError}
              />
            </FormField>

            <FormField label="Data de entrega" error={dateError}>
              <DateField value={dueDate} onChange={setDueDate} invalid={!!dateError} />
            </FormField>

            <FormField label="Prioridade">
              <OptionGroup
                options={priorityOptions}
                value={priority}
                onChange={setPriority}
              />
            </FormField>

            <FormField label="Tipo">
              <OptionGroup options={kindOptions} value={kind} onChange={setKind} />
            </FormField>

            <FormField label="Descrição" hint="Opcional">
              <TextField
                value={description}
                onChangeText={setDescription}
                placeholder={
                  "Adicione detalhes, links ou observações importantes sobre esta atividade..."
                }
                multiline
              />
            </FormField>

            <View style={styles.footer}>
              <Pressable style={styles.save} onPress={handleSave}>
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
