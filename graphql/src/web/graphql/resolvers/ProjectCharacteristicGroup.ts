import { ProjectCharacteristicGroupResolvers } from 'src/web/graphql/generated/graphqlgen';

export const ProjectCharacteristicGroup: ProjectCharacteristicGroupResolvers.Type = {
  ...ProjectCharacteristicGroupResolvers.defaultResolvers,

  items: async (parent, args, ctx) => {
    return ctx.prisma.projectCharacteristicGroup({ id: parent.id }).items();
  },
};
