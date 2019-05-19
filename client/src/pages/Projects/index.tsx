import Block from 'common/components/Block';
import H1 from 'common/components/H1';
import Main from 'common/components/Main';
import React from 'react';
import ProjectsGrid from './ProjectsGrid';

const Projects = () => {
  return (
    <Main>
      <Block size="md">
        <H1>Projects</H1>
        <ProjectsGrid />
      </Block>
    </Main>
  );
};

export default Projects;
