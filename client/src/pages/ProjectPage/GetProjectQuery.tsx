import QueryProps from 'common/helpers/typings/QueryProps';
import gql from 'graphql-tag';
import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import { GetProject } from './__generated__/GetProject';

const PROJECT_QUERY = gql`
  query GetProject($input: GetProjectInput!) {
    getProject(input: $input) {
      project {
        id
        title
        category {
          id
          name
        }
        sourceOfItems
        amountOfKidsHelped
        whyIsThisImportant
        meaningToTheKids
        microNeed
        numberOfItems
        characteristics {
          id
          name
        }
      }
    }
  }
`;

export type GetProjectQueryResult = QueryResult<GetProject>;

const GetProjectQuery: React.FunctionComponent<QueryProps<GetProject>> = (
  props: any
) => <Query<GetProject> {...props} query={PROJECT_QUERY} />;

export default GetProjectQuery;
