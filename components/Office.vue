<template>
  <section>
    <div class="office bg_black">
      <div class="office__content">
        <h3 class="office__title c_white">Our Offices</h3>

        <base-tabs :tabs="markers" />

        <h4 class="office__subtitle c_white">{{ markPosition.title }}</h4>
        <div class="office__info">
          <p class="c_white">{{ markPosition.address }}</p>
          <p class="c_white">{{ markPosition.postal_office }}</p>
          <p class="c_white">{{ markPosition.country }}</p>
        </div>
      </div>

      <base-map />
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import BaseMap from "@/components/base/BaseMaps";
import BaseTabs from "@/components/base/BaseTabs";

export default {
  name: "Office",

  components: {
    BaseTabs,
    BaseMap
  },

  computed: {
    ...mapGetters({ markers: "map/markers", markPosition: "map/markPosition" })
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/mixins";

.office {
  @include flex(flex-start, space-between);

  @media only screen and (max-width: 992px) {
    flex-direction: column;
  }

  &__content {
    width: 50%;
    padding: 100px 10px 60px 60px;
    box-sizing: border-box;

    @media only screen and (max-width: 992px) {
      width: 100%;
      padding: 30px 30px 60px;
    }
  }

  &__title {
    margin-bottom: 30px;
  }

  &__subtitle {
    margin-bottom: 25px;
  }

  &__info {
    > p {
      font: 300 11px/20px "Samplino";
    }
  }
}
</style>