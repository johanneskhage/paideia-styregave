<script lang="ts">
  let expanded = false;
</script>

<div class="about-paideia">
  <img src="/paideia_logo_white.jpg" alt="Paideia logo" class="about-logo" />
  <div class="about-text">
    <h2>Om Paideia linjeforening</h2>
    <div class:clamp-text={!expanded}>
      <p>
        Paideia er linjeforeningen for årsstudium, bachelor og master ved studiet Pedagogikk ved NTNU. Vi tilhører Institutt for Pedagogikk og Livslanglæring, og holder til på Dragvoll.
      </p>
      <p>
        Linjeforeningen arbeider med å arrangere sosiale og faglige sammenkomster og arrangementer for studenter som tilhører pedagogikkstudiet. Dette innebærer arrangementer som fagdag, eksamensquiz, ball, hyttetur og Pedpils! Gjennom linjeforeningen får man muligheter til å bli kjent med sine medstudenter, knytte livslange vennskap, og man får ta del i unike opplevelser. Vi er av studenter og for studenter.
      </p>
      <p>
        Linjeforeninger bygger på tradisjoner. Paideia er en nokså ny linjeforening, da den ble opprettet så sent som i 2010, men vi har tatt til oss flere av tradisjonene som regjerer for NTNUs eldre linjeforeninger. Dette inkluderer blant annet Fadderuke, Immatrikuleringsball og dåp.
      </p>
    </div>
    {#if !expanded}
      <button class="vis-mer-btn" on:click={() => expanded = true}>Vis mer</button>
    {/if}
  </div>
</div>

<style>
  .about-paideia {
    background: #7a5368;
    color: #fff;
    border-radius: 10px;
    padding: 2rem 1.5rem;
    margin: 2rem auto 2rem auto;
    max-width: 800px;
    /* Add shadow to match UpcomingEvent */
    box-shadow: 0 20px 20px rgba(20,16,72,0.08);
    overflow: hidden;
  }

  .about-logo {
    float: left;
    width: 300px;
    max-width: 100%;
    aspect-ratio: 3 / 2;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    background: #fff;
    padding: 0.5rem;
    box-sizing: border-box;
    box-shadow: 0 1px 6px rgba(20,16,72,0.10);
    margin-right: 2rem;
    margin-bottom: 1rem;
    display: block;
  }

  .about-text h2 {
    margin: 0 0 0.75rem 0;
    font-size: 1.5rem;
    color: #ffffff;
    font-weight: 700;
    clear: none;
  }

  .about-text p {
    margin: 0 0 1rem 0;
    font-size: 1.05rem;
    color: #ffffffd6;
    line-height: 1.6;
  }

  .clamp-text {
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 8.5em; /* fallback for non-webkit browsers */
    position: relative;
  }

  .vis-mer-btn {
    margin-top: 0.5rem;
    background: #fff;
    color: #7a5368;
    border: none;
    border-radius: 4px;
    padding: 0.4rem 1.1rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.15s;
  }
  .vis-mer-btn:hover {
    background: #e3e0f9;
  }

  @media (max-width: 700px) {
    .about-logo {
      float: none;
      display: block;
      margin: 0 auto 1rem auto;
      width: 100%;
      max-width: 300px;
      aspect-ratio: 3 / 2;
    }
    .about-paideia {
      padding: 1.2rem 0.7rem;
    }
  }
</style>