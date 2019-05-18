import { Resolvers } from 'src/web/graphql/generated/graphqlgen';
import { LoginPayload } from 'src/web/graphql/resolvers/LoginPayload';
import { Mutation } from 'src/web/graphql/resolvers/Mutation';
import { Query } from 'src/web/graphql/resolvers/Query';
import { SignupPayload } from 'src/web/graphql/resolvers/SignupPayload';
import { User } from 'src/web/graphql/resolvers/User';
import { CreateProjectPayload } from 'src/web/graphql/resolvers/CreateProjectPayload';
import { Project } from 'src/web/graphql/resolvers/Project';

export const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
  SignupPayload,
  LoginPayload,
  CreateProjectPayload,
  Project
};
