import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './WeatherBox.scss';

const WeatherBox = () => {
  return (
    <div className='weather-box'>
      <Container maxWidth='xl'>
        <Grid container spacing={0}>
          <Grid item xs={12} md={9}>
            <div className='temp'>
              15*C
            </div>
          </Grid>
          <Grid item xs={12} md={9}>
            <div className='weather-info'>
              Sunny
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WeatherBox;
