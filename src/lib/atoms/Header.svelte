<script lang="ts">
  // No props or state needed for this component
</script>

<div class="header">
  <div class="logo">
    <img src="/paideia_logo.png" alt="Paideia logo" />
  </div>

  <!-- changed nav links -->
  <div class="nav-links">
    <a class="nav-link" href="/">Home</a>
    <a class="nav-link" href="/om-oss">Om oss</a>
    <a class="nav-link" href="/ny-student">Ny student</a>
    <a class="nav-link" href="/arrangementer">Arrangementer</a>
    <a class="nav-link" href="/paideia-fc">Paideia FC</a>
  </div>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0; /* no padding around header */
    border-bottom: 1px solid rgba(255,255,255,0.06);
    background-color: #141048;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .logo img {
    width: 150px;
    height: auto;
    display: block;
  }

  /* replaced button styles with link styles */
  .nav-links {
    display: flex;
    padding-right: 1.5rem;
    gap: 1rem;
    align-items: center;
  }

  .nav-link {
    color: #e6e6ff;
    text-decoration: none;
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    font-size: 0.9rem;
  }

  .nav-link:hover {
    color: #ffffff;
  }
</style>