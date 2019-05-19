import { Grid } from '@material-ui/core';
import Main from 'common/components/Main';
// import Link from 'common/components/Link';
import React from 'react';
// import ProjectsQuery from '../Projects/GetProjectsQuery';

// Images
// import frontPageFooterImage from '../../common/assets/front-page-footer-image.png';
// import speech from '../../common/assets/speech.png';
// import makeADifference from '../../common/assets/makeADifference.png';

import './Home.css';

// const mockArray = [1, 2, 3, 4, 5, 6, 7]
const Home = () => {
  return (
    <Main>
      {/* Header Section */}
      <Grid container>
        <h1>CreateCareGlobal Home</h1>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        {/*TODO map over projects in database rather than
          hard code*/}
      </Grid>
      <Grid container>{/* How it works */}</Grid>
      {/* What makes this different? */}
      <Grid
        container
        // style={{ backgroundImage: `url(${makeADifference}` }}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <h3 style={{ color: 'white' }}>What makes this different?</h3>
          <ul style={{ color: 'black' }}>
            <li>Direct connection with grassroots groups</li>
            <li>1:1 relationships and contact</li>
            <li>Uses your personal creativity</li>
            <li>Get to see the real impact</li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <img
            // src={speech}
            style={{ maxWidth: '100%', height: 'auto', width: 'auto9' }}
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
          <Grid item xs={8}>
            <p>
              <em>
                "The response from around the world was amazing. In a very short
                time, we had the blankets we needed, wrapped around the children
                and keeping them snuggly and warm. It was wonderful to see the
                jou on their face - not just because they had a beautiful
                blanket ot call their own, but also becasue they had proof that
                there were people in the world who cared about them."
              </em>
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Main>
  );
};

export default Home;
