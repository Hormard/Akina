export async function getWeather() {
  const weatherMinskResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=e2df985448d31c43026b448cc7259c06`
  );
  const resultMinsk = await weatherMinskResponse.json();

  const weatherEbisuResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Nihonmatsu&appid=e2df985448d31c43026b448cc7259c06`
  );
  const resultEbisu = await weatherEbisuResponse.json();

  const weather = [
    {
      feels_like: Math.round(resultMinsk.main.feels_like - 273.15),
      temp: Math.round(resultMinsk.main.temp - 273.15),
      type: resultMinsk.weather[0].main,
      icon: resultMinsk.weather[0].icon,
    },
    {
      feels_like: Math.round(resultEbisu.main.feels_like - 273.15),
      temp: Math.round(resultEbisu.main.temp - 273.15),
      type: resultEbisu.weather[0].main,
      icon: resultEbisu.weather[0].icon,
    },
  ];
  return weather;
}
