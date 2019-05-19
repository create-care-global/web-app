import Link from 'common/components/Link';
import Main from 'common/components/Main';
import React from 'react';
import GetProjectsQuery from './GetProjectsQuery';

// const mockArray = [
//   { id: 1, title: 'asdf', desc: 'aaaa' },
//   { id: 2, title: 'asba', desc: 'bbbb' }
// ];

const Projects = () => {
  return (
    <Main>
      <h1>Projects</h1>
      <GetProjectsQuery>
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

          return data.getProjectFeed.projects.map(project => (
            <Link to={`/projects/${project.id}`}>
              <div key={String(project.id) + project.title}>
                <h2>{project.title}</h2>
              </div>
            </Link>
          ));
        }}
      </GetProjectsQuery>
    </Main>
  );
};

export default Projects;
