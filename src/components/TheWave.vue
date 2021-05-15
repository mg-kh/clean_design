<template>
  <div class="wave__container"></div>
</template>

<script>
import { SVG } from "@svgdotjs/svg.js";

export default {
  mounted() {
    var draw = SVG().addTo(".wave__container").size("100%", "100%");
    draw.viewbox(0, 0, 1800, 100);

    var path = draw
      .path(
        "M903 36.5C441.845 -28.5107 248.833 9.50002 0.5 36.5V106H1889V13.5C1889 13.5 1396 106 903 36.5Z"
      )
      .attr({ fill: "#e5f4f4" });
    path
      .animate(2000)
      .ease("<>")
      .plot(
        "M903 39.5C440.906 97.463 248.833 12.5 0.5 39.5V109H1889V16.5C1889 16.5 1477 -32.5 903 39.5Z"
      )
      .loop(true, true);
  },
};
</script>
