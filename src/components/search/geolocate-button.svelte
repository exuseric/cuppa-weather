<script>
  import Location from '$components/icons/location.svelte';
  import { toggleHasError } from '$store/job-state';
  import { getWeather } from '$store/weather';
  import { fade } from 'svelte/transition';

  let isGeolocating = false;

  const geolocate = () => {
    isGeolocating = true;
    navigator.geolocation.getCurrentPosition(
      // get the coordinates
      async (pos) => {
        const { coords } = pos;
        // get the weather information for the coordinates
        getWeather(coords);
        // update
        isGeolocating = false;
        console.log(coords);
      },
      (err) => {
        // update the message to show to the user
        // toggleHasError("We couldn't find you. Please check if you have location enabled.");
        toggleHasError(err.message);
        isGeolocating = false;
        console.log(err);
      }
    );
  };

  const handleLocation = () => {
    if ('geolocation' in navigator) {
      geolocate();
      // getWeather(data);
    } else {
      toggleHasError('Please type in your location.');
    }
  };
</script>

<button
  class={`geolocate-button ${isGeolocating ? 'locating-animation' : null}`}
  on:click={handleLocation}
>
  <span class="icon-button">
    <Location />
  </span>
  {#if !isGeolocating}
    <span class="txt">Use My Location.</span>
  {/if}
  {#if isGeolocating}
    <span class="txt">Looking For You.</span>
  {/if}
</button>

<style lang="scss">
  .geolocate-button {
    @include grid-flow-col;
    gap: $spacing-xs;

    width: fit-content;

    padding: $spacing-xs;
    color: $dark-gray;
    background-color: transparent;

    &:hover {
      color: $primary-500;
    }
    &:focus {
      color: $blue-50;
      background-color: $blue-500;

      &:hover {
        color: $primary-500;
        background-color: $primary-50;
      }
    }
  }

  .icon-button {
    padding: 0;
  }

  .locating-animation {
    color: $primary-500;
    .icon-button {
      animation: bob 1s linear infinite;
      transform-origin: bottom;
    }
  }

  @keyframes bob {
    0% {
      transform: translateY(5%) rotateZ(10deg);
    }
    50% {
      transform: translateY(0%) rotateZ(-10deg);
    }
    100% {
      transform: translateY(5%) rotateZ(10deg);
    }
  }
</style>
