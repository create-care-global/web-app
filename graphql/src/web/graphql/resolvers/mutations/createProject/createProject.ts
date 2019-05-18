import { ResolverContext } from 'src/types';
import { throwDatabaseError } from 'src/web/graphql/errors';
import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';
import { Project as PrismaProject } from 'src/web/graphql/generated/prisma-client';

type CreatePrismaProjectFn = (
  ctx: ResolverContext,
  input: MutationResolvers.CreateProjectInput
) => Promise<{ project?: PrismaProject; error?: Error }>;

const createPrismaProject: CreatePrismaProjectFn = async (ctx, { title, categoryId, characteristicIds }) => {
  try {
    const project = await ctx.prisma.createProject({
      title,
      category: {
        connect: { id: categoryId }
      },
      characteristics: {
        connect: characteristicIds.map(id => ({ id }))
      }
    });

    return { project };
  } catch (error) {
    return { error };
  }
};

const createProject: MutationResolvers.CreateProjectResolver = async (parent, args, ctx) => {
  const { input } = args;
  const { project, error } = await createPrismaProject(ctx, input);

  if (error || !project) {
    return throwDatabaseError('Unable to create new user');
  }

  return { project };
};

export default createProject;
