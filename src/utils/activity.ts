import { Activity, ActivityKind, ActivityPriority } from "@/types/activity";
import { daysBetween, formatShortDate, formatTime, pad } from "./date";

export type ActivityStatus = "urgent" | "next" | "done";

export const priorityLabels: Record<ActivityPriority, string> = {
  low: "Baixa",
  medium: "Média",
  high: "Alta",
};

export const kindLabels: Record<ActivityKind, string> = {
  task: "Atividade",
  exam: "Prova",
};

// Dias de hoje até a entrega (negativo = já passou).
const daysUntilDue = (activity: Activity, now: Date) =>
  daysBetween(now, new Date(activity.dueDate));

// O estado não é guardado: é calculado pela data. Concluída tem prioridade sobre as demais.
export function getActivityStatus(activity: Activity, now = new Date()): ActivityStatus {
  if (activity.done) return "done";
  return daysUntilDue(activity, now) <= 0 ? "urgent" : "next";
}

// "Hoje, 23:59", "Amanhã, 10:00", "Ontem" (concluídas só mostram o dia) ou "20/10, 08:00".
export function formatDueDate(activity: Activity, now = new Date()) {
  const due = new Date(activity.dueDate);
  const days = daysUntilDue(activity, now);

  let day = `${pad(due.getDate())}/${pad(due.getMonth() + 1)}`;
  if (days === 0) day = "Hoje";
  if (days === 1) day = "Amanhã";
  if (days === -1) day = "Ontem";

  if (activity.done) return day;
  return `${day}, ${formatTime(due)}`;
}

// "24 Out, 23:59"
export function formatDueDateTime(activity: Activity) {
  const due = new Date(activity.dueDate);
  return `${formatShortDate(due)}, ${formatTime(due)}`;
}

// Etiqueta da lista "Próximas atividades": "Pendente" (hoje/atrasada), "Amanhã" ou "Em N dias".
export function getDueBadge(activity: Activity, now = new Date()) {
  const days = daysUntilDue(activity, now);
  if (days <= 0) return { label: "Pendente", urgent: true };
  if (days === 1) return { label: "Amanhã", urgent: false };
  return { label: `Em ${days} dias`, urgent: false };
}

// Pendentes primeiro (a mais próxima da data antes); concluídas no final.
export function sortActivities(activities: Activity[]) {
  return [...activities].sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1;
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
  });
}

export const getUpcomingActivities = (activities: Activity[], limit: number) =>
  sortActivities(activities.filter((activity) => !activity.done)).slice(0, limit);

// Pendentes que vencem em até `days` dias (inclui as atrasadas). `kind` filtra o tipo.
export function countDueWithin(
  activities: Activity[],
  days: number,
  kind?: ActivityKind,
  now = new Date(),
) {
  return activities.filter(
    (activity) =>
      !activity.done &&
      (!kind || activity.kind === kind) &&
      daysUntilDue(activity, now) <= days,
  ).length;
}

export const countPending = (activities: Activity[]) =>
  activities.filter((activity) => !activity.done).length;

export const countDone = (activities: Activity[]) =>
  activities.filter((activity) => activity.done).length;

export const countPendingByDiscipline = (activities: Activity[], disciplineId: string) =>
  activities.filter(
    (activity) => !activity.done && activity.disciplineId === disciplineId,
  ).length;
