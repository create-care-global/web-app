import { hash } from '../src/helpers/utils/password';
import { prisma } from '../src/web/graphql/generated/prisma-client';

(async () => {
  const numberOfUsers = 10;
  const numberOfCharacteristicGroups = 4;
  const numberOfProjects = 3;

  // 1. Create users
  await prisma.createUser({
    email: `admin+1@gmail.com`,
    firstName: 'Admin',
    lastName: 'One',
    password: await hash('12345678'),
    userGroup: JSON.stringify({ admin: true })
  });

  new Array(numberOfUsers).fill(0).forEach(async (value, index) => {
    await prisma.createUser({
      email: `solver+${index}@gmail.com`,
      firstName: 'Solver',
      lastName: String(index),
      password: await hash('12345678'),
      userGroup: JSON.stringify({ solver: true })
    });
  });

  new Array(numberOfUsers).fill(0).forEach(async (value, index) => {
    await prisma.createUser({
      email: `driver+${index}@gmail.com`,
      firstName: 'Driver',
      lastName: String(index),
      password: await hash('12345678'),
      userGroup: JSON.stringify({ driver: true })
    });
  });

  // 2. Create characteristic and groups
  new Array(numberOfCharacteristicGroups)
    .fill(0)
    .forEach(async (value, index) => {
      await prisma.createProjectCharacteristicGroup({
        name: `CharacteristicGroup#${index + 1}`,
        items: {
          create: [
            { name: `Characteristic#${index + 1}-1` },
            { name: `Characteristic#${index + 1}-2` },
            { name: `Characteristic#${index + 1}-3` },
            { name: `Characteristic#${index + 1}-4` }
          ]
        }
      });
    });

  // 3. Create categories
  const categoryA = await prisma.createProjectCategory({ name: 'Category A' });
  const characteristics = await prisma.projectCharacteristics();

  // 4. Create Projects
  new Array(numberOfProjects).fill(0).forEach(async (value, index) => {
    await prisma.createProject({
      title: `Project#${index + 1}`,
      amountOfKidsHelped: index + 1,
      sourceOfItems: 'DIRECT',
      whyIsThisImportant: 'Because kids find these important!',
      meaningToTheKids: 'It\'s very meaningful to the kids',
      microNeed: 'Shoes',
      numberOfItems: index + 1,
      estimatedCost: index + 1,
      personalMessage: 'My personal message is I love kids',
      category: {
        connect: { id: categoryA.id }
      },
      characteristics: {
        connect: { id: characteristics[0].id }
      },
      state: 'COMPLETED'
    });
  });
})();
