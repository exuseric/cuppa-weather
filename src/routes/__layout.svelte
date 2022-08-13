<script>
  import ErrorChip from '$components/error-chip.svelte';
  import LoadingScreen from '$components/loading-screen.svelte';
  import MainFooter from '$components/main-footer.svelte';
  import MainNavigation from '$components/main-navigation.svelte';
  import { hasError, loading } from '../store/job-state';
  import '../styles/main.scss';
</script>

{#if $hasError}
  <ErrorChip />
{/if}
{#if $loading}
  <LoadingScreen />
{/if}
<MainNavigation />
<slot />
<MainFooter />
