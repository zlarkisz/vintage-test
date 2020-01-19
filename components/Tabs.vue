<template>
  <div class="tabs">
    <span
      v-for="(tab, index) in tabs"
      :key="index"
      class="tabs__item"
      :class="tab.name === selectedTab.name ? 'selected' : ''"
      @click="setTab(tab)"
    >{{ tab.name }}</span>
  </div>
</template>

<script>
export default {
  name: "Tabs",

  props: {
    tabs: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  data: () => ({
    selectedTab: this.tabs[0]
  })
};
</script>

<style scoped lang="scss">
@import "@/assets/css/variables";
.tabs__item {
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
</style>