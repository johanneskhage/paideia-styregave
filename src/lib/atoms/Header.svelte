<script lang="ts">
  let open = false;

  function toggle() {
    open = !open;
  }

  function close() {
    open = false;
  }
</script>

<div class="header" role="banner">
  <div class="logo">
    <img src="/paideia_logo.png" alt="Paideia logo" />
  </div>

  <button
    class="hamburger"
    aria-label="Toggle menu"
    aria-controls="main-nav"
    aria-expanded={open}
    on:click={toggle}
    type="button"
  >
    <span class="bar" aria-hidden="true"></span>
    <span class="bar" aria-hidden="true"></span>
    <span class="bar" aria-hidden="true"></span>
  </button>

  <nav id="main-nav" class="nav-links {open ? 'open' : ''}" role="navigation" on:click={close}>
    <a class="nav-link" href="/">Home</a>
    <a class="nav-link" href="/om-oss">Om oss</a>
    <a class="nav-link" href="/ny-student">Ny student</a>
    <a class="nav-link" href="/arrangementer">Arrangementer</a>
    <a class="nav-link" href="/paideia-fc">Paideia FC</a>
  </nav>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    background-color: #141048;
    position: relative;
    height: 50px;
  }

  .logo { display: flex; align-items: center; height: 100%; }

  .logo img { height: 48px; padding-left: 0.5rem; width: auto; display: block; }

  .nav-links {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding-right: 1.5rem;
    height: 100%;
  }

  .nav-link {
    color: #e6e6ff;
    text-decoration: none;
    padding: 0 0.75rem;
    font-size: 0.95rem;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .nav-link:hover,
  .nav-link:focus { color: #ffffff; }

  /* hamburger hidden by default on wide screens */
  .hamburger {
    display: none;
    background: transparent;
    border: none;
    padding: 0.6rem;
    margin-right: 0.5rem;
    cursor: pointer;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .hamburger .bar {
    width: 22px;
    height: 2px;
    background: #e6e6ff;
    border-radius: 2px;
    display: block;
  }

  @media (max-width: 720px) {
    .nav-links { display: none; }

    /* show hamburger on small screens and stack the bars vertically */
    .hamburger {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .nav-links.open {
      display: flex;
      flex-direction: column;
      gap: 0;
      position: absolute;
      right: 0;
      top: 100%;
      background: #141048;
      width: 200px;
      border: 1px solid rgba(255,255,255,0.04);
      box-shadow: 0 6px 18px rgba(0,0,0,0.35);
      padding: 0.5rem 0;
      z-index: 50;
    }

    .nav-links.open .nav-link {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid rgba(255,255,255,0.03);
      height: auto;
      align-items: flex-start;
    }
  }
</style>