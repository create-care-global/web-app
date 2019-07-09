import { QueryResolvers } from 'src/web/graphql/generated/graphqlgen';
import getProject from './queries/getProject';
import getProjectFeed from './queries/getProjectFeed';
import getAdminProjectFeed from './queries/getAdminProjectFeed';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  getProjectFeed,
  getProject,
  getAdminProjectFeed,
  user: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },

  projectCategories: async (parent, args, ctx) => {
    return ctx.prisma.projectCategories();
  },

  projectCharacteristicGroups: async (parent, args, ctx) => {
    return ctx.prisma.projectCharacteristicGroups();
  }
};
