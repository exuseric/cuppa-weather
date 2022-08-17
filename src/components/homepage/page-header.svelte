<script>
  import SearchBar from '$components/search/search-bar.svelte';
  import SearchForm from '$components/search/search-form.svelte';
</script>

<header class="header">
  <div class="container">
    <div class="text-group">
      <div class="heading container--copy">
        <h1>A cuppa that's right for your weather.</h1>
      </div>
      <SearchForm />
    </div>
  </div>
</header>

<style lang="scss">
  @use 'sass:math';

  .header {
    @include center;
    margin-top: $nav-height;
    min-height: calc(100vh - $nav-height);
  }

  .heading {
    margin-bottom: $spacer-lg;

    h1 {
      font-family: $heading-family;
      @include font(h3);

      color: $primary-500;
    }
  }
</style>
