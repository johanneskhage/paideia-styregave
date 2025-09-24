<script lang="ts">
  // No props needed for this static example
</script>

<div class="upcoming-event">
  <h2 class="section-title">Kommende arrangementer</h2>
  <div class="event-content">
    <img src="/paideia_jub15.jpg" alt="Paideia 15 års jubileum" class="event-image" />
    <div class="event-info">
      <h3 class="event-title">Paideia 15 års jubileum</h3>
      <p class="event-description">
        Bli med og feir Paideias 15-årsjubileum! Vi inviterer alle tidligere og nåværende medlemmer til en uforglemmelig kveld med god mat, drikke, mimring og underholdning. Dette er en unik mulighet til å møte gamle venner og skape nye minner sammen. Velkommen!
      </p>
    </div>
  </div>
</div>

<style>
  .upcoming-event {
    max-width: 800px;
    margin: 2rem auto;
    padding: 1rem 1rem;
    padding-top: 1px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 12px rgba(20,16,72,0.08);
  }

  .section-title {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #141048;
    text-align: left;
    font-weight: 700;
  }

  .event-content {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    background: #e3e0f9;
    border-radius: 8px;
    padding: 1rem;
    color: #464559; /* set text color for all content inside */
  }

  .event-image {
    width: 180px;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 1px 6px rgba(20,16,72,0.10);
  }

  .event-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: inherit; /* ensure it inherits the color */
  }

  .event-title {
    font-size: 1.3rem;
    color: #141048;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  .event-description {
    font-size: 1rem;
    color: inherit; /* use #464559 from .event-content */
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    .event-content {
      flex-direction: column;
      align-items: stretch;
      gap: 1rem;
      padding: 1rem; /* same padding on all sides for mobile */
    }
    .event-image {
      width: 100%;
      max-width: 320px;
      margin: 0 auto;
      display: block;
    }
  }
</style>