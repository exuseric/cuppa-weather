<script>
  import Close from '$icons/close.svelte';
  import { closeError, errorMessage, hasError } from '$store/job-state';
</script>

<div
  class={`banner-wrapper text-wrapper ${
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
  <button class="close-btn" on:click={closeError}>
    <span>Close</span>
    <Close />
  </button>
</div>

<style lang="scss">
  .banner-wrapper {
    position: fixed;
    top: calc($nav-height + $spacing-md);
    right: 0;
    z-index: 99;
    // transform: translate(-50%, -50%);

    width: 100%;
    // max-width: rem(500);
    height: max-content;

    padding: $spacing-lg $spacing-md;
    overflow: hidden;

    color: $red-500;
    background-color: $red-50;

    border-radius: rem(10);

    @include frosted-glass($red-50);

    @include screen(small) {
      right: $spacing-md;
    }

    &--slide-in {
      animation: slide-in $transition forwards;
    }
    &--slide-out {
      animation: slide-out $transition forwards;
      pointer-events: none;
    }
  }
  .close-btn {
    @include grid-flow-col;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    top: 0;
    right: 0;
    padding: $spacing-xs;

    @include font(body-sm);

    color: $red-500;
    background-color: transparent;
  }

  .banner {
    position: relative;
    isolation: isolate;
    z-index: 1;
  }

  .text-wrapper {
    @include flex-wrap-row;
    align-items: center;

    p {
      @include font(body);
    }
  }
</style>
