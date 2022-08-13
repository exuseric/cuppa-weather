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

<section class="error-page section">
  <header class="container ">
    <div class="text-group">
      <h1>{title}</h1>
      <p>That wasn't supposed to happen.</p>
      <a href="/">Let's go back home.</a>
    </div>
    <div class="sun">
      <Sun />
    </div>
  </header>
</section>

<style lang="scss">
  .error-page {
    @include center;

    height: calc(100vh - $nav-height);
  }
  header {
    @include flex-wrap-row;
    align-items: center;
    justify-content: space-between;

    position: relative;
    isolation: isolate;
    overflow: hidden;

    height: 100%;

    // border-radius: 50%;

    h1 {
      position: relative;
      z-index: 2;

      // font-size: size(h1);
      @include font(h1);
      font-family: $heading-family;

      color: $primary-500;
    }

    a {
      font-weight: 600;
      color: $primary-500;
    }
  }
  .sun {
    width: rem(300);
    height: rem(300);
    color: $primary-50;
  }
</style>
