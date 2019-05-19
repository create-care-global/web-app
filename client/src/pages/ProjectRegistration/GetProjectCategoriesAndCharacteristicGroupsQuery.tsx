import QueryProps from 'common/helpers/typings/QueryProps';
import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';
import { GetProjectCategoriesAndCharacteristicGroups } from './__generated__/GetProjectCategoriesAndCharacteristicGroups';

const PROJECT_CATEGORIES_AND_CHARACTERISTIC_QUERY = gql`
  query GetProjectCategoriesAndCharacteristicGroups {
    projectCategories {
      id
      name
    }
    projectCharacteristicGroups {
      id
      name
      items {
        id
        name
      }
    }
  }
`;

const GetProjectCategoriesAndCharacteristicGroupsQuery: React.FunctionComponent<
  QueryProps<GetProjectCategoriesAndCharacteristicGroups>
> = props => (
  <Query<GetProjectCategoriesAndCharacteristicGroups>
    {...props}
    query={PROJECT_CATEGORIES_AND_CHARACTERISTIC_QUERY}
  />
);

export default GetProjectCategoriesAndCharacteristicGroupsQuery;
