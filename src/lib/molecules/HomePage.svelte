<script lang="ts">
  import Header from '../atoms/Header.svelte';
  import AboutPaideia from './AboutPaideia.svelte';
  import UpcomingEvent from './UpcomingEvent.svelte';

  export let openOverlay: (img: string) => void;
</script>

<Header {openOverlay} />
<main>
  <AboutPaideia />
  <UpcomingEvent />
</main>

<style>
  main {
    max-width: 900px;
    margin: 2rem auto;
    padding: 0 1rem;
  }
</style>