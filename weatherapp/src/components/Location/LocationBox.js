import React from 'react';
import { dateUtility } from './DateUtility';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './LocationBox.scss';

const LocationBox = () => {
  return (
    <div className='location-box'>
      <Container maxWidth='xl'>
        <Grid container spacing={0}>
          <Grid item xs={12} md={9}>
            <div className='location'>Warsaw, PL</div>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className='date'>{dateUtility(new Date())}</div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LocationBox;
