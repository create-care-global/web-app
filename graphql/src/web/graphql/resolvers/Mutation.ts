import { MutationResolvers } from 'src/web/graphql/generated/graphqlgen';
import createProject from './mutations/createProject';
import login from './mutations/login';
import logout from './mutations/logout';
import signup from './mutations/signup';

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  signup,
  login,
  logout,
  createProject
};
