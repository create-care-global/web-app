import QueryProps from 'common/helpers/typings/QueryProps';
import gql from 'graphql-tag';
import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import { GetProjects } from './__generated__/GetProjects';

const PROJECT_QUERY = gql`
  query GetProjects {
    getProjectFeed {
      projects {
        id
        title
      }
    }
  }
`;

export type GetProjectsQueryResult = QueryResult<GetProjects>;

const GetProjectsQuery: React.FunctionComponent<QueryProps<GetProjects>> = (
  props: any
) => <Query<GetProjects> {...props} query={PROJECT_QUERY} />;

export default GetProjectsQuery;
