// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from 'graphql';
import {
  GetProjectFeedPayload,
  Project,
  ProjectCategory,
  User,
  CreateProjectPayload,
  SignupPayload,
  LoginPayload
} from '../models';
import { ResolverContext } from '../../../types';

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ArgsUser {
    id: string;
  }

  export type GetProjectFeedResolver = (
    parent: undefined,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => GetProjectFeedPayload | Promise<GetProjectFeedPayload>;

  export type ProjectCategoriesResolver = (
    parent: undefined,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => ProjectCategory[] | Promise<ProjectCategory[]>;

  export type UserResolver = (
    parent: undefined,
    args: ArgsUser,
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => User | null | Promise<User | null>;

  export interface Type {
    getProjectFeed: (
      parent: undefined,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => GetProjectFeedPayload | Promise<GetProjectFeedPayload>;

    projectCategories: (
      parent: undefined,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => ProjectCategory[] | Promise<ProjectCategory[]>;

    user: (
      parent: undefined,
      args: ArgsUser,
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => User | null | Promise<User | null>;
  }
}

export namespace GetProjectFeedPayloadResolvers {
  export const defaultResolvers = {
    projects: (parent: GetProjectFeedPayload) => parent.projects
  };

  export type ProjectsResolver = (
    parent: GetProjectFeedPayload,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => Project[] | Promise<Project[]>;

  export interface Type {
    projects: (
      parent: GetProjectFeedPayload,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => Project[] | Promise<Project[]>;
  }
}

export namespace ProjectResolvers {
  export const defaultResolvers = {
    id: (parent: Project) => parent.id,
    title: (parent: Project) => parent.title
  };

  export type IdResolver = (
    parent: Project,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TitleResolver = (
    parent: Project,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CategoryResolver = (
    parent: Project,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => ProjectCategory | Promise<ProjectCategory>;

  export interface Type {
    id: (
      parent: Project,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    title: (
      parent: Project,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    category: (
      parent: Project,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => ProjectCategory | Promise<ProjectCategory>;
  }
}

export namespace ProjectCategoryResolvers {
  export const defaultResolvers = {
    id: (parent: ProjectCategory) => parent.id,
    name: (parent: ProjectCategory) => parent.name
  };

  export type IdResolver = (
    parent: ProjectCategory,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: ProjectCategory,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: ProjectCategory,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: ProjectCategory,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    email: (parent: User) => parent.email,
    firstName: (parent: User) => parent.firstName,
    lastName: (parent: User) => parent.lastName,
    displayName: (parent: User) =>
      parent.displayName === undefined ? null : parent.displayName
  };

  export type IdResolver = (
    parent: User,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EmailResolver = (
    parent: User,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type FirstNameResolver = (
    parent: User,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type LastNameResolver = (
    parent: User,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DisplayNameResolver = (
    parent: User,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type {
    id: (
      parent: User,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    email: (
      parent: User,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    firstName: (
      parent: User,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    lastName: (
      parent: User,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    displayName: (
      parent: User,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface CreateProjectInput {
    title: string;
    categoryId: string;
  }
  export interface SignupInput {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    group: string;
  }
  export interface LoginInput {
    email: string;
    password: string;
  }

  export interface ArgsCreateProject {
    input: CreateProjectInput;
  }

  export interface ArgsSignup {
    input: SignupInput;
  }

  export interface ArgsLogin {
    input: LoginInput;
  }

  export type CreateProjectResolver = (
    parent: undefined,
    args: ArgsCreateProject,
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => CreateProjectPayload | Promise<CreateProjectPayload>;

  export type SignupResolver = (
    parent: undefined,
    args: ArgsSignup,
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => SignupPayload | Promise<SignupPayload>;

  export type LoginResolver = (
    parent: undefined,
    args: ArgsLogin,
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => LoginPayload | null | Promise<LoginPayload | null>;

  export type LogoutResolver = (
    parent: undefined,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export interface Type {
    createProject: (
      parent: undefined,
      args: ArgsCreateProject,
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => CreateProjectPayload | Promise<CreateProjectPayload>;

    signup: (
      parent: undefined,
      args: ArgsSignup,
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => SignupPayload | Promise<SignupPayload>;

    login: (
      parent: undefined,
      args: ArgsLogin,
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => LoginPayload | null | Promise<LoginPayload | null>;

    logout: (
      parent: undefined,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;
  }
}

export namespace CreateProjectPayloadResolvers {
  export const defaultResolvers = {
    project: (parent: CreateProjectPayload) => parent.project
  };

  export type ProjectResolver = (
    parent: CreateProjectPayload,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => Project | Promise<Project>;

  export interface Type {
    project: (
      parent: CreateProjectPayload,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => Project | Promise<Project>;
  }
}

export namespace SignupPayloadResolvers {
  export const defaultResolvers = {
    user: (parent: SignupPayload) => parent.user
  };

  export type UserResolver = (
    parent: SignupPayload,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => User | Promise<User>;

  export interface Type {
    user: (
      parent: SignupPayload,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => User | Promise<User>;
  }
}

export namespace LoginPayloadResolvers {
  export const defaultResolvers = {
    user: (parent: LoginPayload) => parent.user
  };

  export type UserResolver = (
    parent: LoginPayload,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => User | Promise<User>;

  export interface Type {
    user: (
      parent: LoginPayload,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => User | Promise<User>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  GetProjectFeedPayload: GetProjectFeedPayloadResolvers.Type;
  Project: ProjectResolvers.Type;
  ProjectCategory: ProjectCategoryResolvers.Type;
  User: UserResolvers.Type;
  Mutation: MutationResolvers.Type;
  CreateProjectPayload: CreateProjectPayloadResolvers.Type;
  SignupPayload: SignupPayloadResolvers.Type;
  LoginPayload: LoginPayloadResolvers.Type;
}
