import { Spinner } from "@/components/spinner";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";
import { Suspense } from "react";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <Suspense fallback={<Spinner />}>
      <div className="flex justify-center animate-fade-down animate-duration-2000">
        <TicketItem ticket={ticket} isDetail={true} />
      </div>
    </Suspense>
  );
};

export default TicketPage;
