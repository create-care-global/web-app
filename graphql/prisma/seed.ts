import { hash } from '../src/helpers/utils/password';
import { prisma } from '../src/web/graphql/generated/prisma-client';

(async () => {
  await prisma.createUser({
    email: `admin+1@gmail.com`,
    firstName: 'Admin',
    lastName: 'One',
    password: await hash('12345678'),
    userGroup: JSON.stringify({ admin: true })
  });

  const numberOfUsers = 10;

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
})();
