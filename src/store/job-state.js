import { writable } from 'svelte/store';

export const loading = writable(false);
export const errorMessage = writable(
  'Oops! Well this is embarassing. Something unexpected happened. Please try again.'
);
export const hasError = writable(false);

export const setLoading = (state) => loading.set(state);

export const toggleError = (message) => {
  hasError.set(true);
  errorMessage.set(message);

  setTimeout(() => closeError(), 5000);
};

export const closeError = () => {
  hasError.set(false);
};
