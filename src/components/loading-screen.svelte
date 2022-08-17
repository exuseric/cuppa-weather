<script>
  import { fade } from 'svelte/transition';
  import Compass from './icons/compass.svelte';
</script>

<section class="loading" transition:fade>
  <article class="container container--copy article">
    <header class="article__header section__header">
      <h1 class="section__title section__title--large">Getting your weather...</h1>
      <p class="section__title section__title--small">Putting the kettle on.</p>
    </header>
    <div class="article__icon">
      <Compass />
    </div>
  </article>
</section>

<style lang="scss">
  .loading {
    position: fixed;
    inset: 0 0 auto;
    z-index: 1000;

    @include center;

    width: 100vw;
    height: 100vh;

    font-family: $heading-family;

    color: $dark-gray;
    background-color: $white;

    @include frosted-glass($white);
  }

  .article {
    @include flex-wrap-row;
    align-items: center;
    justify-content: space-between;

    &__icon {
      width: 100%;
      max-width: rem(300);
      height: rem(300);
      svg {
        @include font(h1);
      }
    }
  }
</style>
