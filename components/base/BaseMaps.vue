<template>
  <div class="c_white">
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
  name: "BaseMap",

  data: () => ({
    zoom: constants.ZOOM_VALUE,
    styles: constants.mapStyle
  }),

  computed: {
    ...mapGetters("map", ["markPosition"])
  }
};
</script>

<style scoped lang="scss">
div {
  width: 50%;
  height: 500px;

  @media only screen and (max-width: 992px) {
    width: 100%;
  }

  .map {
    width: 100%;
  }
}
</style>