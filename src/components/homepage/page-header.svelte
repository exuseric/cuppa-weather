<script>
  import SearchBar from '$components/search/search-bar.svelte';
</script>

<header class="header">
  <div class="container">
    <div class="text-group">
      <div class="heading text-wrapper">
        <h1>A cuppa that's right for your weather.</h1>
      </div>
      <SearchBar />
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
    margin-bottom: $spacing-lg;

    h1 {
      font-family: $heading-family;
      @include font(h3);

      color: $primary-500;
    }
  }
</style>
