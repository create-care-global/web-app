/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { GetProjectInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetProject
// ====================================================

export interface GetProject_getProject_project {
  __typename: "Project";
  id: string;
  title: string;
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
