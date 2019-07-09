import Box from '@material-ui/core/Box';
import Block from 'common/components/Block';
import H1 from 'common/components/H1';
import Main from 'common/components/Main';
import ProjectsGrid from 'common/components/ProjectsGrid';
import React from 'react';
import GetProjectsQuery from './GetProjectsQuery';

const Projects = () => {
  return (
    <Main>
      <Block size="md">
        <Box mt={4} />
        <H1>Explore the MicroNeeds... And find one you can solve</H1>
        <GetProjectsQuery fetchPolicy="network-only">
          {({ data, loading, error }) => {
            if (error) {
              return <div>Error...</div>;
            }
            if (loading) {
              return <div>Loading...</div>;
            }

            if (!data || !data.getProjectFeed) {
              return <div>Empty...</div>;
            }

            return <ProjectsGrid projects={data.getProjectFeed.projects} />;
          }}
        </GetProjectsQuery>
      </Block>
    </Main>
  );
};

export default Projects;
