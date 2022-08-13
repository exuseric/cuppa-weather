import { writable } from 'svelte/store';
import { location as data } from './data';
import { toggleHasError } from './job-state';

export const location = writable(data);

// Reverse geocoding
export const geocode = async ({ lat, lon }) => {
  const api_endpoint = `/api/geocode?lat=${lat}&lon=${lon}`;
  await fetch(api_endpoint)
    .then((res) => location.set(res.json()))
    .catch((err) => {
      console.log(err);
      toggleHasError("We could'nt get your weather. Please try again.");
    });
};
