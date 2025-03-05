"use client";

import Heading from "@/components/heading";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { Ticket } from "@/features/ticket/types";
import { useEffect, useState } from "react";
import { getTickets } from "@/features/ticket/queries/get-tickets";
import { initialTickets } from "@/data";

const TicketsPage = () => {
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);

  useEffect(() => {
    const fetchTickets = async () => {
      const result = await getTickets();
      setTickets(result);
    };

    fetchTickets();
  }, []);

  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Sistema de Tickets"
        description="Te ajudaremos a solucionar seu caso."
      />

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-down animate-duration-2000">
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
