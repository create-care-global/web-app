/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomeGetProjects
// ====================================================

export interface HomeGetProjects_getProjectFeed_projects {
  __typename: "Project";
  id: string;
  title: string;
}

export interface HomeGetProjects_getProjectFeed {
  __typename: "GetProjectFeedPayload";
  projects: HomeGetProjects_getProjectFeed_projects[];
}

export interface HomeGetProjects {
  getProjectFeed: HomeGetProjects_getProjectFeed;
}
