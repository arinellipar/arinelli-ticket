import Link from "next/link";
import { initialTickets } from "@/data";
import { ticketPath } from "@/paths";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";
import Heading from "@/components/heading";

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Sistema de Tickets"
        description="Te ajudaremos a solucionar seu caso."
      />

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-down animate-duration-2000">
        {initialTickets.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
