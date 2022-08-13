import axios from 'axios';
import { writable } from 'svelte/store';
import { toggleHasError } from './job-state';

export const city = writable({});
export const searchResults = writable([]);
export const isSearching = writable(false);

export const getSearchResults = async (query) => {
  const { data } = await axios.get(`/api/spott/?q=${query}`);
  searchResults.set(data);
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
      toggleHasError(
        "Sorry we could'nt find you. Please check if you have an internet connectiion."
      );
      isSearching.set(false);
    });
};
