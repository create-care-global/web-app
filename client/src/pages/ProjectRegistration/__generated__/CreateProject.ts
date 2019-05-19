/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CreateProjectInput, SourceOfItems } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateProject
// ====================================================

export interface CreateProject_createProject_project_category {
  __typename: "ProjectCategory";
  id: string;
  name: string;
}

export interface CreateProject_createProject_project_characteristics {
  __typename: "ProjectCharacteristic";
  id: string;
  name: string;
}

export interface CreateProject_createProject_project {
  __typename: "Project";
  id: string;
  title: string;
  category: CreateProject_createProject_project_category;
  sourceOfItems: SourceOfItems;
  amountOfKidsHelped: number;
  whyIsThisImportant: string;
  meaningToTheKids: string;
  microNeed: string;
  numberOfItems: number;
  personalMessage: string;
  characteristics: CreateProject_createProject_project_characteristics[];
}

export interface CreateProject_createProject {
  __typename: "CreateProjectPayload";
  project: CreateProject_createProject_project;
}

export interface CreateProject {
  createProject: CreateProject_createProject;
}

export interface CreateProjectVariables {
  input: CreateProjectInput;
}
