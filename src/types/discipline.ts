export type DisciplineIconName = "book" | "code" | "database" | "calculator" | "brain";

export type Discipline = {
  id: string;
  name: string;
  prof: string;
  schedule: string;
  room: string;
  icon: DisciplineIconName;
};
