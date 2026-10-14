import { useActivities } from "@/contexts/ActivitiesContext";
import { ActivityInput, ActivityKind, ActivityPriority } from "@/types/activity";
import { toLocalIso, withTime } from "@/utils/date";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";

// Estado, validação e salvamento do formulário. Cria (sem `id`) ou edita (`?id=...`).
export function useActivityForm() {
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

  // Os erros só aparecem depois da primeira tentativa de salvar.
  const errors = {
    title: submitted && !title.trim() ? "Informe o título da atividade." : undefined,
    discipline: submitted && !disciplineId ? "Selecione uma disciplina." : undefined,
    date: submitted && !dueDate ? "Informe a data de entrega." : undefined,
  };

  const save = () => {
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

  return {
    isEditing: !!existing,
    title,
    setTitle,
    disciplineId,
    setDisciplineId,
    dueDate,
    setDueDate,
    priority,
    setPriority,
    kind,
    setKind,
    description,
    setDescription,
    errors,
    save,
  };
}
