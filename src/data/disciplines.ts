import { Discipline } from "@/types/discipline";

export const disciplines: Discipline[] = [
  {
    id: "1",
    name: "Banco de Dados II",
    prof: "Prof. Roberto Silva",
    schedule: "Seg / Qua - 10:00",
    room: "Laboratório 401",
    icon: "database",
  },
  {
    id: "2",
    name: "Probabilidade e Estatística",
    prof: "Prof. Maria Costa",
    schedule: "Ter / Qui - 08:00",
    room: "Sala 205",
    icon: "calculator",
  },
  {
    id: "3",
    name: "Psicologia Aplicada",
    prof: "Prof. Carlos Lima",
    schedule: "Sex - 14:00",
    room: "Auditorio 112",
    icon: "brain",
  },
  {
    id: "4",
    name: "Engenharia de Software",
    prof: "Prof. Ana Santos",
    schedule: "Seg / Qua - 14:00",
    room: "Laboratório 3",
    icon: "code",
  },
];

export const getDiscipline = (id: string) =>
  disciplines.find((discipline) => discipline.id === id);
