<script>
  import { afterNavigate, goto } from '$app/navigation';

  import GeolocateButton from '$components/search/geolocate-button.svelte';
  import Loader from '$icons/loader.svelte';
  import { setLoading, toggleError } from '$store/job-state';
  import { getSearchResults, isSearching, searchResults, setCurrentCity } from '$store/search.js';
  import { getWeather, hasWeather } from '$store/weather';

  let filtered = [];
  let query;

  $: {
    if ($hasWeather) {
      goto('/weather');
      afterNavigate(() => setLoading(false));
    }
  }

  function handleSubmit() {
    const city = new FormData(this).get('search');
  }

  function handleFilter() {
    // const query = String(new FormData(this).get('search'));
    // const query = this.value;

    if ($searchResults.length) {
      let city_name = query.split(',')[0].toLowerCase();

      if (query.includes(',')) {
        const division = query.split(',')[1].replace(' ', '').toLowerCase();

        filtered = $searchResults.filter(
          (city) =>
            String(city.name).toLowerCase().includes(city_name) &&
            String(city.adminDivision1.name).toLowerCase().includes(division)
        );

        return;
      }

      filtered = $searchResults.filter((city) =>
        String(city.name).toLowerCase().includes(city_name)
      );
    }
  }

  async function handleSearch(e) {
    const search_value = String(new FormData(this).get('search'));

    if (e.key !== 'Backspace' && search_value.length >= 3 && search_value.length <= 3) {
      await getSearchResults(search_value);
    }

    // if ($searchResults.length) handleFilter(search_value);
  }

  function handleCoordinates() {
    const { coordinates, city, timezone } = this.dataset;
    query = city;
    // filtered = [];
    getWeather(JSON.parse(coordinates));
    setCurrentCity({ city, timezone });
  }
</script>

<div class="search container--copy">
  <form
    class="search__form form"
    on:submit|preventDefault={handleSubmit}
    on:keyup|capture={handleSearch}
  >
    <div class="form__group">
      <label for="search" class="form__label sr-only">Enter the name of your city</label>
      <input
        class="form__input"
        type="search"
        name="search"
        id="search"
        autocapitalize="word"
        autocomplete="home"
        placeholder="Enter your city. ex: Nairobi, Kenya"
        aria-label="Enter your city. ex: Nairobi, Kenya"
        required
        bind:value={query}
        on:input={handleFilter}
      />
    </div>
    <div class="form__group">
      <button
        type="submit"
        class="button button--submit button--icon button--main"
        aria-label="search"
      >
        <!-- <Search /> -->
        {#if $isSearching}
          <span class="icon">
            <Loader />
          </span>
        {/if}
        <span class="s">Search</span>
      </button>
    </div>
    <div class="form__group form__group--geolocate">
      <GeolocateButton />
    </div>
  </form>
  {#if filtered.length}
    <ul class="search__list" aria-label="list of filtered cities">
      {#each filtered as city}
        <li>
          <button
            class="button button--city button--transparent"
            data-coordinates={JSON.stringify(city.coordinates)}
            data-city="{city.name}, {city.adminDivision1.name}"
            data-timezone={city.timezoneId}
            aria-label="city: {city.name}, {city.adminDivision1.name}"
            on:click={handleCoordinates}
          >
            <span class="city">
              {city.name}, {city.adminDivision1.name}
            </span>
            <span class="country">
              &nbsp;{city.country.id}
            </span>
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style lang="scss">
  .search {
    position: relative;
    isolation: isolate;
    z-index: 1;

    &__list {
      position: absolute;
      inset: 100% auto auto;
      width: 100%;
    }
  }
  .form {
    display: grid;
    grid-template-columns: 2fr auto auto;
    align-items: center;
    gap: $spacer-xs;

    padding: $spacer-xs;

    // background-color: $mid-gray;
    border: 2px solid $dark-gray;
    border-radius: rem(5);

    &__group,
    &__input {
      width: 100%;
      height: 100%;
    }

    &__input {
      padding: $spacer-xs;
      background-color: transparent;
      border: 2px solid transparent;

      &:focus {
        background-color: $white;
      }
    }
  }

  .search__list {
    @include media-scroller-y($row-height: rem(40));

    width: 100%;
    height: fit-content;
    max-height: rem(200);

    padding: $spacer-xs;
    margin-top: $spacer-md;

    list-style: none;

    background-color: $white;

    border: 2px solid $mid-gray;
    border-radius: rem(10);

    &::-webkit-scrollbar {
      display: none;
    }

    li {
      @include center;
      justify-content: flex-start;
    }

    .button {
      @include grid-flow-col;
      align-items: center;
      justify-content: space-between;
      // gap: $spacer-md;
      width: 100%;
    }
  }
</style>
