<template>
  <div class="tabs">
    <span
      v-for="(tab, i) in tabs"
      :key="i"
      :class="['tabs__item', 'c_white', { 'selected' : tab.name === selectedTab.name }]"
      @click="setTab(tab)"
    >{{ tab.name }}</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "BaseTabs",

  props: {
    tabs: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  data() {
    return {
      selectedTab: this.tabs[0]
    };
  },

  created() {
    this.setTab(this.selectedTab);
  },

  methods: {
    ...mapActions({ setTabAction: "map/setTab" }),
    setTab(tab) {
      this.selectedTab = tab;
      this.setTabAction(this.selectedTab);
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/variables";
@import "@/assets/css/mixins";

.tabs {
  margin-bottom: 40px;

  @media only screen and (max-width: 576px) {
    @include flex(flex-start, center);
    flex-direction: column;
    margin-bottom: 20px;
  }

  &__item {
    font-size: 12px;
    padding: 5px 5px 5px 0;
    text-transform: uppercase;

    &.selected {
      color: $c-green;
    }

    &:hover {
      cursor: pointer;
    }
  }
}
</style>