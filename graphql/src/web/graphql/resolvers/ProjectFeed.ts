import { ProjectFeedResolvers } from 'src/web/graphql/generated/graphqlgen';

export const ProjectFeed: ProjectFeedResolvers.Type = {
  ...ProjectFeedResolvers.defaultResolvers
};
