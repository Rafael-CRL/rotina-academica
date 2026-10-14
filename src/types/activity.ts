export type ActivityPriority = "low" | "medium" | "high";
export type ActivityKind = "task" | "exam";

export type Activity = {
  id: string;
  title: string;
  description: string;
  disciplineId: string;
  dueDate: string;
  done: boolean;
  priority: ActivityPriority;
  kind: ActivityKind;
};

// Dados que o formulário informa; `id` e `done` são definidos ao salvar.
export type ActivityInput = Omit<Activity, "id" | "done">;
