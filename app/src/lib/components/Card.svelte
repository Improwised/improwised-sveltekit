<script>
    export let title = "Card Title";
    export let description = "Card Description";
    export let icon = ""; // SVG icon passed as HTML
    let gradientX = 45.5;
    let gradientY = -200;

    // Update gradient position relative to the specific card
    function updateGradient(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      gradientX = event.clientX - rect.left;
      gradientY = event.clientY - rect.top;
    }
  </script>

  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="card-custom flex flex-col items-center text-center shadow-lg p-6 bg-white relative overflow-hidden"
    on:mousemove={updateGradient}
    style="--gradient-x: {gradientX}px; --gradient-y: {gradientY}px;"
  >
    <div class="icon-container mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
      {@html icon}
    </div>
    <h3 class="text-xl font-semibold">{title}</h3>
    <p class="mt-2 text-gray-600">{description}</p>
  </div>


