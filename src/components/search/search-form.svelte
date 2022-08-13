<script>
  import axios from 'axios';

  import LoaderIcon from '$components/icons/loader-icon.svelte';
  import { loading, setLoading } from '$store/job-state';
  import { city, getSearchResults, getSingleCity, isSearching, searchResults } from '$store/search';
  import { getWeather } from '$store/weather';
  import { flip } from 'svelte/animate';
  import { fade } from 'svelte/transition';

  // variables
  let searchQuery = '';
  let filtered = [];
  let dataFetched = false;

  $: {
    if (dataFetched) {
      goto('/weather');
      afterNavigate(() => setLoading(!$loading));
    }
    // if ($searchResults.length > 0) {
    //   filtered = [...$searchResults];
    // }
  }

  const handleSearch = async () => {
    // if (searchQuery.length > 0 && searchQuery.length <= 2) {
    //   // getSearchResults(searchQuery);
    //   const { data } = await axios.get(`/api/spott/?q=${searchQuery}`);
    //   filtered.push(data);
    //   return;
    // }
    // if (searchQuery.length <= 0) {
    //   filtered = [];
    // }
  };

  const handleFilter = () => {
    // filtered = filtered.filter((query) =>
    //   query.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    // );
  };

  const handleSubmit = async () => {
    await getSingleCity(searchQuery);
    // await getWeather($city[0].coordinates);
    console.log($city[0]);
  };

  function handleWeather() {
    const { coords } = this.dataset;
    getWeather(JSON.parse(coords));
  }
</script>

<form on:submit|preventDefault={handleSubmit} on:keydown={handleSearch} class="form text-wrapper">
  <div class="form__wrapper">
    <div class="form__group">
      <label for="search" class="form__label sr-only"> Enter the name of your city: </label>
      <input
        class="form__input"
        type="search"
        name="search"
        id="search"
        placeholder="Enter the name of your city."
        required
        aria-required="true"
        autocapitalize="word"
        autocomplete="false"
        bind:value={searchQuery}
        on:input={handleFilter}
      />
    </div>
    <button
      class="form__button main-button main-button--search"
      type="submit"
      aria-label="search"
      title="search"
    >
      {#if $isSearching}
        <span class="icon-button spin"><LoaderIcon /></span>
      {/if}
      <span>Search</span>
    </button>
  </div>

  <!-- DISPLAY ALL THE FILTERED CITIES -->

  {#if filtered.length > 0}
    <ul class="results" transition:fade={{ duration: 300 }}>
      {#each filtered as query (query.id)}
        <li
          class="results__cell"
          data-coords={JSON.stringify(query.coordinates)}
          on:click={handleWeather}
          transition:fade={{ duration: 300 }}
          animate:flip={{ duration: 200 }}
        >
          <span class="city">
            {query.name}.&nbsp;
          </span>
          <span class="country"> {query.country.name}, {query.country.id}</span>
        </li>
      {/each}
    </ul>
  {/if}
</form>

<style lang="scss">
  .form {
    position: relative;
    isolation: isolate;

    color: $black;

    width: 100%;
    // max-width: rem(600);

    @include screen(small) {
      width: 50ch;
    }

    &__wrapper {
      display: grid;
      grid-template-columns: 2fr auto;
      justify-content: space-between;
      gap: $spacing-xs;
      width: inherit;
      // padding: $spacing-sm;
      // background-color: $light-gray;
      border: 2px solid transparent;
    }

    &__label {
      color: inherit;
      font-weight: 600;
    }

    &__input {
      width: 100%;

      padding: $spacing-sm;

      color: inherit;
      background-color: transparent;
      border: 2px solid transparent;
      border-bottom-color: $primary-500;

      outline-color: $blue-500;

      &::placeholder {
        color: $primary-500;
      }
    }
  }

  .main-button--search {
    @include grid-flow-col;
    place-content: center;
    gap: $spacing-xs;

    width: 100%;

    // color: $dark-gray;

    text-transform: capitalize;

    border-radius: rem(5);

    &:hover {
      color: $primary-500;
      background-color: $primary-50;
    }

    .icon-button {
      padding: 0;
    }
  }

  .results {
    position: absolute;
    top: 100%;

    appearance: none;
    width: 100%;
    height: fit-content;
    max-height: rem(200);
    overflow-y: scroll;

    background-color: $white;

    margin-top: $spacing-sm;
    padding: $spacing-md;

    list-style-type: none;

    border-radius: rem(10);
    border: 2px solid $mid-gray;
    border-spacing: 0;

    box-shadow: 1px 1px 10px 2px transparentize($color: $mid-gray, $amount: 0.15);

    transition: all 0.3s ease;
  }

  .results__cell {
    font-weight: 600;

    padding: $spacing-sm 0;

    .city {
      @include font(body);
    }
    .country {
      color: $mid-gray;
    }
  }
</style>
