<!-- Header.svelte -->
<script lang="ts">
  export let openOverlay: (img: string) => void;
  let open = false;

  function toggle() { open = !open; }
  function close() { open = false; }

  // Close when clicking outside the menu
  function clickOutside(node: HTMLElement) {
    const handle = (e: Event) => {
      if (!node.contains(e.target as Node)) open = false;
    };
    document.addEventListener("click", handle, true);
    return {
      destroy() {
        document.removeEventListener("click", handle, true);
      }
    };
  }
</script>

<div class="header" role="banner">
  <div class="logo">
    <img src="/paideia_logo.png" alt="Paideia logo" />
  </div>

  <!-- Desktop nav -->
  <nav class="nav-desktop" role="navigation" aria-label="Primary">
    <a class="nav-link" href="#" on:click|preventDefault={() => openOverlay('/meme6.png')}>Home</a>
    <a class="nav-link" href="#" on:click|preventDefault={() => openOverlay('/meme2.png')}>Om oss</a>
    <a class="nav-link" href="#" on:click|preventDefault={() => openOverlay('/meme3.png')}>Ny student</a>
    <a class="nav-link" href="#" on:click|preventDefault={() => openOverlay('/meme4.png')}>Arrangementer</a>
    <a class="nav-link" href="#" on:click|preventDefault={() => openOverlay('/meme5.png')}>Paideia FC</a>
  </nav>

  <!-- Mobile hamburger + popover -->
  <div class="mobile-wrap" use:clickOutside>
    <button
      class="hamburger"
      aria-label="Toggle menu"
      aria-controls="mobile-menu"
      aria-expanded={open}
      on:click={toggle}
      type="button"
    >
      <span class="bar" aria-hidden="true"></span>
      <span class="bar" aria-hidden="true"></span>
      <span class="bar" aria-hidden="true"></span>
    </button>

    {#if open}
      <div
        id="mobile-menu"
        role="menu"
        aria-label="Mobile menu"
        class="menu-panel"
        on:click={close}
      >
        <a class="menu-item" role="menuitem" href="#" on:click|preventDefault={() => openOverlay('/meme6.png')}>Home</a>
        <a class="menu-item" role="menuitem" href="#" on:click|preventDefault={() => openOverlay('/meme2.png')}>Om oss</a>
        <a class="menu-item" role="menuitem" href="#" on:click|preventDefault={() => openOverlay('/meme3.png')}>Ny student</a>
        <a class="menu-item" role="menuitem" href="#" on:click|preventDefault={() => openOverlay('/meme4.png')}>Arrangementer</a>
        <a class="menu-item" role="menuitem" href="#" on:click|preventDefault={() => openOverlay('/meme5.png')}>Paideia FC</a>
      </div>
    {/if}
  </div>
</div>

<style>
  :root {
    --bg: #141048;
    --fg: #e6e6ff;
    --fg-hover: #ffffff;
    --border: rgba(255,255,255,0.08);
    --divider: rgba(255,255,255,0.06);
    --shadow: 0 10px 24px rgba(0,0,0,0.35);
    --radius: 12px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px; /* increased from 56px to 64px */
    background: var(--bg);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 0 0.5rem;
    position: relative;
  }

  .logo {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .logo img {
    height: 54px; /* slightly larger to fit thicker navbar */
    width: auto;
    display: block;
  }

  /* Desktop nav */
  .nav-desktop {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    height: 100%;
    padding-right: 0.5rem;
  }

  .nav-link {
    color: var(--fg);
    text-decoration: none;
    padding: 0 0.75rem;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 0.95rem;
  }
  .nav-link:hover,
  .nav-link:focus { color: var(--fg-hover); }

  /* Mobile controls */
  .mobile-wrap {
    position: relative;
    display: none; /* hidden on desktop, shown on mobile */
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 4px;
    background: transparent;
    border: none;
    padding: 0.6rem;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  .hamburger:focus-visible { outline: 2px solid #7aa2ff; outline-offset: 2px; }

  .bar {
    width: 22px;
    height: 2px;
    background: var(--fg);
    border-radius: 2px;
    display: block;
  }

  /* Popover menu panel (not full width) */
  .menu-panel {
    position: absolute;
    top: calc(100% + 6px);
    right: 6px;
    width: 220px;           /* fixed width so it won't fill the screen */
    background: var(--bg);  /* solid background so text isn't floating */
    border: 1px solid var(--border);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 6px;
    display: flex;
    flex-direction: column;
    z-index: 50;
  }

  .menu-item {
    color: var(--fg);
    text-decoration: none;
    padding: 10px 12px;
    border-radius: 8px;
    display: block;
  }
  .menu-item + .menu-item { margin-top: 2px; }
  .menu-item:hover,
  .menu-item:focus {
    color: var(--fg-hover);
    background: rgba(255,255,255,0.06);
    outline: none;
  }

  /* Layout switching */
  @media (max-width: 720px) {
    .nav-desktop { display: none; }   /* hide inline links on mobile */
    .mobile-wrap { display: block; }  /* show hamburger + popover */
  }
</style>
