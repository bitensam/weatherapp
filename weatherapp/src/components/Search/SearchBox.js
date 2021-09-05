import React from 'react';
import './SearchBox.scss';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const SearchBox = () => {
  return (
    <div className='search-box'>
      <Container maxWidth='xl'>
        <Grid container spacing={0}>
          <Grid item xs={12} md={9}>
            <input
              type='text'
              className='search-bar'
              placeholder='Search...'
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SearchBox;
