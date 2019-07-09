import { Card, CardActions, CardHeader, Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import Button from '../Button';
import Link from '../Link';

interface Props {
  projects: Array<{ id: string; title: string }>;
}

const ProjectsGrid = ({ projects }: Props) => (
  <Grid container justify="space-between" spacing={3}>
    {projects.map(({ id, title }) => (
      <Grid item xs={12} sm={4} key={id}>
        <Card>
          <CardHeader title={title} />
          <CardActions>
            <Link to={`/projects/${id}`} key={id}>
              <Button>View project</Button>
            </Link>
          </CardActions>
        </Card>
        <Box mb={4} />
      </Grid>
    ))}
  </Grid>
);

export default ProjectsGrid;
