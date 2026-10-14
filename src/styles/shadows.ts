// Sombras compartilhadas (`boxShadow` funciona igual no Android, no iOS e na web).
export const shadows = {
  card: { boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.04)" },
  soft: { boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.04)" },
  avatar: { boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)" },
  floating: { boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.12)" },
  primary: { boxShadow: "0px 4px 6px rgba(37, 99, 235, 0.2)" },
} as const;
