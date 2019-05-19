import Block from 'common/components/Block';
import Link from 'common/components/Link';
import Main from 'common/components/Main';
import Paper from 'common/components/Paper';
import useParams from 'common/hooks/useParams';
import React from 'react';
import GetProjectQuery from './GetProjectQuery';
import H1 from "../../common/components/H1";
import H2 from "../../common/components/H2";
import InfoCard from 'common/components/InfoCard';
import { Grid } from '@material-ui/core';
import MetricsCard from 'common/components/MetricsCard/MetricsCard';
import HelpsTriangle from 'common/components/HelpsTriangle';
import ImpactCard from "common/components/ImpactCard/ImpactCard"; 
const ProjectPage = () => {
  const { id } = useParams();

  return (
    <Main fullViewPortHeight>
      <Block size="sm" fullHeight>
        <Paper>
          <GetProjectQuery variables={{ input: { id } }}>
            {({ data, loading, error }) => {
              // if (error || !data) {
              //   return <div>Unable to display project</div>;
              // }
              // if (loading) {
              //   return <div>Loading...</div>;
              // }

              const {
                title,
                category: { name: categoryName },
                sourceOfItems,
                amountOfKidsHelped,
                whyIsThisImportant,
                meaningToTheKids,
                microNeed,
                numberOfItems,
                characteristics,
                personalMessage,
              } = //data.getProject.project;
              {
                title: "foo",
                category: {
                  name: "cat",
                },
                sourceOfItems: "aa",
                amountOfKidsHelped: 10,
                whyIsThisImportant: "aaaaa",
                meaningToTheKids: "aaaa",
                personalMessage: "message to solvers",
                microNeed: "aaa",
                numberOfItems: 10,
                characteristics: [{
                  name: "aaa"
                }
                ]
              };

              return (
                <>
                  <H1>Project Page {title}</H1>
                  <H2>{id}</H2>
                  <Link to="/projects">Home</Link>
                  {categoryName} {microNeed} {JSON.stringify(characteristics)}
                  <Grid container spacing={8} alignContent="stretch">
                    
                    <Grid item xs={12} md={6}>
                      <MetricsCard 
                      number = {numberOfItems}
                      text = {sourceOfItems}
                      />
                      {/* <FundCard> */}
                    </Grid>

                    <Grid item md={2}>
                      <HelpsTriangle />
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <ImpactCard
                        nChildren = {amountOfKidsHelped}
                        dollarValue = {350}/>
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
