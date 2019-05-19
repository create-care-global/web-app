import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Block from 'common/components/Block';
import HelpsTriangle from 'common/components/HelpsTriangle';
import ImpactCard from 'common/components/ImpactCard/ImpactCard';
import InfoCard from 'common/components/InfoCard';
import Main from 'common/components/Main';
import MetricsCard from 'common/components/MetricsCard/MetricsCard';
import Paper from 'common/components/Paper';
import useParams from 'common/hooks/useParams';
import React from 'react';
import H1 from '../../common/components/H1';
import GetProjectQuery from './GetProjectQuery';
const ProjectPage = () => {
  const { id } = useParams();

  return (
    <Main>
      <Box mt={6} />
      <Block size="md">
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
                // category: { name: categoryName },
                // sourceOfItems,
                amountOfKidsHelped,
                whyIsThisImportant,
                meaningToTheKids,
                microNeed,
                numberOfItems,
                // characteristics,
                personalMessage
              } = data.getProject.project;

              return (
                <>
                  <H1>{title}</H1>
                  <Grid container spacing={8} alignContent="stretch">
                    <Grid item xs={12} md={6}>
                      <MetricsCard number={numberOfItems} text={microNeed} />
                    </Grid>

                    <Grid item md={2}>
                      <HelpsTriangle />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <ImpactCard
                        nChildren={amountOfKidsHelped}
                        dollarValue={350}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={8} alignContent="stretch">
                    <Grid item xs={12} md={4}>
                      <InfoCard title="Why is this important:">
                        {whyIsThisImportant}
                      </InfoCard>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <InfoCard title="The difference it will make">
                        {meaningToTheKids}
                      </InfoCard>
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <InfoCard title="Message for the solvers!">
                        {personalMessage}
                      </InfoCard>
                    </Grid>
                  </Grid>
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
