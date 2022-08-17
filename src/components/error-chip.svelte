<script>
  import Close from '$icons/close.svelte';
  import { closeError, errorMessage, hasError } from '$store/job-state';
</script>

<div
  class={`banner-wrapper container--copy ${
    $hasError ? 'banner-wrapper--slide-in' : 'banner-wrapper--slide-out'
  }`}
  aria-hidden={!$hasError}
>
  <div class="banner">
    <article class="banner__content">
      <p>
        {$errorMessage}
      </p>
    </article>
  </div>
  <button class="button button--close button--transparent button--icon" on:click={closeError}>
    <span>Close</span>
    <Close />
  </button>
</div>

<style lang="scss">
  .banner-wrapper {
    position: fixed;
    top: calc($nav-height + $spacer-md);
    right: 0;
    z-index: 99;
    // transform: translate(-50%, -50%);

    width: 100%;
    // max-width: rem(500);
    height: max-content;

    padding: $spacer-lg $spacer-md;
    overflow: hidden;

    color: $red-500;
    background-color: $red-50;
    border: 2px solid $red-500;

    @include frosted-glass($red-50);

    @include screen(small) {
      right: $spacer-md;
    }

    &--slide-in {
      animation: slide-in $transition forwards;
    }
    &--slide-out {
      animation: slide-out $transition forwards;
      pointer-events: none;
    }
  }
  .button--close {
    position: absolute;
    top: 0;
    right: 0;

    @include font(body-sm);
  }

  .banner {
    position: relative;
    isolation: isolate;
    z-index: 1;
  }

  .container--copy {
    @include flex-wrap-row;
    align-items: center;

    p {
      @include font(body);
    }
  }
</style>
