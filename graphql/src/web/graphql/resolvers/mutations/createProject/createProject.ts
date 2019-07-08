import { throwDatabaseError } from 'src/web/graphql/errors';
import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';

const createProject: MutationResolvers.CreateProjectResolver = async (
  parent,
  {
    input: {
      title,
      categoryId,
      characteristicIds,
      sourceOfItems,
      amountOfKidsHelped,
      whyIsThisImportant,
      meaningToTheKids,
      microNeed,
      numberOfItems,
      estimatedCost,
      personalMessage
    }
  },
  ctx
) => {
  try {
    const project = await ctx.prisma.createProject({
      title,
      amountOfKidsHelped,
      sourceOfItems,
      whyIsThisImportant,
      meaningToTheKids,
      microNeed,
      numberOfItems,
      estimatedCost,
      personalMessage,
      category: {
        connect: categoryId ? { id: categoryId } : undefined
      },
      characteristics: {
        connect: characteristicIds.map(id => ({ id }))
      },
      state: 'PENDING'
    });

    return { project };
  } catch (e) {
    return throwDatabaseError('Unable to create new microneed');
  }
};

export default createProject;
