import { ProjectResolvers } from 'src/web/graphql/generated/graphqlgen';
import { throwDatabaseError } from '../errors';

export const Project: ProjectResolvers.Type = {
  ...ProjectResolvers.defaultResolvers,
  category: async ({ id }, args, ctx) => {
    try {
      return await ctx.prisma.project({ id }).category();
    } catch (e) {
      return throwDatabaseError();
    }
  },
  characteristics: async ({ id }, args, ctx) => {
    try {
      return await ctx.prisma.project({ id }).characteristics();
    } catch (e) {
      return throwDatabaseError();
    }
  }
};
