<template>
  <div class="tabs">
    <span
      v-for="(tab, index) in tabs"
      :key="index"
      class="color_white tabs__item"
      :class="tab.name === selectedTab.name ? 'selected' : ''"
      @click="setTab(tab)"
    >{{ tab.name }}</span>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Tabs",
  props: {
    tabs: {
      type: Array,
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

.tabs__item {
  padding: 5px 5px 5px 0;
  text-transform: uppercase;
  &.selected {
    color: $c-green;
  }
  &:hover {
    cursor: pointer;
  }
}
.tabs__item {
  font-size: 12px;
}
@media (min-width: 768px) {
  .tabs__item {
    font-size: 12px;
  }
}
@media (min-width: 992px) {
  .tabs__item {
    padding: 10px 10px 10px 0;
  }
}
</style>