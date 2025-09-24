<script lang="ts">
  export let imgSrc: string = '';
  export let visible: boolean = false;
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  function close() { dispatch('close'); }
</script>

{#if visible}
  <div class="overlay" on:click|self={close}>
    <div class="overlay-content">
      <button class="close-btn" aria-label="Lukk" on:click={close}>✕</button>
      <img src={imgSrc} alt="Overlay image" />
    </div>
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(20,16,72,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
  }
  .overlay-content {
    position: relative;
    background: #fff;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 8px 32px rgba(20,16,72,0.18);
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .overlay-content img {
    max-width: 80vw;
    max-height: 70vh;
    border-radius: 8px;
    display: block;
    margin: 0 auto;
  }
  .close-btn {
    position: absolute;
    top: 0.7rem;
    right: 0.7rem;
    background: #fff;
    border: none;
    font-size: 2rem;
    color: #141048;
    cursor: pointer;
    z-index: 2;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    text-align: center;
    box-shadow: 0 2px 8px rgba(20,16,72,0.08);
  }
  .close-btn:hover {
    background: #eee;
  }
</style>