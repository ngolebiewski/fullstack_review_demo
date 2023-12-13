const prisma = require("./src/server/client");

const users = [
  { username: "bob", password: "123" },
  { username: "bob", password: "123" },
  { username: "bob", password: "123" },
];

async function seed() {
  const bob = await prisma.user.create({
    data: {
      username: "bob",
      password: "123",
    },
  });

  const jill = await prisma.user.create({
    data: {
      username: "jill",
      password: "123",
    },
  });

  const sarah = await prisma.user.create({
    data: {
      username: "sarah",
      password: "123",
    },
  });

  const yumYumSauce = await prisma.recipe.create({
    data: {
      name: "Yum Yum Sauce",
      description: "Yummmmmmy",
      prepTime: 10,
      cookTime: 0,
      ingredients: "tomato paste, mayonaise, salt, pepper, rice vinegar",
      directions: "put ingredients in bowl. whisk until combined",
      isGlutenFree: true,
      userId: bob.id,
    },
  });

  const pbj = await prisma.recipe.create({
    data: {
      name: "peanut butter and jelly sammy",
      description: "smooth and silky",
      prepTime: 2,
      cookTime: 0,
      ingredients: "bread, smooth pb, strawberry jelly",
      directions: "slap on bread, slap together, eat",
      isGlutenFree: false,
      userId: jill.id,
    },
  });

  const macNCheese = await prisma.recipe.create({
    data: {
      name: "Mac N Cheese",
      description: "liquid gold",
      prepTime: 0,
      cookTime: 10,
      ingredients: "noodles, cheese",
      directions: "boil noodles, add cheese and stir",
      isGlutenFree: false,
      userId: sarah.id,
    },
  });
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
