<section id="about" class="section section--about">
  <div class="container container--about">
    <div class="text-group text-group--left">
      <article class="text-wrapper content-wrapper">
        <header class="container__header">
          <h3 class="container__title">A little about cuppa</h3>
        </header>
        <p>
          Cuppa is a web application that delivers your weather and a tea recipe that should feel
          just right for a cuppa.
        </p>
      </article>
      <article class="works text-wrapper content-wrapper">
        <div class="text-group">
          <h4 class="works__title">How it works?</h4>
          <p>
            Cuppa works just like any weather application you are familiar with. You type in your
            city or use your location and then you get the weather information
          </p>
        </div>
        <div class="text-group">
          <h4 class="works__title">What makes cuppa different?</h4>
          <p>
            With cuppa we dont stop at your daily temperature; we give you a tea recipe that is
            curated to be just the right fit for you to brew yourself a cuppa.
          </p>
        </div>
      </article>
    </div>
    <div class="text-group text-group--right">
      <article class="text-wrapper text-wrapper">
        <p class="outro">
          Discover a new recipe or an old one! Explore with spices and different types of milk;
        </p>
      </article>
    </div>
  </div>
</section>

<style lang="scss">
  .section--about {
    overflow-x: hidden;
  }

  .container {
    &__title {
      @include font(h4);
      // color: ;
    }
  }

  .works {
    margin: $spacing-lg 0;

    &__title {
      @include font(h5);
      color: $dark-gray;
    }
  }

  .outro {
    @include font(h3);
  }

  .container--about {
    @include screen(small) {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      gap: $spacing-md;
      align-items: center;

      .text-group {
        &--left {
          grid-column: 1 / 2;
        }

        &--right {
          grid-column: 2 / -1;
          justify-self: end;
        }
      }
    }
  }

  .text-group {
    position: relative;
    isolation: isolate;
    z-index: 1;

    &--right {
      font-weight: 600;
      font-family: $heading-family;
      color: $primary-900;

      margin-block: $spacing-xl;
    }

    &::before {
      content: '';
      position: absolute;
      z-index: -2;

      background-color: $primary-500;
    }

    &--right::before {
      top: 50%;
      left: 10%;
      width: 100vw;
      height: rem(160);

      @include screen(small) {
        top: 50%;
        left: 10%;
        width: 100vw;
        height: 250%;

        transform: translateY(-50%);
      }
    }
  }
</style>
