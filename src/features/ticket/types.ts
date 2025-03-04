export type Ticket = {
  id: string;
  title: string;
  content: string;
  status: "ABERTO" | "EM_ANDAMENTO" | "FINALIZADO";
};
