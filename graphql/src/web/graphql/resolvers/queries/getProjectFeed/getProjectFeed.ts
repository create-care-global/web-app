import { throwDatabaseError } from 'src/web/graphql/errors';
import { QueryResolvers } from 'src/web/graphql/generated/graphqlgen';

const getProjectFeed: QueryResolvers.GetProjectFeedResolver = async (
  parent,
  args,
  ctx
) => {
  try {
    return {
      projects: await ctx.prisma.projects({
        where: {
          state_in: ['APPROVED', 'SOLVING', 'COMPLETED']
        }
      })
    };
  } catch (e) {
    return throwDatabaseError();
  }
};

export default getProjectFeed;
