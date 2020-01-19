<template>
  <section class="base-checkbox">
    <input v-model="checked" type="checkbox" :name="name" id="checkbox" />
    <label
      :class="['base-checkbox__label', { 'base-checkbox--error' : error }, { 'base-checkbox--active' : checked } ]"
      :for="name"
    >{{ label }}</label>
  </section>
</template>

<script>
export default {
  name: "BaseCheckbox",

  props: {
    label: {
      type: String,
      required: false,
      default: ""
    },
    name: {
      type: String,
      required: false,
      default: ""
    },
    value: {
      type: Boolean,
      required: false,
      default: false
    },
    firstSubmit: {
      type: Boolean,
      required: false,
      default: false
    },
    errors: {
      type: Array,
      required: false,
      default: () => []
    }
  },

  data: () => ({
    checked: false
  }),

  computed: {
    error() {
      return this.errors.includes(this.name);
    }
  },

  watch: {
    checked() {
      this.$emit("input", this.checked);
      if (this.firstSubmit) {
        this.$emit("change");
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/css/variables";

.base-checkbox {
  > input {
    display: none;

    &:checked + label::before {
      content: "";
      text-align: center;
      background-image: url("~assets/images/tick.svg");
    }
  }
  &__label {
    &::before {
      content: "";
      display: inline-block;
      width: 15px;
      height: 15px;
      background: $c-white;
      vertical-align: middle;
      margin-right: 19px;
    }

    @media only screen and (max-width: 992px) {
      font: 300 15px "Samplino";
    }
  }

  &--error {
    color: red;
  }

  &--active {
    color: $c-white;
  }
}
</style>