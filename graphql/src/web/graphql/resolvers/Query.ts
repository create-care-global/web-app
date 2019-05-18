import { QueryResolvers } from 'src/web/graphql/generated/graphqlgen';
import getProject from './queries/getProject';
import getProjectFeed from './queries/getProjectFeed';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  getProjectFeed,
  getProject,
  user: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },

  projectCategories: async (parent, args, ctx) => {
    return ctx.prisma.projectCategories();
  },

  projectCharacteristicGroups: async (parent, args, ctx) => {
    return ctx.prisma.projectCharacteristicGroups();
  },
};
