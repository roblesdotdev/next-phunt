import { PrismaClient } from "@prisma/client";
import { createPosts } from "./utils";

const prisma = new PrismaClient();

async function seed() {
  console.log("🌱 Seeding...");

  console.time("Clear db");
  prisma.post.deleteMany({ where: {} });
  console.timeEnd("Clear db");

  console.time("Intert posts");
  await Promise.all(createPosts().map((p) => prisma.post.create({ data: p })));
  console.timeEnd("Intert posts");

  console.time(`🌱 Database has been seeded`);
}

seed()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
