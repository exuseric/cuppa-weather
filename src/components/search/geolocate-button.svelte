<script>
  import Location from '$components/icons/location.svelte';
  import { toggleError } from '$store/job-state';
  import { getWeather } from '$store/weather';

  let isGeolocating = false;
  let showDescription = false;
  let pos = {};

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
        toggleError(
          "We couldn't find you. Please check if you have location and internet enabled."
        );
        // toggleError(err.message);
        isGeolocating = false;
        console.log(err);
      }
    );
  };

  const handleLocation = () => {
    if ('geolocation' in navigator) {
      geolocate();
    } else {
      toggleError('Please type in your location.');
    }
  };
</script>

<button
  type="button"
  class="button button--round button--outline {isGeolocating ? 'button--loading' : ''}"
  on:mouseenter={() => (showDescription = true)}
  on:mouseleave={() => (showDescription = false)}
  on:click={handleLocation}
  title="Use My Location"
>
  <span class="icon" aria-hidden="true">
    <Location />
  </span>
  <span
    class="button__description {showDescription
      ? 'button__description--active'
      : 'button__description--inactive sr-only'}"
  >
    Use My Location.
  </span>
</button>

<style lang="scss">
  .button {
    position: relative;
    inset: 0 0 auto;
    z-index: 1;

    &__description {
      position: absolute;
      top: 180%;
      left: 50%;
      z-index: 2;
      transform: translate(-50%, -50%);

      width: rem(150);
      padding: $spacer-xs;

      @include center;

      color: $dark-gray;
      background-color: $light-gray;
      border: 2px solid currentColor;

      border-radius: rem(5);
    }
    &--loading {
      .icon {
        animation: bob 1s linear infinite;
        transform-origin: bottom;
      }
    }
  }

  @keyframes bob {
    0% {
      transform: translateY(5%) rotateY(90deg);
    }
    50% {
      transform: translateY(0%) rotateY(-90deg);
    }
    100% {
      transform: translateY(5%) rotateY(90deg);
    }
  }
</style>
