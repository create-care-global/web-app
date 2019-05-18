import { Resolvers } from 'src/web/graphql/generated/graphqlgen';
import { CreateProjectPayload } from './CreateProjectPayload';
import { GetProjectFeedPayload } from './GetProjectFeedPayload';
import { LoginPayload } from './LoginPayload';
import { Mutation } from './Mutation';
import { Project } from './Project';
import { ProjectCategory } from './ProjectCategory';
import { Query } from './Query';
import { SignupPayload } from './SignupPayload';
import { User } from './User';

export const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
  SignupPayload,
  LoginPayload,
  CreateProjectPayload,
  Project,
  GetProjectFeedPayload,
  ProjectCategory
};
