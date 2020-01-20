<template>
  <section class="contacts">
    <h1 class="contacts__title">Contacts</h1>
    <div class="contacts__content">
      <div class="headquarters">
        <h3 class="headquarters__title">
          <span>GNS</span> Headquarters
        </h3>
        <div class="headquarters__info">
          <div class="headquarters__left">
            <div>
              <p v-for="(item, i) in headquarters" :key="i">{{ item.designation }}</p>
              <base-phone />
            </div>
          </div>
          <div class="headquarters__right">
            <div>
              <p>Email</p>
              <a href="mailto:info@gns-worldwide.com">info@gns-worldwide.com</a>
              <p>Send message</p>
              <a href="viber://chat?number=+41 41 544 62 00">Viber us</a>
              <p>Send form</p>
              <p class="contact" @click.prevent="goToForm">Contact us</p>
            </div>
          </div>
        </div>
      </div>
      <div class="support">
        <h3 class="support__title">
          Technical support
          <span>24/7</span>
        </h3>
        <div>
          <p>
            GMS understands that it can be hard to follow all new technologies.
            We regularly provide for all our clients educational trainings to
            make your operator`s business earn more and better though our best
            practices.
          </p>
          <base-phone phone="+41 41 544 62 06" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BasePhone from "@/components/base/BasePhone";

export default {
  name: "Contacts",

  components: {
    BasePhone
  },

  data: () => ({
    headquarters: [
      { designation: "Global Message Services Ukraine LLC" },
      { designation: "Bundesstrasse 5 | 3rd Floor" },
      { designation: "6300 Zug" },
      { designation: "Switzerland" }
    ]
  }),

  methods: {
    goToForm() {
      let hiddenElement = document.querySelector(".communication");
      hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }
};
</script>


<style scoped lang="scss">
@import "~assets/css/mixins.scss";
@import "~assets/css/variables.scss";

.contacts {
  padding: 60px 60px 125px;

  @media only screen and (max-width: 992px) {
    padding: 30px 30px 60px;
  }

  &__content {
    @include flex(flex-start, space-between);
    margin-top: 30px;

    @media only screen and (max-width: 992px) {
      flex-direction: column;
    }

    .headquarters {
      max-width: 510px;
      width: 100%;
      margin-right: 10px;

      &__title {
        white-space: nowrap;
        margin-bottom: 30px;

        @media only screen and (max-width: 992px) {
          margin-bottom: 10px;
        }

        > span {
          color: $c-green;
        }
      }

      &__info {
        @include flex(flex-start, space-between);

        @media only screen and (max-width: 576px) {
          flex-direction: column;
        }
      }

      &__left {
        margin-right: 10px;
        > div {
          p {
            white-space: nowrap;

            &:nth-child(4n) {
              margin-bottom: 25px;
            }
          }
        }
      }

      &__right {
        > div {
          a,
          .contact {
            text-transform: uppercase;
            white-space: nowrap;
            color: $c-green;
            font-weight: 700;
            cursor: pointer;
          }
        }
      }
    }

    .support {
      max-width: 548px;
      width: 100%;

      @media only screen and (max-width: 992px) {
        margin-top: 20px;
      }

      &__title {
        margin-bottom: 30px;

        @media only screen and (max-width: 992px) {
          margin-bottom: 10px;
        }

        > span {
          color: $c-green;
        }
      }

      > div {
        > p {
          margin-bottom: 25px;
        }
      }
    }
  }
}
</style>