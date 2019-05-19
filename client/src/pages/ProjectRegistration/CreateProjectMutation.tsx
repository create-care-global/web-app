import MutationProps from 'common/helpers/typings/MutationProps';
import gql from 'graphql-tag';
import React from 'react';
import { Mutation, MutationFn } from 'react-apollo';
import {
  CreateProject,
  CreateProjectVariables
} from './__generated__/CreateProject';

const CREATE_PROJECT_MUTATION = gql`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
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
        personalMessage
        characteristics {
          id
          name
        }
      }
    }
  }
`;

export type CreateProjectMutationFn = MutationFn<
  CreateProject,
  CreateProjectVariables
>;

const CreateProjectMutation: React.FunctionComponent<
  MutationProps<CreateProject, CreateProjectVariables>
> = props => (
  <Mutation<CreateProject, CreateProjectVariables>
    {...props}
    mutation={CREATE_PROJECT_MUTATION}
  />
);

export default CreateProjectMutation;
