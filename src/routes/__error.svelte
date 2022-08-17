<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export function load({ error, status }) {
    return {
      props: {
        title: `${status}`
      }
    };
  }
</script>

<script>
  import Sun from '$components/icons/sun.svelte';

  export let title;
</script>

<svelte:head>
  <title>{title} | Cuppa</title>
</svelte:head>

<section class="section section--error">
  <article class="article container container--copy">
    <header class="article__header section__header">
      <div class="article__header--group">
        <h1 class="section__title section__title--large">
          {title}
        </h1>
        <p>This wasn't supposed to happen</p>
      </div>
      <div class="article__header--group">
        <a href="/" class="button button--pill button--main button--outline" role="button"
          >go back home</a
        >
      </div>
    </header>

    <div class="article__icon">
      <Sun />
    </div>
  </article>
</section>

<style lang="scss">
  .article {
    min-height: 60vh;

    &__header {
      margin-block: $spacer-lg;

      &--group {
        margin-block: $spacer-md;
      }
    }
  }

  .section__title {
    @include font(h1);
    color: $primary-500;
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
