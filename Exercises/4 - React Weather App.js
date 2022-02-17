/*

Create a React App where there is an HTML form. In this form the user inputs the city name and submits a button.
After submitting, it fetches data from an api to retrieve the temperature and status of the weather in this city.

Use this sample data for the api:
Api url: https://www.anyweatherapi/city=CITY_NAME
Response body:
{
  weather: {
    temperature: 22,
    status: 'Sunny'
  }
}

The application doesn't need to be styled or validate user data or api errors.
*/


const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange}></input>
      <button>Submit</button>
    </form>
  );
};

const CurrentWeather = ({ city, weather }) => {
  return (
    <div>
      <h2>{city}</h2>
      <ul>
        <li>Current temperature: {weather.temperature}</li>
        <li>Current status: {weather.status}</li>
      </ul>
    </div>
  );
};

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const handleFormSubmit = async (value) => {
    const response = fetch(`https://www.anyweatherapi/city=${value}`);
    const json = await response.json();
    setCity(value);
    setWeather(json.data);
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit} />
      <CurrentWeather city={city} weather={weather} />
    </>
  );
};
