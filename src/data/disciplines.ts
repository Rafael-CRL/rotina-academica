import { Discipline } from "@/types/discipline";

export const disciplines: Discipline[] = [
  {
    id: "1",
    name: "Banco de Dados II",
    prof: "Prof. Roberto Silva",
    schedule: "Seg / Qua - 10:00",
    room: "Laboratório 401",
    pendingCount: 2,
  },
  {
    id: "2",
    name: "Probabilidade e Estatística",
    prof: "Prof. Maria Costa",
    schedule: "Ter / Qui - 08:00",
    room: "Sala 205",
    pendingCount: 1,
  },
  {
    id: "3",
    name: "Psicologia Aplicada",
    prof: "Prof. Carlos Lima",
    schedule: "Sex - 14:00",
    room: "Auditorio 112",
    pendingCount: 0,
  },
  {
    id: "4",
    name: "Engenharia de Software",
    prof: "Prof. Ana Santos",
    schedule: "Seg / Qua - 14:00",
    room: "Laboratório 3",
    pendingCount: 3,
  },
];
