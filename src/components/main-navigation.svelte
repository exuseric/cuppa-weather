<script>
  import { afterNavigate } from '$app/navigation';
  import links from '$utils/routes.js';

  let currentRoute;

  {
    afterNavigate((d) => {
      currentRoute = d.to.pathname;
    });
  }

  function handleCurrentRoute() {
    const activeLink = this.attributes.href.value;
    console.log(this.attributes);

    if (toString(activeLink).toLowerCase() === toString(currentRoute).toLowerCase()) {
      this.classList.add('active-link');
      return;
    }

    this.classList.remove('active-link');
  }
</script>

<header class="nav-bar">
  <div class="container container--grid">
    <a href="/" class="logo">
      <img src="/logo/logo.png" alt="logo" class="logo__img" />
      <span class="logo__txt">Cuppa</span>
    </a>

    <nav class="nav">
      <ul class="menu">
        {#each links as link}
          <li>
            <a href={link.route} class="menu__link">
              {link.name}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<style lang="scss">
  .nav-bar {
    display: inline-grid;

    position: fixed;
    z-index: 100;
    inset: 0 0 auto;

    width: 100%;
    height: $nav-height;

    background-color: $white;

    @include frosted-glass($white);
  }
  .logo {
    @include grid-flow-col;
    justify-content: start;
    gap: $spacer-sm;

    text-decoration: none;
    width: rem(150);
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

  .nav {
    @include flex-wrap-row;
  }

  .container--grid,
  .menu {
    @include flex-wrap-row;
    align-content: center;
  }

  .container--grid {
    justify-content: space-between;
  }

  .menu {
    gap: $spacer-md;
    padding: 0;
    margin: 0;
  }

  .menu,
  .menu li {
    appearance: none;
    list-style: none;
  }

  .menu__link {
    font-weight: 600;
    text-decoration: none;
    text-transform: capitalize;
  }
</style>
