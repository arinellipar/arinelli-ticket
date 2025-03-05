import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { ticketsPath } from "@/paths";
import Link from "next/link";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    return (
      <Placeholder
        label="Ticket não encontrado"
        button={
          <Button asChild variant="outline">
            <Link href={ticketsPath()}>Voltar para Tickets</Link>
          </Button>
        }
      />
    );
  }

  return (
    <div className="flex justify-center animate-fade-down animate-duration-2000">
      <TicketItem ticket={ticket} isDetail={true} />
    </div>
  );
};

export default TicketPage;
