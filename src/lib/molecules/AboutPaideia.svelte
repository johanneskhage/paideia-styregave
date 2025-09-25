<script lang="ts">
  let expanded = false;
</script>

<div class="about-paideia">
  <img src="/paideia_logo_white.jpg" alt="Paideia logo" class="about-logo" />
  <div class="about-text">
    <h2>Om Paideia linjeforening</h2>
    <div class:clamp-text={!expanded}>
      <p>
        Paideia er linjeforeningen for pedagogikkstudenter ved NTNU, tilknyttet Institutt for Pedagogikk og Livslanglæring på Dragvoll.
      </p>
      <p>
        Vi arrangerer sosiale og faglige aktiviteter som fagdag, eksamensquiz, ball, hyttetur og Pedpils. Her får du mulighet til å bli kjent med medstudenter og skape gode minner.
      </p>
      <p>
        Selv om Paideia er en ung linjeforening fra 2010, har vi tatt til oss mange tradisjoner fra NTNUs eldre linjeforeninger, som Fadderuke, Immatrikuleringsball og dåp.
      </p>
      <img src="/meme1.png" alt="Paideia meme" class="about-meme" />
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

  .about-meme {
    display: block;
    margin: 2rem auto 0 auto;
    max-width: 100%;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(20,16,72,0.10);
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
    .about-meme {
      margin-top: 1.2rem;
    }
  }
</style>