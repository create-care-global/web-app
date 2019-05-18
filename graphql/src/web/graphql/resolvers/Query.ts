import { QueryResolvers } from 'src/web/graphql/generated/graphqlgen';
import getProjectFeed from './queries/getProjectFeed';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  getProjectFeed,
  user: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  }
};
