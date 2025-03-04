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
import { Separator } from "@/components/ui/separator";

const TICKET_ICONS = {
  ABERTO: "A",
  EM_ANDAMENTO: "E",
  FINALIZADO: "F",
};

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Sistema de Tickets
        </h2>
        <p className="text-sm text-muted-foreground">
          Te ajudaremos a solucionar seu caso.
        </p>
      </div>

      <Separator />

      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-down animate-duration-2000">
        {initialTickets.map((ticket) => (
          <Card key={ticket.id} className="w-full max-w-[420px]">
            <CardHeader>
              <CardTitle className="flex gap-x-2">
                <span>{TICKET_ICONS[ticket.status]}</span>
                <span className="truncate">{ticket.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="line-clamp-3 whitespace-break-spaces">
                {ticket.content}
              </span>
            </CardContent>
            <CardFooter>
              <Link href={ticketPath(ticket.id)} className="text-sm underline">
                Acessar
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
