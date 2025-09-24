<script lang="ts">
  export let imgSrc: string = '';
  export let visible: boolean = false;
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  function close() { dispatch('close'); }
</script>

{#if visible}
  <div class="overlay" on:click|self={close}>
    <div class="img-wrapper">
      <button class="close-btn" aria-label="Lukk" on:click={close}>✕</button>
      <img src={imgSrc} alt="Overlay image" class="overlay-img" />
    </div>
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    inset: 0;
    /* Remove background color, add blur effect */
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    background: rgba(20,16,72,0.10); /* subtle tint, mostly for fallback */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
  }
  .img-wrapper {
    position: relative;
    padding: 2vw;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    max-height: 100vh;
  }
  .overlay-img {
    max-width: 96vw;
    max-height: 96vh;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 18px; /* rounded corners */
    box-shadow: none;
    display: block;
    margin: 0;
    background: transparent;
  }
  .close-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: rgba(255,255,255,0.85);
    border: none;
    font-size: 2.2rem;
    color: #141048;
    cursor: pointer;
    z-index: 2;
    border-radius: 50%;
    width: 2.7rem;
    height: 2.7rem;
    line-height: 2.7rem;
    text-align: center;
    box-shadow: 0 2px 8px rgba(20,16,72,0.08);
    transition: background 0.15s;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  .close-btn:hover {
    background: #eee;
  }
</style>