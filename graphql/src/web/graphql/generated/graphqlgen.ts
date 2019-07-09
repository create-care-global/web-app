// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from 'graphql';
import {
  GetProjectFeedPayload,
  Project,
  ProjectCategory,
  ProjectCharacteristic,
  ProjectCharacteristicGroup,
  GetProjectPayload,
  User,
  CreateProjectPayload,
  SignupPayload,
  LoginPayload
} from '../models';
import { ResolverContext } from '../../../types';

type SourceOfItems = 'LOCAL' | 'DIRECT' | 'OTHER';
type ProjectState = 'PENDING' | 'APPROVED' | 'SOLVING' | 'COMPLETED';

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface GetProjectInput {
    id: string;
  }

  export interface ArgsGetProject {
    input: GetProjectInput;
  }

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

  export type ProjectCharacteristicGroupsResolver = (
    parent: undefined,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => ProjectCharacteristicGroup[] | Promise<ProjectCharacteristicGroup[]>;

  export type GetProjectResolver = (
    parent: undefined,
    args: ArgsGetProject,
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => GetProjectPayload | Promise<GetProjectPayload>;

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

    projectCharacteristicGroups: (
      parent: undefined,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => ProjectCharacteristicGroup[] | Promise<ProjectCharacteristicGroup[]>;

    getProject: (
      parent: undefined,
      args: ArgsGetProject,
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => GetProjectPayload | Promise<GetProjectPayload>;

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
    title: (parent: Project) => parent.title,
    amountOfKidsHelped: (parent: Project) => parent.amountOfKidsHelped,
    whyIsThisImportant: (parent: Project) => parent.whyIsThisImportant,
    meaningToTheKids: (parent: Project) => parent.meaningToTheKids,
    microNeed: (parent: Project) => parent.microNeed,
    numberOfItems: (parent: Project) => parent.numberOfItems,
    sourceOfItems: (parent: Project) => parent.sourceOfItems,
    estimatedCost: (parent: Project) => parent.estimatedCost,
    personalMessage: (parent: Project) => parent.personalMessage,
    state: (parent: Project) => parent.state
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

  export type SourceOfItemsResolver = (
    parent: Project,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => SourceOfItems | Promise<SourceOfItems>;

  export type AmountOfKidsHelpedResolver = (
    parent: Project,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type WhyIsThisImportantResolver = (
    parent: Project,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type MeaningToTheKidsResolver = (
    parent: Project,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type MicroNeedResolver = (
    parent: Project,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NumberOfItemsResolver = (
    parent: Project,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type CharacteristicsResolver = (
    parent: Project,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => ProjectCharacteristic[] | Promise<ProjectCharacteristic[]>;

  export type EstimatedCostResolver = (
    parent: Project,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type PersonalMessageResolver = (
    parent: Project,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type StateResolver = (
    parent: Project,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => ProjectState | Promise<ProjectState>;

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

    sourceOfItems: (
      parent: Project,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => SourceOfItems | Promise<SourceOfItems>;

    amountOfKidsHelped: (
      parent: Project,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => number | Promise<number>;

    whyIsThisImportant: (
      parent: Project,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    meaningToTheKids: (
      parent: Project,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    microNeed: (
      parent: Project,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    numberOfItems: (
      parent: Project,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => number | Promise<number>;

    characteristics: (
      parent: Project,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => ProjectCharacteristic[] | Promise<ProjectCharacteristic[]>;

    estimatedCost: (
      parent: Project,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => number | Promise<number>;

    personalMessage: (
      parent: Project,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    state: (
      parent: Project,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => ProjectState | Promise<ProjectState>;
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

export namespace ProjectCharacteristicResolvers {
  export const defaultResolvers = {
    id: (parent: ProjectCharacteristic) => parent.id,
    name: (parent: ProjectCharacteristic) => parent.name
  };

  export type IdResolver = (
    parent: ProjectCharacteristic,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: ProjectCharacteristic,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: ProjectCharacteristic,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: ProjectCharacteristic,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace ProjectCharacteristicGroupResolvers {
  export const defaultResolvers = {
    id: (parent: ProjectCharacteristicGroup) => parent.id,
    name: (parent: ProjectCharacteristicGroup) => parent.name
  };

  export type IdResolver = (
    parent: ProjectCharacteristicGroup,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: ProjectCharacteristicGroup,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ItemsResolver = (
    parent: ProjectCharacteristicGroup,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => ProjectCharacteristic[] | Promise<ProjectCharacteristic[]>;

  export interface Type {
    id: (
      parent: ProjectCharacteristicGroup,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: ProjectCharacteristicGroup,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    items: (
      parent: ProjectCharacteristicGroup,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => ProjectCharacteristic[] | Promise<ProjectCharacteristic[]>;
  }
}

export namespace GetProjectPayloadResolvers {
  export const defaultResolvers = {
    project: (parent: GetProjectPayload) => parent.project
  };

  export type ProjectResolver = (
    parent: GetProjectPayload,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => Project | Promise<Project>;

  export interface Type {
    project: (
      parent: GetProjectPayload,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => Project | Promise<Project>;
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    email: (parent: User) => parent.email,
    firstName: (parent: User) => parent.firstName,
    lastName: (parent: User) => parent.lastName,
    displayName: (parent: User) =>
      parent.displayName === undefined ? null : parent.displayName,
    userGroup: (parent: User) => parent.userGroup
  };

  export type IdResolver = (
    parent: User,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UserGroupResolver = (
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

    userGroup: (
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
    sourceOfItems: SourceOfItems;
    amountOfKidsHelped: number;
    whyIsThisImportant: string;
    meaningToTheKids: string;
    microNeed: string;
    numberOfItems: number;
    characteristicIds: string[];
    estimatedCost: number;
    personalMessage: string;
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
  ProjectCharacteristic: ProjectCharacteristicResolvers.Type;
  ProjectCharacteristicGroup: ProjectCharacteristicGroupResolvers.Type;
  GetProjectPayload: GetProjectPayloadResolvers.Type;
  User: UserResolvers.Type;
  Mutation: MutationResolvers.Type;
  CreateProjectPayload: CreateProjectPayloadResolvers.Type;
  SignupPayload: SignupPayloadResolvers.Type;
  LoginPayload: LoginPayloadResolvers.Type;
}
