import { ProjectResolvers } from 'src/web/graphql/generated/graphqlgen';

export const Project: ProjectResolvers.Type = {
  ...ProjectResolvers.defaultResolvers
};
