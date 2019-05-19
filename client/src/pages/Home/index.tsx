import { Grid } from '@material-ui/core';
import Link from 'common/components/Link';
import React from 'react';
// import ProjectsQuery from '../Projects/GetProjectsQuery';

// Images

// import jenny from '../../common/assets/jenny.jpg';

// Images
// import frontPageFooterImage from '../../common/assets/front-page-footer-image.png';
// import speech from '../../common/assets/speech.png';
// import makeADifference from '../../common/assets/makeADifference.png';
// import smallActBigImpact from '../../common/assets/smallActBigImpact.png';

import Box from '@material-ui/core/Box';
import Block from 'common/components/Block';
import Button from 'common/components/Button';
import ProjectsGrid from 'pages/Projects/ProjectsGrid';
import './Home.css';

// const mockArray = [1, 2, 3, 4, 5, 6, 7]
const Home = () => {
  return (
    <div style={{ marginTop: '5rem' }}>
      {/* Header Section */}

      <div style={{ backgroundColor: '#455560' }}>
        <Block size="md">
          <Box mt={2} />
          <ProjectsGrid />

          <div style={{ margin: '0 auto' }}>
            <Link to="/projects">
              <Button fullWidth={false}>Show more</Button>
            </Link>
          </div>
          <Box mb={2} />
        </Block>
      </div>
      {/* Small act big impact */}
      <Grid container>
        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <img
            // src={smallActBigImpact}
            style={{
              maxWidth: '100%',
              height: 'auto',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          />
        </div>
      </Grid>

      {/* Get Started */}
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ backgroundColor: '#00b4cb', color: 'white' }}
      >
        <Grid item xs={3}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <h4>Explore</h4>
            </Grid>
            <Grid item>
              <h5>Browse through the MicroNeeds</h5>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <h4>Commit</h4>
            </Grid>
            <Grid item>
              <h5>Find one you love</h5>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <h4>Make it happen!</h4>
            </Grid>
            <Grid item>
              <h5>Work with your 'tribe' to solve the MicroNeed</h5>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <div
                style={{
                  padding: '0px',
                  margin: '0px',
                  marginTop: '10px',
                  height: '80%'
                }}
              >
                <img
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    padding: '0px',
                    margin: '0px'
                  }}
                  // src={jenny}
                  alt={'success'}
                />
              </div>
            </Grid>
            <Grid item>
              <h5 style={{ paddingTop: '10px', marginTop: 0 }}>
                See how Jenny did it
              </h5>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* What makes this different? */}
      <Grid
        container
        // style={{backgroundImage:`url(${makeADifference}`,
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        // height: '500px'}}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={7}>
          <div
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '60%',
              height: 'auto'
            }}
          >
            <h3 style={{ color: 'white' }}>What makes this different?</h3>
            <ul style={{ color: 'black' }}>
              <li>Direct connection with grassroots groups</li>
              <li>1:1 relationships and contact</li>
              <li>Uses your personal creativity</li>
              <li>Get to see the real impact</li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={5}>
          <img
            // src={speech}
            style={{
              maxWidth: '100%',
              height: 'auto',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
            alt="speech bubbles"
          />
        </Grid>
      </Grid>
      {/* Footer section */}
      <Grid
        container
        style={{
          backgroundColor: '#00b4cb',
          color: 'white',
          margin: 0,
          padding: 0
        }}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <h3 style={{ padding: '0px', margin: '0px' }}>
            Get help for your kids!
          </h3>
          <h5 style={{ padding: '0px', margin: '0px' }}>
            Are you a grassroots organisation looking after kids?
          </h5>
          <h5 style={{ padding: '0px', margin: '0px' }}>
            Is there a specific MicroNeed that would make a big difference in
            their lives?
          </h5>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={4}>
            <img
              // src={frontPageFooterImage}
              alt="greatful people"
            />
          </Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={4}>
              <img
                style={{ width: '60%', height: 'auto', marginLeft: '1em' }}
                // src={frontPageFooterIm age}
                alt="greatful people"
              />
            </Grid>
            <Grid item xs={6}>
              <p>
                <em>
                  "The response from around the world was amazing. In a very
                  short time, we had the blankets we needed, wrapped around the
                  children and keeping them snuggly and warm. It was wonderful
                  to see the jou on their face - not just because they had a
                  beautiful blanket ot call their own, but also becasue they had
                  proof that there were people in the world who cared about
                  them."
                </em>
              </p>
            </Grid>
          </Grid>
        </Grid>

        <Grid container>{/* Footer navigation */}</Grid>
      </Grid>
    </div>
  );
};

export default Home;
