import { ProjectResolvers } from 'src/web/graphql/generated/graphqlgen';

export const Project: ProjectResolvers.Type = {
  ...ProjectResolvers.defaultResolvers,

  category: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
