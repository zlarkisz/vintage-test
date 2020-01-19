<template>
  <div class="color_white">
    <GmapMap
      :center="markPosition.position"
      :options="styles"
      :zoom="zoom"
      map-type-id="terrain"
      class="map"
    >
      <GmapMarker :position="markPosition.position" :icon="require('@/assets/images/ellipse.png')" />
    </GmapMap>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import constants from "@/dependencies/constants";
export default {
  name: "Map",
  data() {
    return {
      zoom: constants.ZOOM_VALUE,
      styles: constants.mapStyle
    };
  },
  computed: {
    ...mapGetters({ markPosition: "map/markPosition" })
  }
};
</script>

<style scoped lang="scss">
.map {
  height: 300px;
}
@media (min-width: 768px) {
  .map {
    height: 350px;
  }
}
@media (min-width: 992px) {
  .map {
    height: 450px;
  }
}
</style>