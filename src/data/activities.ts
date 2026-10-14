import { Activity } from "@/types/activity";
import { addDays, toLocalIso, withTime } from "@/utils/date";
import { readJson, writeJson } from "./storage";

const STORAGE_KEY = "@rotina-academica:activities";

// Dados de exemplo da primeira abertura. As datas são relativas a hoje para que
// "Hoje", "Amanhã" e "Ontem" sempre façam sentido.
function createSeed(now = new Date()): Activity[] {
  const at = (days: number, hours: number, minutes: number) =>
    toLocalIso(withTime(addDays(now, days), hours, minutes));

  return [
    {
      id: "1",
      title: "Seminário de ética",
      description:
        "Preparar slides e roteiro para a apresentação final da disciplina de Ética Profissional.\nA apresentação deve durar no máximo 15 minutos.",
      disciplineId: "3",
      dueDate: at(0, 23, 59),
      done: false,
      priority: "high",
      kind: "task",
    },
    {
      id: "2",
      title: "Exercícios de probabilidade",
      description:
        "Lista 4 - Distribuição Normal e Teorema do Limite Central. Entregar em PDF.",
      disciplineId: "2",
      dueDate: at(1, 10, 0),
      done: false,
      priority: "medium",
      kind: "task",
    },
    {
      id: "3",
      title: "Projeto mobile",
      description: "Implementação da interface principal e integração com API REST.",
      disciplineId: "4",
      dueDate: at(-1, 23, 59),
      done: true,
      priority: "medium",
      kind: "task",
    },
    {
      id: "4",
      title: "Prova de Estatística",
      description: "Conteúdo: distribuições de probabilidade e intervalos de confiança.",
      disciplineId: "2",
      dueDate: at(5, 8, 0),
      done: false,
      priority: "high",
      kind: "exam",
    },
    {
      id: "5",
      title: "Prova de Banco de Dados II",
      description: "Conteúdo: normalização, transações e índices.",
      disciplineId: "1",
      dueDate: at(10, 10, 0),
      done: false,
      priority: "high",
      kind: "exam",
    },
  ];
}

// Primeira abertura: devolve os dados de exemplo. Depois: o que foi salvo.
export async function loadActivities() {
  const stored = await readJson<Activity[]>(STORAGE_KEY);
  return stored ?? createSeed();
}

export const saveActivities = (activities: Activity[]) =>
  writeJson(STORAGE_KEY, activities);
