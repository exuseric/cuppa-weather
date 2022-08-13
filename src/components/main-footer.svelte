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
  <div class="container container--grid">
    <article class="footer__menu">
      <h4 class="footer__title">Menu</h4>
      <ul class="menu">
        {#each links as link}
          <li class="text-wrapper">
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
          <li class="text-wrapper">
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
          <li class="text-wrapper">
            <a href={item.link.route} target="_blank" rel="noopener noreferrer" class="menu__link">
              {item.link.name}
            </a>
          </li>
        {/each}
      </ul>
    </article>
  </div>
  <div class="container">
    <article class="footer__copyright">
      <p>
        &copy; Copyright {new Date().getFullYear()} Eric Maina. All rights reserved
      </p>
    </article>
  </div>
</footer>

<style lang="scss">
  .footer {
    padding: $spacing-lg 0;
    margin-top: $section-margin;

    &__title {
      @include font(h6);
      padding: $spacing-xs;
      margin-bottom: $spacing-sm;
    }
  }
  .container--grid {
    @include flex-wrap-row;
    justify-content: space-between;
    gap: $spacing-lg;
    margin-bottom: $spacing-lg;
  }

  .menu {
    @include flex-wrap-row;
    gap: $spacing-sm;

    padding: 0;
    margin: 0;

    list-style: none;

    &__link {
      text-transform: capitalize;
      text-decoration: none;
    }
  }
</style>
