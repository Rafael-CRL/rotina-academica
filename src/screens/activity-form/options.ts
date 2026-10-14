import { disciplines } from "@/data/disciplines";
import { colors } from "@/styles/colors";
import { ActivityKind, ActivityPriority } from "@/types/activity";
import { kindLabels, priorityLabels } from "@/utils/activity";

export const disciplineOptions = disciplines.map((discipline) => ({
  value: discipline.id,
  label: discipline.name,
}));

export const priorityOptions: {
  value: ActivityPriority;
  label: string;
  accent: string;
}[] = [
  { value: "low", label: priorityLabels.low, accent: colors.priority.low },
  { value: "medium", label: priorityLabels.medium, accent: colors.priority.medium },
  { value: "high", label: priorityLabels.high, accent: colors.priority.high },
];

export const kindOptions: { value: ActivityKind; label: string }[] = [
  { value: "task", label: kindLabels.task },
  { value: "exam", label: kindLabels.exam },
];
