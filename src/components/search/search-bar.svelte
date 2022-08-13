<script>
  import GeolocateButton from '$components/search/geolocate-button.svelte';
  import SearchForm from '$components/search/search-form.svelte';
</script>

<div class="search-bar">
  <SearchForm />
  <GeolocateButton />
</div>

<style lang="scss">
  .search-bar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: $spacing-xs;
    justify-items: flex-start;

    @include screen(small) {
      display: flex;
      flex-direction: column;
      justify-items: flex-start;
    }
  }
</style>
