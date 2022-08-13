import { writable } from 'svelte/store';
import { weather as data } from './data';
import { geocode } from './geocode';
import { setLoading, toggleHasError } from './job-state';

export const weather = writable(data.current);
export const daily = writable(data.daily);

export const getWeather = async (coords) => {
  const api_endpoint = `/api/weather?lat=${coords.latitude}&lon=${coords.longitude}`;

  setLoading(true);
  await fetch(api_endpoint)
    .then((res) => {
      const currentWeather = res.current;
      const dailyWeather = res.daily;
      weather.set(currentWeather);
      daily.set(dailyWeather);
      geocode({ ...res.lat, ...res.lon });
    })
    .catch((err) => {
      console.log(err);
      toggleHasError("We could'nt get your weather. Please try again.");
    })
    .finally(() => {
      setLoading(false);
    });
};
