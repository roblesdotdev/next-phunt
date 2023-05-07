import { Prisma } from "@prisma/client";
import { faker } from "@faker-js/faker";

export function createPosts(
  count: number | undefined = 15
): Prisma.PostCreateInput[] {
  return Array.from({ length: count }, () => {
    const title = faker.commerce.productName();
    return {
      slug: slugify(title),
      title: title,
      description: faker.commerce.productDescription(),
      url: faker.internet.url(),
      isFree: faker.datatype.boolean(),
    };
  });
}

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
