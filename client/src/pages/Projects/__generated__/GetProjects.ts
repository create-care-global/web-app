/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProjects
// ====================================================

export interface GetProjects_getProjectFeed_projects {
  __typename: "Project";
  id: string;
  title: string;
}

export interface GetProjects_getProjectFeed {
  __typename: "GetProjectFeedPayload";
  projects: GetProjects_getProjectFeed_projects[];
}

export interface GetProjects {
  getProjectFeed: GetProjects_getProjectFeed;
}
