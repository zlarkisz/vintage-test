<template>
  <section>
    <input
      v-model="value"
      type="text"
      :name="name"
      :class="['base-input', { 'base-input--error' :error }]"
    />
    <label :for="name" :class="error ? 'error' : ''">{{ label }}</label>
    <span v-if="error" class="error-message" >Invalid input field</span>
  </section>
</template>

<script>
export default {
  name: "BaseInput",

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
    errors: {
      type: Array,
      required: false,
      default: () => []
    },
    mask: {
      type: String,
      required: false,
      default: ""
    },
    firstInput: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data: () => ({
    value: null
  }),

  watch: {
    value() {
      this.$emit("input", this.value);
      if (this.firstInput) this.$emit("change");
    }
  },

  computed: {
    error() {
      return this.errors.includes(this.name);
    }
  },

  created() {
    if (this.mask) this.value = this.mask;
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/variables";

section {
  width: 100%;
  position: relative;

  .base-input {
    background: none;
    border: none;
    border-bottom: 1px solid $c-gray;
    text-decoration: none;
    outline: none;
    color: $c-gray;
    margin: 10px 0;
    cursor: pointer;
    width: 100%;
    transition: 0.5s;
    font: 300 18px "Samplino";
    padding-left: 100px;
    padding-bottom: 10px;
    box-sizing: border-box;
    position: relative;

    &--error {
      color: red;
      border-bottom: 1px solid red;
    }

    @media only screen and (max-width: 992px) {
      font: 300 15px "Samplino";
      padding-left: 70px;
    }

    &:focus {
      border-bottom: 1px solid $c-white;
      color: $c-white;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }

  input:focus + label {
    color: $c-white;
    transition: 0.5s;
  }

  label {
    position: absolute;
    font: 300 18px "Samplino";
    left: 0;
    top: 10px;

    &.error {
      color: red;
    }

    @media only screen and (max-width: 992px) {
      font: 300 15px "Samplino";
    }
  }
}
</style>