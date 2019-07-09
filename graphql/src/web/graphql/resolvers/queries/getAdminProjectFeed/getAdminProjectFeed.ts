import { throwDatabaseError } from 'src/web/graphql/errors';
import { QueryResolvers } from 'src/web/graphql/generated/graphqlgen';

const getAdminProjectFeed: QueryResolvers.GetProjectFeedResolver = async (
  parent,
  args,
  ctx
) => {
  try {
    return {
      projects: await ctx.prisma.projects()
    };
  } catch (e) {
    return throwDatabaseError();
  }
};

export default getAdminProjectFeed;
