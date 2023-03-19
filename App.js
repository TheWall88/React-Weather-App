import react, {useState} from 'react'
import axios from 'axios'

 function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const apiKey = 'bdd50b252518ee209c5cc3915b524e12';
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      const url = `${baseUrl}?q=${encodeURIComponent(location)}&units=metric&appid=${apiKey}`;
      axios.get(url)
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      setLocation('');
    }
  };

  return (
    <div className="app">
      <div className="ali">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        placeholder = 'Enter Location'
        onKeyPress={searchLocation} 
        type="text" />
        
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ?  <h1>{data.main.temp}°F</h1> : null}
          </div>
          <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
{data.name != undefined &&

<div className='bottom'>
          <div className='feels>'>
            {data.main ? <p className='bold'>{data.main.feels_like}F</p> : null}
            <p>Feels Like</p>
          </div>
          <div className='humidity'>
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            
            <p>Humidity</p>
          </div>
          <div className='Wind'>
          {data.wind ? <p className='bold'>{data.wind.speed} MPH</p> : null}
            <p>Air Speed</p>
          </div>
        </div>
}

        
      </div>
      </div>
      
    </div>
  );
}

export default App;
