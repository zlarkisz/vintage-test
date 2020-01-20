<template>
  <form ref="form" @submit.prevent="firstValidate().then(sendForm)">
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
    <button
      ref="button"
      :disabled="submitDisabled"
      :class="['button', { 'active' : submitDisabled }]"
    >Get in touch</button>
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
          this.setDisabledButton();
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
    },
    setDisabledButton() {
      const button = this.$refs.button;

      setTimeout(() => {
        button.classList.add("success");
      }, 3000);

      setTimeout(() => {
        button.classList.remove("active", "success");
      }, 4500);
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
    display: inline-block;
    width: 220px;
    height: 60px;
    color: #fff;
    border: 0;
    text-align: center;
    text-decoration: none;
    line-height: 56;
    box-sizing: border-box;
    background-color: $c-gray;
    outline: none;
    transition: all ease 0.5s;
    margin-top: 50px;
    font: 700 11px/11px "Samplino";
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:hover {
      animation: text-shadow 1.5s ease-in-out infinite;
      font: 700 20px/20px "Samplino";
    }

    @keyframes text-shadow {
      0% {
        transform: translateY(0);
        text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
      }
      20% {
        transform: translateY(-1em);
        text-shadow: 0 0.125em 0 #0c2ffb, 0 0.25em 0 #2cfcfd,
          0 -0.125em 0 #fb203b, 0 -0.25em 0 #fefc4b;
      }
      40% {
        transform: translateY(0.5em);
        text-shadow: 0 -0.0625em 0 #0c2ffb, 0 -0.125em 0 #2cfcfd,
          0 0.0625em 0 #fb203b, 0 0.125em 0 #fefc4b;
      }
      60% {
        transform: translateY(-0.25em);
        text-shadow: 0 0.03125em 0 #0c2ffb, 0 0.0625em 0 #2cfcfd,
          0 -0.03125em 0 #fb203b, 0 -0.0625em 0 #fefc4b;
      }
      80% {
        transform: translateY(0);
        text-shadow: 0 0 0 #0c2ffb, 0 0 0 #2cfcfd, 0 0 0 #fb203b, 0 0 0 #fefc4b;
      }
    }
  }

  .active {
    font-size: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    animation: rotate 1.4s ease 0.5s infinite;
    border: 2px solid $c-white;
    border-left-color: transparent;
    background-color: transparent;

    &:hover {
      font: 700 0px/11px "Samplino";
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(360deg);
    }
  }

  .success {
    position: relative;
    background-color: #fff;
    animation: bounce 0.3s ease-in;

    &::before {
      content: "";
      position: absolute;
      background: url("../../assets/images/tick.svg") no-repeat;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 31px;
      height: 31px;
      line-height: 31px;
      top: 8px;
    }
  }

  @keyframes bounce {
    0% {
      transform: scale(0.9);
    }
  }
}
</style>