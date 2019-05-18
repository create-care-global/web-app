/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { GetProjectInput, SourceOfItems } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetProject
// ====================================================

export interface GetProject_getProject_project_category {
  __typename: "ProjectCategory";
  id: string;
  name: string;
}

export interface GetProject_getProject_project_characteristics {
  __typename: "ProjectCharacteristic";
  id: string;
  name: string;
}

export interface GetProject_getProject_project {
  __typename: "Project";
  id: string;
  title: string;
  category: GetProject_getProject_project_category;
  sourceOfItems: SourceOfItems;
  amountOfKidsHelped: number;
  whyIsThisImportant: string;
  meaningToTheKids: string;
  microNeed: string;
  numberOfItems: number;
  characteristics: GetProject_getProject_project_characteristics[];
}

export interface GetProject_getProject {
  __typename: "GetProjectPayload";
  project: GetProject_getProject_project;
}

export interface GetProject {
  getProject: GetProject_getProject;
}

export interface GetProjectVariables {
  input: GetProjectInput;
}
