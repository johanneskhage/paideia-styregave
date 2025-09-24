<script lang="ts">
  // No props needed for this static example
</script>

<div class="about-paideia">
  <img src="/paideia_logo_white.jpg" alt="Paideia logo" class="about-logo" />
  <div class="about-text">
    <h2>Om Paideia linjeforening</h2>
    <p>
      Paideia linjeforening er en sosial og faglig forening for studenter ved lektorutdanningen ved NTNU. Vi jobber for å skape et inkluderende miljø, arrangere spennende aktiviteter og styrke samholdet blant studentene. Hos oss får du muligheten til å delta på alt fra faglige seminarer til sosiale sammenkomster, og bli kjent med både nye og erfarne studenter.
    </p>
  </div>
</div>

<style>
  .about-paideia {
    display: flex;
    align-items: center;
    gap: 2rem;
    background: #7a5368;
    color: #fff;
    border-radius: 10px;
    padding: 2rem 1.5rem;
    margin: 2rem auto 2rem auto;
    max-width: 800px;
    box-shadow: 0 2px 12px rgba(20,16,72,0.08);
  }

  .about-logo {
    width: 120px;
    height: auto;
    border-radius: 8px;
    background: #fff;
    padding: 0.5rem;
    box-shadow: 0 1px 6px rgba(20,16,72,0.10);
  }

  .about-text {
    flex: 1;
  }

  .about-text h2 {
    margin: 0 0 0.75rem 0;
    font-size: 1.5rem;
    color: #ffffff;
    font-weight: 700;
  }

  .about-text p {
    margin: 0;
    font-size: 1.05rem;
    color: #ffffffd6;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    .about-paideia {
      flex-direction: column;
      align-items: flex-start;
      padding: 1.2rem 0.7rem;
      gap: 1rem;
    }
    .about-logo {
      width: 90px;
      margin: 0 auto;
      display: block;
    }
  }
</style>