<section id="about" class="section section--about">
  <div class="container container--about">
    <div class="container__group container__group--left">
      <article class="section__content container--copy content-wrapper">
        <header class="section__header">
          <h3 class="section__title section__title--large">A little about cuppa</h3>
        </header>
        <p>
          Cuppa is a web application that delivers your weather and a tea recipe that should feel
          just right for a cuppa.
        </p>
      </article>

      <article class="works section__content container--copy content-wrapper">
        <header class="section__header">
          <h4 class="section__title section__title--small">How it works?</h4>
        </header>
        <p>
          Cuppa works just like any weather application you are familiar with. You type in your city
          or use your location and then you get the weather information
        </p>
      </article>

      <article class="section__content container--copy">
        <header class="section__header">
          <h4 class="section__title section__title--small">What's different?</h4>
        </header>
        <p>
          With cuppa we dont stop at your daily temperature; we give you a tea recipe that is
          curated to be just the right fit for you to brew yourself a cuppa.
        </p>
      </article>
    </div>
    <div class="container__group container__group--right">
      <article class="section__content container--copy">
        <p class="outro section__title section__title--large">
          Discover a new recipe or an old one! Explore with spices and different types of milk;
        </p>
      </article>
    </div>
  </div>
</section>

<style lang="scss">
  .container--about {
    @include screen(small) {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      gap: $spacer-md;
      align-items: center;

      .container__group {
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
  .section--about {
    overflow-x: hidden;
  }

  .container__group {
    position: relative;
    isolation: isolate;
    z-index: 1;

    &--right::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 10%;
      width: 100vw;
      height: rem(160);
      z-index: -1;
      background-color: $primary-50;

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
