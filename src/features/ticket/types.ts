export type TicketStatus = "ABERTO" | "EM_ANDAMENTO" | "FINALIZADO";

export type Ticket = {
  id: string;
  title: string;
  content: string;
  status: TicketStatus;
};
