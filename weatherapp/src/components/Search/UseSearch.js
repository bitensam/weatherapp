import { useState } from 'react';

const UseSearch = () => {

  const [queryValue, setQueryValue] = useState('');
  const [weather, setWeather] = useState('');

  const handleChange = e => {
    setQueryValue(e.target.value);

  };

  const api = {
    key: 'e1959048c641e92ba901c60cdee79c83',
    base: 'api.openweathermap.org/data/2.5/weather?q=',
  };

  const handleSearch = evt => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}${queryValue}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQueryValue('');
          console.log(result);
        });
    }
  };

  // stan aplikacji
  // const [query, setQuery] = useState('');
  // const [weather, setWeather] = useState('');


  // const search = e => {
  //   if (e.key === 'Enter');
  //   fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
  //     .then(res => res.json())
  //     .then(result => setWeather(result)); 
  // }
  return { queryValue, weather, handleSearch, handleChange };
};

export default UseSearch;
