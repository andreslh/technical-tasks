const getWeather = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('sunny');
    }, 1000);
  });

getWeather().then((weather) => {
  console.log(weather);
});

const weather = await getWeather();
console.log(weather);
