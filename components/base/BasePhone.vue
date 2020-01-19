<template>
  <a href="tel:+41-41-544-62-00" class="phone">{{ phone }}</a>
</template>

<script>
export default {
  name: "BasePhone",

  props: {
    phone: {
      type: String,
      required: false,
      default: "+41 41 544 62 00"
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/css/variables.scss";

.phone {
  font: 300 26px/36px "Samplino";
  color: $c-green;
}
</style>