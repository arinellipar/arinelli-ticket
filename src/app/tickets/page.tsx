import Heading from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { Suspense } from "react";

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Sistema de Tickets"
        description="Te ajudaremos a solucionar seu caso."
      />

      <Suspense fallback={<Spinner />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
