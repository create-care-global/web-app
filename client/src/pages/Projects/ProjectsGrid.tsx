// This is shared in `/projects` and `/`
import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
import Button from 'common/components/Button';
import Link from 'common/components/Link';
import Text from 'common/components/Text';
import React from 'react';
import GetProjectsQuery from './GetProjectsQuery';

const ProjectsGrid = () => {
  return (
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

        return data.getProjectFeed.projects.map(
          ({ id, title, meaningToTheKids }) => (
            <Card>
              <CardHeader title={title} />
              <CardContent>
                <Text>{meaningToTheKids}</Text>
              </CardContent>
              <CardActions>
                <Link to={`/projects/${id}`} key={id}>
                  <Button>View project</Button>
                </Link>
              </CardActions>
            </Card>
          )
        );
      }}
    </GetProjectsQuery>
  );
};

export default ProjectsGrid;
