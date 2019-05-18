import gql from 'graphql-tag';
import React from 'react';
import { Query } from 'react-apollo';

const PROJECT_QUERY = gql`
  query {
  }
`;

const ProjectQuery: React.FunctionComponent
  = (props :any ) => (
  <Query {...props} query={PROJECT_QUERY} />
);

export default ProjectQuery;
