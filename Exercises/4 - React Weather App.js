// Create a basic React App where the user inputs the city name and after submitting, it fetches the data from an api.

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
    const response = fetch(`https://whateverapi?city=${value}`);
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
