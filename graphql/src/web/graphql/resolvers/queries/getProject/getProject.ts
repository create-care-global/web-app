import { throwDatabaseError } from 'src/web/graphql/errors';
import { QueryResolvers } from 'src/web/graphql/generated/graphqlgen';

const getProject: QueryResolvers.GetProjectResolver = async (
  parent,
  args,
  ctx
) => {
  try {
    const project = await ctx.prisma.project({ id: args.input.id });

    if (!project) {
      throw new Error('Project ID doesn\'t exist');
    }

    return { project };
  } catch (e) {
    return throwDatabaseError();
  }
};

export default getProject;
