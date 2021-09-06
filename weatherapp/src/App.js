import React from 'react';
import LocationBox from './components/Location/LocationBox';
import SearchBox from './components/Search/SearchBox';
import WeatherBox from './components/Weather/WeatherBox';
import './styles/App.scss';



// const api = {
//   key: 'e1959048c641e92ba901c60cdee79c83',
//   base: 'api.openweathermap.org/data/2.5/',
// };


function App() {
  return (
    <div className='app'>
      <main>
        <SearchBox />
        <LocationBox />
        <WeatherBox />
      </main>
    </div>
  );
}

export default App;
