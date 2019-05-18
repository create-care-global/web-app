import { CreateProjectPayloadResolvers } from 'src/web/graphql/generated/graphqlgen';

export const CreateProjectPayload: CreateProjectPayloadResolvers.Type = {
  ...CreateProjectPayloadResolvers.defaultResolvers
};
