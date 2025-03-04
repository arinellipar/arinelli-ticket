import Link from "next/link";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Home</h2>
        <p className="text-sm text-muted-foreground">
          Olá, bem-vindo(a) ao sistema de tickets.
        </p>
      </div>

      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          Acessar Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
