import axios from 'axios';
import { writable } from 'svelte/store';
import { cities } from './data';
import { toggleError } from './job-state';

export const currentCity = writable('');
export const city = writable({});
export const searchResults = writable(cities);
export const isSearching = writable(false);

export const getSearchResults = async (query) => {
  isSearching.set(true);
  await axios
    .get(`/api/spott/?q=${query}`)
    .then((res) => {
      searchResults.set(res.data);
      isSearching.set(false);
    })
    .catch(() => {
      toggleError("Sorry we could'nt find you. Please check if you have an internet connection.");
      isSearching.set(false);
    });
};

export const getSingleCity = async (query) => {
  isSearching.set(true);

  await axios
    .get(`/api/spott/?q=${query}&limit=1`)
    .then((res) => {
      city.set(res.data);
      isSearching.set(false);
    })
    .catch(() => {
      toggleError("Sorry we could'nt find you. Please check if you have an internet connectiion.");
      isSearching.set(false);
    });
};

export const setCurrentCity = (city) => currentCity.set(city);
