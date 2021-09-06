import React from 'react';
import './SearchBox.scss';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import UseSearch from './UseSearch';



const SearchBox = () => {

  const { queryValue, handleChange, handleSearch } = UseSearch();
  console.log('queryvalue:', queryValue);

  return (
    <div className='search-box'>
      <Container maxWidth='xl'>
        <Grid container spacing={0}>
          <Grid item xs={12} md={9}>
            <input
              type='text'
              name='searchbox'
              className='search-bar'
              placeholder='Search...'
              value={queryValue}
              onChange={handleChange}
              onKeyPress={handleSearch}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );

};

export default SearchBox;
