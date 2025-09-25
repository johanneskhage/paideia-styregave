<script lang="ts">
  import { browser } from '$app/environment';
  import HomePage from '$lib/molecules/HomePage.svelte';
  import ImageOverlay from '$lib/molecules/ImageOverlay.svelte';

  // favicon is served from static/favicon.ico via app.html template

  // State
  let overlayImg: string | null = null;

  // Effects
  if (browser) {
    import('video.js/dist/video-js.min.css');
  }

  // Event handlers
  function handleInteraction() {
    if (!browser) return;

    // do not change favicon at runtime — keep static favicon.ico
    // document.getElementById('pageFavicon').href = '/cerveza-cristal.png';
    document.title = 'Cerveza Cristalllll';
  }

  function openOverlay(img: string) {
    overlayImg = img;
  }
  function closeOverlay() {
    overlayImg = null;
  }
</script>

<svelte:head>
  <title>Paideia linjeforening</title>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <!-- no runtime favicon override — app.html already includes the favicon template link -->
</svelte:head>

<HomePage on:interact={handleInteraction} {openOverlay} />

<ImageOverlay imgSrc={overlayImg} visible={!!overlayImg} on:close={closeOverlay} />

<style>
  /* ... existing styles ... */
</style>