<template>
  <section>
    <div class="office bg_black">
      <div class="office__info">
        <h3 class="office__title">Our Offices</h3>
        <tabs :tabs="markers" />
        <h4 class="color_white office-info_title">{{ markPosition.title }}</h4>
        <div class="office-info_additional">
          <p class="color_white">{{ markPosition.address }}</p>
          <p class="color_white">{{ markPosition.postal_office }}</p>
          <p class="color_white">{{ markPosition.country }}</p>
        </div>
      </div>
      <base-map />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import BaseMap from "@/components/base/BaseMaps";
import Tabs from "@/components/base/BaseTabs";

export default {
  name: "OurOffices",
  components: { Tabs, BaseMap },
  computed: {
    ...mapGetters({ markers: "map/markers", markPosition: "map/markPosition" })
  }
};
</script>

<style scoped lang="scss">
section {
  height: 100vh;
}
@media (min-width: 768px) {
  .office-info_title {
    font-size: 20px;
    margin-top: 30px;
  }
  .office-info_additional {
    p {
      font-size: 9px;
    }
  }
}
@media (min-width: 992px) {
  .office-info_title {
    font-size: 26px;
    margin-top: 40px;
  }
  .office-info_additional {
    p {
      font-size: 11px;
    }
  }
}
</style>