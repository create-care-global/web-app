import Box from '@material-ui/core/Box';
import Block from 'common/components/Block';
import H1 from 'common/components/H1';
import Main from 'common/components/Main';
import React from 'react';
import ProjectsGrid from './ProjectsGrid';

const Projects = () => {
  return (
    <Main>
      <Block size="md">
        <Box mt={4} />
        <H1>Explore the MicroNeeds... And find one you can solve</H1>
        <ProjectsGrid />
      </Block>
    </Main>
  );
};

export default Projects;
