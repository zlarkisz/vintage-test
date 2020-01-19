<template>
  <form @submit.prevent="firstValidate().then(sendForm)">
    <base-input
      v-model="name.value"
      label="Name"
      name="name"
      :errors="errors"
      :first-submit="firstSubmit"
      @change="fieldsValidate"
    />

    <base-input
      v-model="phone.value"
      label="Phone"
      name="phone"
      mask="+380"
      :errors="errors"
      :first-submit="firstSubmit"
      @change="fieldsValidate"
    />

    <base-input
      v-model="email.value"
      label="E-mail"
      name="email"
      :errors="errors"
      :first-submit="firstSubmit"
      @change="fieldsValidate"
    />

    <base-checkbox
      v-model="confirmData.value"
      label="I agree the processing of personal data"
      name="checkbox"
      :errors="errors"
      :first-submit="firstSubmit"
      @change="fieldsValidate"
    />
    <button :disabled="submitDisabled" class="button">Get in touch</button>
  </form>
</template>

<script>
import BaseInput from "@/components/base/BaseInput";
import BaseCheckbox from "@/components/base/BaseCheckbox";
import validate from "@/dependencies/mixins/validate";

export default {
  name: "BaseForm",

  components: {
    BaseInput,
    BaseCheckbox
  },

  mixins: [validate],

  data: () => ({
    name: {
      value: "",
      isValidate: true,
      rule: "name"
    },
    phone: {
      value: "",
      isValidate: true,
      rule: "phone"
    },
    email: {
      value: "",
      isValidate: true,
      rule: "email"
    },
    confirmData: {
      value: false,
      isValidate: true,
      rule: "checkbox"
    },
    firstSubmit: false,
    submitDisabled: false,
    errors: []
  }),

  computed: {
    isValid() {
      return !this.errors.length;
    }
  },

  methods: {
    async sendForm() {
      try {
        this.fieldsValidate();
        if (this.isValid) {
          await this.$api.SubmitApi.submitForm({
            name: this.name.value,
            email: this.email.value,
            phone: this.phone.value
          });
          this.submitDisabled = true;
        }
      } catch (e) {
        console.log(e);
      }
    },
    fieldsValidate() {
      this.errors = [];
      this.validate(this.name);
      this.validate(this.email);
      this.validate(this.phone);
      this.validate(this.confirmData);
    },
    firstValidate() {
      this.firstSubmit = true;
      return Promise.resolve();
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/mixins";
@import "@/assets/css/variables";

form {
  @include flex(flex-start, center);
  flex-direction: column;
  max-width: 540px;
  width: 100%;

  .button {
    font: 700 11px/11px "Samplino";
    text-align: center;
    padding: 35px 0;
    min-width: 280px;
    border: 0;
    background: $c-gray;
    color: $c-white;
    white-space: nowrap;
    text-decoration: none;
    cursor: pointer;
    margin-top: 50px;

    @media only screen and (max-width: 576px) {
      min-width: 110px;
      padding: 15px 0;
      margin-top: 20px;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>