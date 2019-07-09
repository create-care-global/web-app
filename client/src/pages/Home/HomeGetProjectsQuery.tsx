import QueryProps from 'common/helpers/typings/QueryProps';
import gql from 'graphql-tag';
import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import { HomeGetProjects } from './__generated__/HomeGetProjects';

const HOME_PROJECTS_QUERY = gql`
  query HomeGetProjects {
    getProjectFeed {
      projects {
        id
        title
      }
    }
  }
`;

export type HomeGetProjectsQueryResult = QueryResult<HomeGetProjects>;

const HomeGetProjectsQuery: React.FunctionComponent<
  QueryProps<HomeGetProjects>
> = (props: any) => (
  <Query<HomeGetProjects> {...props} query={HOME_PROJECTS_QUERY} />
);

export default HomeGetProjectsQuery;
