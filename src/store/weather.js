import { weather as data } from '$store/data';
import { setLoading, toggleError } from '$store/job-state';
import { writable } from 'svelte/store';

export const weather = writable({});
export const daily = writable([]);
export const hasWeather = writable(false);

export const getWeather = async (coords) => {
  const api_endpoint = `/api/weather?lat=${coords.latitude}&lon=${coords.longitude}`;

  setLoading(true);

  await fetch(api_endpoint)
    .then((res) => {
      weather.set(res.current);
      daily.set(res.daily);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      toggleError("We couldn't get your weather. Please try again.");
      setLoading(false);
    });
};
