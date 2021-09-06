import React from 'react';
import LocationBox from './components/Location/LocationBox';
import SearchBox from './components/Search/SearchBox';
import WeatherBox from './components/Weather/WeatherBox';
import './styles/App.scss';


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
