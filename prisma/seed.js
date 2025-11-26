require("dotenv").config();
const { PrismaClient } = require("@prisma/client");

console.log("Using DB:", process.env.DATABASE_URL);

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  await prisma.category.create({
    data: { name: "Test Category", slug: "test-category" },
  });

  await prisma.post.create({
    data: {
      title: "First Post",
      slug: "first-post",
      content: "<p>Hello</p>",
      excerpt: "Hello",
      categories: {
        connect: [{ slug: "test-category" }],
      },
    },
  });

  console.log("✨ Seed done!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
