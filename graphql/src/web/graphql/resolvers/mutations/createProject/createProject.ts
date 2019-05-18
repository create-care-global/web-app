import { ResolverContext } from 'src/types';
import { throwDatabaseError } from 'src/web/graphql/errors';
import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';
import { Project as PrismaProject } from 'src/web/graphql/generated/prisma-client';

type CreatePrismaProjectFn = (
  ctx: ResolverContext,
  input: MutationResolvers.CreateProjectInput
) => Promise<{ result?: PrismaProject; error?: Error }>;

const createPrismaProject: CreatePrismaProjectFn = async (ctx, input) => {
  try {
    const result = await ctx.prisma.createProject(input);
    return { result };
  } catch (error) {
    return { error };
  }
};

const createProject: MutationResolvers.CreateProjectResolver = async (parent, args, ctx) => {
  const { result: project, error } = await createPrismaProject(ctx, args.input);

  if (error || !project) {
    return throwDatabaseError('Unable to create new user');
  }

  const { id, title } = project;

  return {
    project: { id, title }
  };
};

export default createProject;
