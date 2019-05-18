import Main from 'common/components/Main';
import React from 'react';
import useParams from 'common/hooks/useParams';
import Link from 'common/components/Link';
// import ProjectQuery from './ProjectsQuery';


const ProjectPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    // <ProjectQuery Query={}>
    <Main>
        <h1>Project Page</h1>
        <h2>{id}</h2>
        <Link to="/projects">Home</Link>
    </Main>
    // </ProjectQuery Query={}>
  );
};

export default ProjectPage;
