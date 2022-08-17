<a href="/" class="logo">
  <img src="/logo/logo.png" alt="logo" class="logo__img" />
  <span class="logo__txt">Cuppa</span>
</a>

<style lang="scss">
  .logo {
    @include grid-flow-col;
    justify-content: start;
    gap: $spacer-sm;

    text-decoration: none;
    width: fit-content;
    height: 100%;

    border-radius: rem(10);

    &__img {
      height: rem(32);
      aspect-ratio: 1 / 1;

      object-fit: contain;
      object-position: center;
    }

    &__txt {
      font-weight: 600;

      color: $primary-500;
    }
  }
</style>
