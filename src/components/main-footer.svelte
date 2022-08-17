<script>
  import links from '$utils/routes.js';

  const resources = [
    {
      body: 'Weather information provided by',
      link: { name: 'OpenWeatherMap', route: 'https://openweathermap.org' }
    },
    {
      body: 'Geocoding made possible with',
      link: { name: 'Spott', route: 'https://spott.rapipdapi.com' }
    },
    {
      body: 'Built with',
      link: { name: 'Svelte', route: 'https://sveltejs.org' }
    },
    {
      body: 'Built with',
      link: { name: 'Netlify', route: 'https://netlify.org' }
    }
  ];

  const discover = [
    { link: { name: 'Cuppa On Github', route: 'https://github.com/exueric/cuppa' } },
    { link: { name: 'More Projects', route: 'https://itseric.netlify.app' } }
  ];
</script>

<footer class="footer">
  <div class="container container--menu">
    <article class="footer__menu">
      <h4 class="footer__title">Menu</h4>
      <ul class="menu">
        {#each links as link}
          <li class="container--copy">
            <a href={link.route} class="menu__link">
              {link.name}
            </a>
          </li>
        {/each}
      </ul>
    </article>

    <article class="footer__discover">
      <h4 class="footer__title">Discover More.</h4>

      <ul class="menu">
        {#each discover as item}
          <li class="container--copy">
            <a href={item.link.route} target="_blank" rel="noopener noreferrer" class="menu__link">
              {item.link.name}
            </a>
          </li>
        {/each}
      </ul>
    </article>
    <article class="footer__powered">
      <h4 class="footer__title">Powered By</h4>

      <ul class="menu">
        {#each resources as item}
          <li class="container--copy">
            <a href={item.link.route} target="_blank" rel="noopener noreferrer" class="menu__link">
              {item.link.name}
            </a>
          </li>
        {/each}
      </ul>
    </article>
  </div>
  <div class="container container--copyright">
    <article class="copyright">
      <p>
        &copy; Copyright {new Date().getFullYear()} Eric Maina. All rights reserved
      </p>
    </article>
  </div>
</footer>

<style lang="scss">
  .footer {
    padding: $spacer-lg 0;
    margin-top: $section-margin;

    &__title {
      @include font(h6);
      padding: $spacer-xs;
      margin-bottom: $spacer-sm;
    }
  }

  .container--menu {
    @include flex-wrap-row;
    gap: $spacer-lg;
    margin-bottom: $spacer-lg;
  }

  .container--copyright {
    text-align: center;
    margin-top: $section-margin;
  }

  .menu {
    @include grid-flow-row;
    gap: $spacer-sm;

    padding: 0;
    margin: 0;

    list-style: none;

    &__link {
      text-transform: capitalize;
      text-decoration: none;
    }
  }
</style>
