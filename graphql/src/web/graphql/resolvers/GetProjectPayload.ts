import { GetProjectPayloadResolvers } from 'src/web/graphql/generated/graphqlgen';

export const GetProjectPayload: GetProjectPayloadResolvers.Type = {
  ...GetProjectPayloadResolvers.defaultResolvers
};
