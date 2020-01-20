<template>
  <section>
    <div class="communication">
      <h3 class="communication__title c_white">Contact Us</h3>
      <div class="communication__content">
        <base-form />

        <p>
          Please tell us more about your request and give us info about your
          company and country
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import BaseForm from "@/components/base/BaseForm";

export default {
  name: "Communication",

  components: {
    BaseForm
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/mixins";

section {
  background-image: url("~assets/images/greenBg.png");
  background-position: center;
  background-size: cover;
  padding: 90px 60px 100px;

  @media only screen and (max-width: 992px) {
    padding: 30px 30px 60px;
  }

  .communication {
    &__content {
      margin-top: 30px;
      @include flex(flex-satrt, space-between);

      @media only screen and (max-width: 992px) {
        flex-direction: column;
      }

      > p {
        font: 300 18px/34px "Samplino";
        max-width: 540px;
        margin-left: 10px;

        @media only screen and (max-width: 992px) {
          margin-left: 0;
          margin-top: 20px;
          font: 300 15px/34px "Samplino";
        }
      }
    }
  }
}
</style>