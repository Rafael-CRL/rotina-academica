const MS_PER_DAY = 86_400_000;
const MONTHS = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

export const pad = (value: number) => String(value).padStart(2, "0");

export const startOfDay = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

// Dias de calendário de `from` até `to` (0 = mesmo dia, 1 = dia seguinte, -1 = dia anterior).
export const daysBetween = (from: Date, to: Date) =>
  Math.round((startOfDay(to).getTime() - startOfDay(from).getTime()) / MS_PER_DAY);

export const addDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const withTime = (date: Date, hours: number, minutes: number) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes);

export const formatTime = (date: Date) =>
  `${pad(date.getHours())}:${pad(date.getMinutes())}`;

// "24/10/2026"
export const formatDate = (date: Date) =>
  `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;

// "24 Out"
export const formatShortDate = (date: Date) =>
  `${date.getDate()} ${MONTHS[date.getMonth()]}`;

// Texto ISO no horário local ("2026-10-24T23:59:00"): é como a data é guardada.
export const toLocalIso = (date: Date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${formatTime(date)}:00`;
