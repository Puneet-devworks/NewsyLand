import './App.css';
import React, { useEffect,useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import WeatherCard from './components/WeatherCard';
import getFormattedWeatherData from "./services/weatherService";
import StockMarketCard from './components/StockMarketCard';
import getMarketData from './components/StockMarketService';

function App() {
  const pageSize = 5;
  const apiKeyNews = "60988c981f754dc3995925e641f6ca7f";
  const [progress, setProgress] = useState(0);
  const [weather, setWeather] = useState({ details:'No Detail', icon:'01d', temp:273, temp_min:273, temp_max:273, sunrise:0, sunset:0, speed:0, humidity:0, feels_like:0, timezone:1000, dt:1669793656, name:'- ', country:'-' });

  useEffect(() => {

    if (navigator.geolocation) {
      console.log("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        fetchWeather(lat,lon);
      });
    }

    const fetchWeather = async (lat,lon) => {
      await getFormattedWeatherData({lat,lon}).then((data) => {
        console.log(
          `App.js - Successfully fetched weather for ${data.name}, ${data.country}.`
        );
        setWeather(data);
      });
    };

    

  }, []);
  

  return (
    <div className="App">
      <Router>
      <NavBar/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
          <Route  path="/" element={<><div className="container"><div className="card-group" style={{ margin: '35px 0px -60px', marginTop: '90px' }}><WeatherCard weather={weather}></WeatherCard><StockMarketCard/></div></div><News setProgress={setProgress} apiKey={apiKeyNews} key="general" pageSize={pageSize} country="in" category="general" /></>}/> 
          <Route  path="/business" element={<News setProgress={setProgress} apiKey={apiKeyNews} key="business" pageSize={pageSize} country="in" category="business"/>} /> 
          <Route  path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKeyNews} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} /> 
          <Route  path="/general" element={<News setProgress={setProgress} apiKey={apiKeyNews} key="general" pageSize={pageSize} country="in" category="general"/>} />
          <Route  path="/health" element={<News setProgress={setProgress} apiKey={apiKeyNews} key="health" pageSize={pageSize} country="in" category="health"/>} />
          <Route  path="/science" element={<News setProgress={setProgress} apiKey={apiKeyNews} key="science" pageSize={pageSize} country="in" category="science"/>} />
          <Route  path="/sports" element={<News setProgress={setProgress} apiKey={apiKeyNews} key="sports" pageSize={pageSize} country="in" category="sports"/>} />
          <Route  path="/technology" element={<News setProgress={setProgress} apiKey={apiKeyNews} key="technology" pageSize={pageSize} country="in" category="technology"/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
