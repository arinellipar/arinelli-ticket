import { homePath, ticketsPath } from "@/paths";
import { LucideTickets } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { ThemeSwitcher } from "./themes/theme-switcher";

const Header = () => {
  return (
    <nav
      className="
            supports-backdrop-blur:bg-background/60
            fixed left-0 right-0 top-0 z-20
            border-b bg-background/95 backdrop-blur
            w-full flex py-2.5 px-5 justify-between
          "
    >
      <div className="flex items-center gap-x-2">
        {/* <Button asChild variant={"outline"}> */}
        <Link
          href={homePath()}
          className={buttonVariants({ variant: "ghost" })}
        >
          <LucideTickets />
          <h1 className="text-lg font-semibold">Sistema de Ticket Fradema</h1>
        </Link>
        {/* </Button> */}
      </div>
      <div className="flex items-center gap-x-2">
        <ThemeSwitcher />
        {/* <Button asChild variant={"outline"}> */}
        <Link
          href={ticketsPath()}
          className={buttonVariants({ variant: "default" })}
        >
          Tickets
        </Link>
        {/* </Button> */}
      </div>
    </nav>
  );
};

export { Header };
