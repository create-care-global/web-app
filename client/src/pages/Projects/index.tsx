import Main from 'common/components/Main';
// import ProjectQuery from './ProjectsQuery';
import React from 'react';
import Link from 'common/components/Link';

const mockArray = [
    {id:1, title: 'asdf', desc:'aaaa'}, 
    {id:2, title: 'asba', desc: 'bbbb'}
];

const Projects = () => {
  return (
    // <ProjectQuery>
        <Main>
        <h1>Projects</h1>
        {
            mockArray.map(project => {
                return (
                <Link to={`/projects/${project.id}`}>
                    <div key={String(project.id) + project.title}>
                        <h2>{project.title}</h2>
                        <p>{project.desc}</p>
                    </div>
                </Link>
                
                )
            })
        }
        </Main>
    // </ProjectQuery>
  );
};



export default Projects;
