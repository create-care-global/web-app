import Block from 'common/components/Block';
import Link from 'common/components/Link';
import Main from 'common/components/Main';
import Paper from 'common/components/Paper';
import useParams from 'common/hooks/useParams';
import React from 'react';
import GetProjectQuery from './GetProjectQuery';

const ProjectPage = () => {
  const { id } = useParams();

  return (
    <Main fullViewPortHeight>
      <Block size="sm" fullHeight>
        <Paper>
          <GetProjectQuery variables={{ input: { id } }}>
            {({ data, loading, error }) => {
              if (error || !data) {
                return <div>Unable to display project</div>;
              }
              if (loading) {
                return <div>Loading...</div>;
              }

              const {
                title,
                category: { name: categoryName },
                sourceOfItems,
                amountOfKidsHelped,
                whyIsThisImportant,
                meaningToTheKids,
                microNeed,
                numberOfItems,
                characteristics
              } = data.getProject.project;

              return (
                <>
                  <h1>Project Page</h1>
                  <h2>{id}</h2>
                  <Link to="/projects">Home</Link>
                  <div>Project title: {title}</div>
                  <div>Category: {categoryName}</div>
                  <div>Source: {sourceOfItems}</div>
                  <div>
                    MicroNeed: {microNeed} for {numberOfItems} for{' '}
                    {amountOfKidsHelped} kids
                  </div>
                  <div>Why is this important: {whyIsThisImportant}</div>
                  <div>What this means to the kid: {meaningToTheKids}</div>
                  <div>Characteristics:</div>
                  {characteristics.map(characteristic => (
                    <div>{characteristic.name}</div>
                  ))}
                </>
              );
            }}
          </GetProjectQuery>
        </Paper>
      </Block>
    </Main>
  );
};

export default ProjectPage;
