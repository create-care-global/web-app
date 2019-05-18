import Link from 'common/components/Link';
import Main from 'common/components/Main';
import useParams from 'common/hooks/useParams';
import React from 'react';
import GetProjectQuery from './GetProjectQuery';

const ProjectPage = () => {
  const { id } = useParams();

  return (
    <Main>
      <GetProjectQuery variables={{ input: { id } }}>
        {({ data, loading, error }) => {
          if (error || !data) {
            return <div>Unable to display project</div>;
          }
          if (loading) {
            return <div>Loading...</div>;
          }

          return (
            <>
              <h1>Project Page</h1>
              <h2>{id}</h2>
              <Link to="/projects">Home</Link>
              <div>{data.getProject.project.id}</div>
              <div>{data.getProject.project.title}</div>
            </>
          );
        }}
      </GetProjectQuery>
    </Main>
  );
};

export default ProjectPage;
