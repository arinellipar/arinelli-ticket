import Link from "next/link";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-lg">HomePage</h2>

      <Link href={ticketsPath()} className="underline">
        Acessar Tickets
      </Link>
    </div>
  );
};

export default HomePage;
