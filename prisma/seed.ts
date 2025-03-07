import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const tickets = [
  {
    id: "1",
    title: "Título do ticket 1",
    content: "Descrição do ticket 1 from DB",
    status: "ABERTO" as const,
  },
  {
    id: "2",
    title: "Título do ticket 2",
    content: "Descrição do ticket 2 from DB",
    status: "EM_ANDAMENTO" as const,
  },
  {
    id: "3",
    title: "Título do ticket 3",
    content: "Descrição do ticket 3 from DB",
    status: "FINALIZADO" as const,
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log("DB Seed: Started ...");

  await prisma.ticket.deleteMany();

  await prisma.ticket.createMany({
    data: tickets.map((ticket) => ({
      ...ticket,
      content: ticket.content,
    })),
  });

  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0}ms)`);
};
seed();
