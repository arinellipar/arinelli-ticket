import Link from "next/link";
import { ticketsPath } from "@/paths";
import Heading from "@/components/heading";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Home"
        description="Olá, bem-vindo(a) ao sistema de tickets."
      />

      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="underline">
          Acessar Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
